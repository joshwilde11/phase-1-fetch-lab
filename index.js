function renderBooks(data) {
  const bookList = document.getElementById('title');
  data.forEach(book => {
    const bookItem = document.createElement('li');
    li.innerHTML = book.name;
    main.appendChild(bookItem);
  });
}

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error fetching books:', error));
}
