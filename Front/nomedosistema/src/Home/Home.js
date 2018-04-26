import React, { Component } from 'react';
import Link from 'react-router-dom/NavLink';


class Home extends Component {
    render() {
        return (
            <div class="menu-conteudo">
                <div className="z-depth-4 grey lighten-4 row">
                    <div className="Row">
                        <p className="decrProj">Caminhos do Emprego é um projeto da Prefeitura onde
                            você encontra vários cursos voltados a comunidade e
                    gratuitos. Faça o seu cadastro e escolha o curso desejado.</p>
                    </div>
                    <div className="Row">
                        <Link to={"/cadastro"}><button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Cadastre-se</button></Link>
                    </div>
                    <div className="Row">
                        <button className="btn waves-effect waves-light blue lighten-2" type="submit" name="action">Escolha um Curso</button>
                    </div>

                </div>
                <div className="administracao">
                    <Link to={"/login"}>Administração</Link>
                </div>
            </div>
        );
    }
}

export default Home;