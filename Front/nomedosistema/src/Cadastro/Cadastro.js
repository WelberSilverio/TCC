import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'

class Cadastro extends Component {
    render() {
        return (
            <form className="col s12">
                <div className="z-depth-4 grey lighten-4 row">
                    <div className="Row">
                        <div className="input-field col s7 offset-s2">
                            <input id="CPF" type="text" className="" />
                            <label for="CPF" className="blue-text text-lighten-2 center-align">CPF</label>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="input-field col s7 offset-s2">
                            <input id="Nome" type="text" className="" />
                            <label for="Nome" className="blue-text text-lighten-2 center-align">Nome</label>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="input-field col s4 offset-s2">
                            <input id="dtNasc" type="text" className="" />
                            <label for="dtNasc" className="blue-text text-lighten-2 center-align">Data de Nascimento</label>
                        </div>
                        <div className="input-field col s4 offset-s2">
                            <select>
                                <option value="" disabled selected>Selecione:</option>
                                <option value="Mas">Masculino</option>
                                <option value="Fem">Feminino</option>
                            </select>
                            <label>Sexo</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Finalizar Cadastro</button>
                </div>
            </form>
        );
    }
}

export default Cadastro;