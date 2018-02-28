import React, { Component } from 'react';
import './table.css';

class Table extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m12 l6 offset-l2 center">
                    <table cellpadding="1" cellspacing="1" className="table table-hover responsive-table bordered" id="myTable">
                        <thead>
                            <tr>
                                <th>Coluna Title 1</th>
                                <th>Coluna Title 2</th>
                                <th>Coluna Title 3</th>
                                <th>Coluna Title 4</th>
                            </tr>
                        </thead>
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