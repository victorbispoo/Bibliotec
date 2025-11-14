
const imagemURL = "./IMGS/harry-potter.jpg";

// adicionar a capa sem remover outros elementos
const divCapa = document.getElementById("CobrirDetalhes");
if (divCapa) {
	const img = document.createElement('img');
	img.src = imagemURL;
	img.alt = 'Capa do Livro';
	img.className = 'book-cover-img';
	// evita remover conteúdo existente
	divCapa.appendChild(img);
}

// Atualizar autor: apenas adicionar o nome após o texto já presente (ex.: "Autor:")
const AutorDetalhes = document.getElementById("detalhes_Autor");
if (AutorDetalhes) {
	const nome = 'J.K. Rowling';
	// evita duplicar caso o script rode mais de uma vez
	if (!AutorDetalhes.textContent.includes(nome)) {
		AutorDetalhes.textContent = AutorDetalhes.textContent.trim() + ' ' + nome;
	}
}

// Título: substituir o placeholder pelo título real
const TituloDetalhes = document.getElementById("detalhes_Titulo");
if (TituloDetalhes) {
	TituloDetalhes.textContent = 'Harry Potter e a Pedra Filosofal';
}

// Publicação: manter o prefixo "Publicação:" e somente acrescentar a data
const PublicacaoDetalhes = document.querySelector(".publicacao");
if (PublicacaoDetalhes) {
	const data = '26 de junho de 1997';
	if (!PublicacaoDetalhes.textContent.includes(data)) {
		PublicacaoDetalhes.textContent = PublicacaoDetalhes.textContent.trim() + ' ' + data;
	}
}

// Sinopse: acrescentar o texto após o prefixo "Sinopse:"
const SinopseDetalhes = document.querySelector(".detalhes_sinopse");
if (SinopseDetalhes) {
	const sinopse = 'Harry Potter, um garoto órfão que vive com seus tios cruéis, descobre no seu 11º aniversário que é um bruxo. Ele é convidado a estudar na Escola de Magia e Bruxaria de Hogwarts, onde faz amigos leais e enfrenta desafios mágicos. Ao longo do ano, Harry desvenda o mistério da Pedra Filosofal e enfrenta o retorno do maligno Lord Voldemort.';
	if (!SinopseDetalhes.textContent.includes('Harry Potter,')) {
		SinopseDetalhes.textContent = SinopseDetalhes.textContent.trim() + ' ' + sinopse;
	}
}