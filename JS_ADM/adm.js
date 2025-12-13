function adicionarEventos() {
  const btnVoltar = document.getElementById("voltar_inicio");
  const ListarLivros = document.getElementById("listar_livro")
  const AddLivro = document.getElementById("add_livro");
  const EditLivro = document.getElementById("editar_livro")
  const AddUsers = document.getElementById("cadastro")
  const EditUsers = document.getElementById("editar_users");
  const RemoveUsers = document.getElementById("remover_user")


  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.history.back();
    });
  }
  if (ListarLivros) {
    ListarLivros.addEventListener("click", () => {
      window.location.href = "listar.html";
    })
  }
  if (AddLivro) {
    AddLivro.addEventListener("click", () => {
      window.location.href = "AddLivro.html";
    })
  }
  if (EditLivro) {
    EditLivro.addEventListener("click", () => {
      window.location.href = "EditarLivros.html";
    })
  }
}

adicionarEventos();