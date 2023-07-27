const booksDB = 

{
    livro0: 
    
    {
        name: "Pequeno manual antirracista",
        pages: 136,
        cover: 'pequeno-manual-antirracista.jpg',
        author: 'Djamila Ribeiro'
    },
    livro1: 
    
    {
        name: "Idéias para adiar o fim do mundo",
        pages: 104,
        cover: 'ideas-para-adiar-o-fim-do-mundo.jpg',
        author: 'Ailton Krenak'
    }
    ,
    livro2: 
    
    {
        name: "Torto arado",
        pages: 264,
        cover: 'torto-arado.jpg',
        author: 'Itamar Vieira Júnior'
    }

    
}

const books = document.querySelector(".books")




const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


function createBook(id){
    const book = createElement('div', 'book')
    books.appendChild(book)

    const img = createElement('div', 'img')
    book.appendChild(img)

    img.innerHTML = `<img src="images/${booksDB['livro' + id].cover}" alt="">`

    const info = createElement('div', 'info')
    book.appendChild(info)

    info.innerHTML = `
        <span>Título:</span>
        <p>${booksDB['livro' + id].name}</p>
        <span>N° Páginas:</span>
        <p>${booksDB['livro' + id].pages}</p>
        <span>Autor:</span>
        <p>${booksDB['livro' + id].author}</p>`

    book.innerHTML += `<a href="images/${booksDB['livro' + id].cover}" class="buttonDownload" download>Download</a>`

}

for(i=0; Object.keys(booksDB).length > i;i++){
    createBook(i)
}


