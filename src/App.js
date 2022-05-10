import React from "react";
import './App.css';
import Header from "./components/Header";

function App() {
  const dados = {
    nome: "Leticia Oliveira",
    empresa: "Fiap",
    site: "https://www.fiap.com.br",
    className: "App-link"
  }
  return (
    // JSX - JavaScript Extensible
    <div className="App">
      <Header title="Bem-vindo!" options={dados} />
    </div>
  );
}

export default App;
