import React, { Component } from 'react';
import NavLink from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="z-depth-4 grey lighten-4 row">
                <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Cadastre-se</button>
                <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Escolha um Curso</button>
            </div>
        );
    }
}

export default Home;