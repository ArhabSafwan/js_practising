class book {
  constructor(title, author, isbn, pubYear, readStatus) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pubYear = pubYear;
    this.readStatus = readStatus;
  }
  status(done) {
    this.readStatus = done;
  }
}
export default book;