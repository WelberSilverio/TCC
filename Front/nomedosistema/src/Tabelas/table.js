import React, { Component } from 'react';
import HeadTable from './header'
import './table.css';

class Table extends Component {
    render() {

        let titulos = [
            { colname: "Teste", colvalor: "21" },
            { colname: "Teste1", colvalor: "22" },
            { colname: "Teste2", colvalor: "23" }
        ];

        return (
            <div className="row">
                <div className="col s12 m12 l6 offset-l2 center">
                    <table cellpadding="1" cellspacing="1" className="table table-hover responsive-table bordered" id="myTable">
                        <HeadTable titulos={titulos}/>
                        <tbody >
                            <tr>
                                <td>Coluna 1</td>
                                <td>Coluna 2</td>
                                <td>Coluna 3</td>
                                <td>Coluna 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;