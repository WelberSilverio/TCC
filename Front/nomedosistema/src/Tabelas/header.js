import React, { Component } from 'react';
import './table.css';

class HeadTable extends Component {
    render() {

        let litatitulos = this.props.titulos.map(function (valor) {
            return (
                <th key={valor.colvalor}>{valor.colname}</th>
            );
        });

        return (
            <thead>
                <tr>
                    {litatitulos}
                </tr>
            </thead>
        );
    }
}

export default HeadTable;