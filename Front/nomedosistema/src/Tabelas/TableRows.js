import React, { Component } from 'react';

class TableRows extends Component {

    render() {
        let row = this.props.data.map((value) => {
            let colls = new Array;
            for (var i = 0; this.props.headers.length > i; i++) {
                colls.push(<td>{value[this.props.headers[i]]}</td>);
            }
            let rows = <tr>{colls}</tr>
            return rows;
        });

        return (
            <tbody>
                {row}
            </tbody>
        );
    }
}

export default TableRows;