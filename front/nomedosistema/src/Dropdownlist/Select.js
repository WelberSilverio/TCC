import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <select>
                <option value="" disabled selected>Escolha uma opção</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        );
    }
}

export default Select;