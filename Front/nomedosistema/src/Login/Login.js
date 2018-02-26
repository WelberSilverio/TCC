import React, { Component } from 'react';
import './Login.css';

class MenuLogin extends Component {
  render() {
    return (
      <div className="menu-login">
        <form>
          <div className="input-field s1">
            <input id="usuario" type="text" className="validate" />
            <label for="usuario">Usuario</label>
          </div>
          <div className="input-field s1">
            <input id="senha" type="text" className="validate" />
            <label for="senha">Senha</label>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Entrar
              <i class="material-icons right">send</i>
          </button>

        </form>
      </div>
    );
  }
}

export default MenuLogin;