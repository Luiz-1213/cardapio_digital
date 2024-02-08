import fotoRestaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import {ItemCardapio} from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";
import React from "react";


export function App(){
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);
  return <>
        <img src= {fotoRestaurante} alt="" className="capa" />
        <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada}/>
        <div className="menu">
          {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/> )}
        </div>
  </>

}