import React, { Component } from 'react';

class Select extends Component {
    render() {
        let opt = this.props.data.map((value) => {
            <option value="{}">{}</option>  
        });
        return (
            <select>
                <option value="" disabled selected>Escolha o Tipo de Presen�a:</option>
                {opt}
            </select>
        );
    }
}

export default Select;