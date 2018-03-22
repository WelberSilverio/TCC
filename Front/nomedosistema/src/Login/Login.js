import React, { Component } from 'react';
import './Login.css';

class MenuLogin extends Component {
  render() {
    return (
      <div className="menu-login">
        <div className="z-depth-4 grey lighten-4 row">
          <form className="col s12" method="get">
            <div className="Row">
              <div className="input-field col s7 offset-s2">
                <i className="large material-icons prefix">account_box</i>
                <input id="usuario" type="text" className="" />
                <label for="usuario" className="blue-text text-lighten-2 center-align">Usuario</label>
              </div>
            </div>
            <div className="Row ">
              <div className="input-field col s7 offset-s2">
                <i className="material-icons prefix medium">vpn_key</i>
                <input id="senha" type="password" className="" />
                <label for="senha" className="blue-text text-lighten-2 center-align">Senha</label>
              </div>
            </div>

            <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Entrar
              <i class="material-icons right">send</i>
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default MenuLogin;