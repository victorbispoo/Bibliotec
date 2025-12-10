const API_URL = "http://localhost:3000";
const id_usuario = 4; 

async function carregarReservas() {
  const statusGrid = document.getElementById("booksStatusGrid");
  statusGrid.innerHTML = "";

const resp = await fetch(`${API_URL}/livros`);
const lista = await resp.json();

lista.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("book-card");

  card.innerHTML = `
    <img src="${item.caminho_capa}" alt="${item.titulo_livro}">
    <h3>${item.titulo_livro}</h3>
    <p class="tag">Devolução: ${item.data_devolucao}</p>
  `;

  statusGrid.appendChild(card);
})};