import React, { Component } from 'react';
import HeadTable from './TableHeader';
import './table.css';

class Table extends Component {
    render() {

        let titulos = [
            { colname: "Teste", colvalor: "21" },
            { colname: "Teste1", colvalor: "22" },
            { colname: "Teste2", colvalor: "23" }
        ];

        let head = Object.keys(titulos[0]);

        return (
            <div className="row">
                <div className="col s12 m12 l6 offset-l2 center">
                    <table cellpadding="1" cellspacing="1" className="table table-hover responsive-table bordered striped" id="myTable">
                        <Header titulos={titulos} />
                        <tbody >
                            <TableRows data={titulos} headers={head}/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;