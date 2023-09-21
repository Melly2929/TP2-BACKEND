
const summonBooks = require("./db");

exports.getAll = () => summonBooks.books;

exports.getById = (id) => {
  const bookById = (book) => book.id === id;
  return summonBooks.books.find(bookById);
};
exports.getByAuthor = (author) => {
  const bookByAuthor = (books) =>
    books.author.toLowerCase().includes(author.toLowerCase());
  return summonBooks.books.filter(bookByAuthor);
};
exports.getByTag = (tag) => {
  const bookByTag = (book) =>
    book.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase());
  return summonBooks.books.filter(bookByTag);
};
exports.getByName = (name) => {
  const bookByName = (book) =>
    book.name.toLowerCase().includes(name.toLowerCase());
  return summonBooks.books.filter(bookByName);
};


