import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo-full-white-and-blue.webp"

const App = () => {
  const [books, setBooks] = useState([]);
  const [filtroBooks, setFiltroBooks] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const pegarBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/books");
        setBooks(response.data);
        setFiltroBooks(response.data);
      } catch (error) {
        console.log("Erro ao buscar os livros", error);
      }
    };
    pegarBooks();
  }, []);

  const handleBuscar = (e) => {
    const searchTerm = e.target.value;
    setBusca(searchTerm);
    if (searchTerm === "") {
      setFiltroBooks(books);
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltroBooks(filtered);
    }
  };

  return (
    <div className="app-container">
      <header>
        <img src={logo} alt="Logo da Companhia" className="app-logo" />
        <h1>Bem vindo à API de livros</h1>
      </header>
      <input
        type="text"
        placeholder="Buscar por título"
        value={busca}
        onChange={handleBuscar}
        className="search-input"
      />
      <h2>Lista de Livros</h2>
      <ul className="books-list">
        {filtroBooks.map((book) => (
          <li key={book.id} className="book-item">
            <div className="book-card">
              <h3>{book.title}</h3>
              <p>Autor: {book.author}</p>
              <p>Ano de Publicação: {book.publishedYear}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;