import React from 'react';

import EntradaIcon from './assets/entradas.svg';
import SaidasIcon from './assets/saidas.svg';
import TotalIcon from './assets/total.svg';
import LuIcon from './assets/Lu.svg';

import './reset.css';

import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="headerTitle">
          <h3>openbanking</h3>
        </div>
          <div className="headerUsuario">
              <h4>Luciene Lira</h4>
              <div>
                <img src={LuIcon} alt="Lu" />
              </div>
        </div>
           {/*** Cards ***/}
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3>Entradas</h3>
              <img src={EntradaIcon} alt="Entradas" />
            </div>
            <h2 className="card-title">R$ 7.500,00</h2>
          </div>
          <div className="card ">
            <div className="card-header">
              <h3>Saídas</h3>
              <img src={SaidasIcon} alt="Saídas" />
            </div>
            <h2 className="card-title">R$ 1.703,00</h2>
          </div>
          <div className="card total">
            <div className="card-header">
              <h3>Saldo Atual</h3>
              <img src={TotalIcon} alt="Total" />
            </div>
            <h2 className="card-title">R$ 5.797,00</h2>
          </div>
        </div>
      </div>
          {/*** Tabelas ***/}
      <div className="content">
        <div className="table">
          <div className="table-header">
            <h5>Título</h5>
            <h5>Categoria</h5>
            <h5>R$</h5>
            <h5>Data</h5>
          </div>
          <div className="table-body">
            <div className="table-body-row">              
              <span>Pagamento</span>
              <span>Extrato Anterior</span>
              <span className="green">R$ 7.500,00</span>
              <span>10/04/2020</span>
            </div>
            <div className="table-body-row">
              <span>Agendamento</span>  

              <span>Conta de Luz - R$ 350,00</span>              
              
              <span>Conta de Água - R$ 250,00</span>
              
              <span>Aluguel - 15/04/2020 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="alert alert-info" role="alert">
  <strong>Qualquer dúvida!</strong> estamos à disposição pelo nosso chat online, que funciona 
        das 9 às 18h, ou pelo e-mail https://www.reclameaqui.com.br/fale-conosco/, combinado? :) 
        Estamos AQUI torcendo por você! Pode sempre contar com a gente!.
</div>
    </div>
  );
}

export default App;
