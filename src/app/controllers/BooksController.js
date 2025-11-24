import data from "../../data.js";

// Métodos de Book

export class BooksController {
  constructor() {
    this.books = data;
  }

  list(req, res) {
    return res.json(this.books);
  }

  show(req, res) {
    const findBook = this.books.find((book) => book.id == req.params.id);
    return res.json(findBook);
  }

  create(req, res) {
    const { title, author, theme, description, anoPublicacao, paginas } =
      req.body;
    const newBook = {
      title: title,
      author: author,
      theme: theme,
      description: description,
      anoPublicacao: anoPublicacao,
      paginas: paginas,
    };
    this.books.push(newBook);
    
     return res.send("Criado!");
  }

  update(req, res) {



  }

  destroy(req, res) {
    console.log("Destroy");
  }
}

// Criamos uma instância pronta para uso
const booksController = new BooksController();

// Exportamos a instância
export default booksController;
