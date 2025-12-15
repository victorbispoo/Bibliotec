// editlivros.js
const params = new URLSearchParams(window.location.search);
const idLivro = params.get("id");
let livroSelecionadoId = null;

console.log("ID do usuario para editar:", idLivro);

const API = "http://localhost:3000/usuarios";

async function carregarLivrosDisponiveis() {
  try {
    const res = await fetch(`${API}`);
    const livros = await res.json();
    console.log("Livros recebidos:", livros);

    const select = document.getElementById("select-livro");
    select.innerHTML = `<option value="">Selecione um livro</option>`;

    livros.forEach(livro => {
      // se no seu JSON o campo id for diferente, adapte aqui
      const option = document.createElement("option");
      option.value = livro.id;
      option.textContent = `${livro.id} - ${livro.nome}`;
      select.appendChild(option);
    });

    // se veio id pela URL e existe no select, marque-o
    if (idLivro) {
      select.value = idLivro;
      carregarLivro(idLivro);
    }
  } catch (err) {
    console.error("Erro ao carregar lista de livros:", err);
  }
}

async function carregarLivro(id) {
  try {
    const resposta = await fetch(`${API}/${id}`);
    if (!resposta.ok) throw new Error("Livro não encontrado");
    const livro = await resposta.json();

    livroSelecionadoId = id;

    document.getElementById("nome").value = livro.nome ?? "";
    document.getElementById("email").value = livro.email ?? "";
    document.getElementById("senha").value = livro.senha ?? "";
    document.getElementById("data_nascimento").value = livro.data_nascimento ?? "";
    document.getElementById("perfil").value = livro.perfil ?? "";
    document.getElementById("foto").value = livro.foto ?? "";

  } catch (error) {
    console.error("Erro ao carregar livro:", error);
    alert("Erro ao carregar livro. Veja console.");
  }
}

document.getElementById("select-livro").addEventListener("change", (e) => {
  if (!e.target.value) return;
  carregarLivro(e.target.value);
});

document.getElementById("form-atualizar").addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!livroSelecionadoId) {
    alert("Selecione um livro primeiro");
    return;
  }

  const livroAtualizado = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value,
    data_nascimento: document.getElementById("data_nascimento").value,
    perfil: document.getElementById("perfil").value,
    idioma: document.getElementById("foto").value,
  };

  try {
    const resposta = await fetch(`${API}/${livroSelecionadoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroAtualizado)
    });

    if (resposta.ok) {
      alert("Livro atualizado com sucesso!");
      window.location.href = "../FrontDoADM/listarLivros.html";
    } else {
      const texto = await resposta.text();
      console.error("Erro no PUT:", resposta.status, texto);
      alert("Erro ao atualizar livro. Veja console.");
    }
  } catch (err) {
    console.error("Erro na requisição PUT:", err);
    alert("Erro ao atualizar livro. Veja console.");
  }
});

// inicia
carregarLivrosDisponiveis();
