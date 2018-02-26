import React, { Component } from 'react';
import './Login.css';

class MenuLogin extends Component {
  render() {
    return (
      <div className="menu-login">
        <div class="card grey lighten-2">
          <form>
            <div className="input-field col s3">
              <input id="usuario" type="text" className="validate " />
              <label for="usuario" className="blue-text text-lighten-2 center-align">Usuario</label>
            </div>
            <div className="input-field col s3">
              <input id="senha" type="password" className="validate " />
              <label for="senha" className="blue-text text-lighten-2 center-align">Senha</label>
            </div>
            
              <button class="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Entrar
              <i class="material-icons right">send</i>
              </button>
           
          </form>
        </div>
      </div>
    );
  }
}

export default MenuLogin;