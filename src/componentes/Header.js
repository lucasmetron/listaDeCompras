import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const count = useSelector(state => state).length
    return (
        <div className='containerHeader'>
            <h1>Lista de Compras</h1>
            <p>Itens na lista:{count}</p>
        </div>
    );
}


export default Header;