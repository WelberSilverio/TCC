import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom'

class Cadastro extends Component {
    render() {
        return (
            <div class="menu-conteudo">
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
                                <input id="dtNasc" type="text" class="datepicker" data-mask="00/00/0000" />
                                <label for="dtNasc" className="blue-text text-lighten-2 center-align">Data de Nascimento</label>
                            </div>
                            <div className="input-field col s3">
                                <select id="sexo">
                                    <option value="" disabled selected>Selecione:</option>
                                    <option value="Mas">Masculino</option>
                                    <option value="Fem">Feminino</option>
                                </select>
                                <label for="sexo">Sexo</label>
                            </div>
                        </div>
                        <div className="Row">
                            <div className="input-field col s4 offset-s1">
                                <input id="RG" type="text" className="" />
                                <label for="RG" className="blue-text text-lighten-2 center-align">RG</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="orgExpedidor" type="text" className="" />
                                <label for="orgExpedidor" className="blue-text text-lighten-2 center-align">Orgão Expedidor</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="estado" type="text" className="" />
                                <label for="estado" className="blue-text text-lighten-2 center-align">Estado</label>
                            </div>
                        </div>
                        <div className="Row">
                        </div>
                        <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Finalizar Cadastro</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Cadastro;