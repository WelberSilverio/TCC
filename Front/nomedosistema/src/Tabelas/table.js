import React, { Component } from 'react';
import HeadTable from './TableHeader';
import './table.css';

class Table extends Component {
    render() {

        let data = [
            {
                PedidoOriginal: 12312,
                SlipOriginal: 1231,
                GemcoOriginal: 12312,
                NFOriginal: 12312,
                DTOriginal: '01/01/2018',
                ValorOriginal: 10.20
            },
            {
                PedidoOriginal: 12312,
                SlipOriginal: 1231,
                GemcoOriginal: 12312,
                NFOriginal: 12312,
                DTOriginal: '01/01/2018',
                ValorOriginal: 10.20
            }
        ]

        let headers = Object.keys(data[0]);

        return (
            <div className="row">
                <div className="col s12 m12 l6 offset-l2 center">
                    <table cellpadding="1" cellspacing="1" className="table bordered highlight responsive-table">
                        <Header titulos={titulos} />
                        <tbody >
                            <TableRows data={data} headers={headers} />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;