import React, { Component } from 'react';
import './Login.css';

class MenuLogin extends Component {
    render() {
      return (
        <div className="menu-login">
        <form>
            <input type="text" id="user" name="user" class="form-control text-center" placeholder="User"/>
            <input type="password" id="paw" name="senha" class="form-control text-center" placeholder="Password"/>
            <input type="submit" id="submit" class="form-control text-center btn-info" value="Confirmar"/>
        </form>
    </div>
      );
    }
  }

export default MenuLogin;