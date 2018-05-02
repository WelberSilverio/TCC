import React, { Component } from 'react';

class SelectPresenca extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    render() {
        return (
            <select>
                <option value="" disabled selected>Escolha o Tipo de Presença:</option>
                <option value="Presente">Presente</option>
                <option value="Justificado">Justificado</option>
                <option value="Ausente">Ausente</option>
            </select>
        );
    }
}

export default SelectPresenca;