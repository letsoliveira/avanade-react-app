import React, { useEffect, useState } from "react";
import logo from '../logo.svg';
import '../App.css';

function Header(props){
    const [company, setCompany] = useState(props.options.empresa || "Nenhuma Informada");
    const [name, setName] = useState(props.options.nome);
    const [site, setSite] = useState(props.options.site);
    //useEffect é um hook que executa automaticamente, toda vez que a página é carregada - componentDidMount()
    //executa automaticamente toda vez que um estado é alterado.
    useEffect(()=>{
        setCompany(company.toUpperCase());
    },[company]);
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
        <a
          className={props.options.className}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}
        </a>
        <button onClick={(e) => setCompany("Avanade")}>
            {`Mudando o nome de: ${company}`}</button>
      </header>
    );
}

export default Header;