import React from 'react';
import { addItem } from '../store/actions/listAction'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function Form() {


    const [item, setItem] = useState('');
    const dispatch = useDispatch();


    function capturaItem(e) {
        let i = e.target.value
        setItem(i)
    }

    function addItemForm() {
        if (item) {
            dispatch(addItem({ id: 5, value: item }))
            setItem('');
        }
    }

    return (
        <div className="form">
            <input type="text" onChange={capturaItem} value={item} />
            <button onClick={addItemForm}>Enviar</button>
        </div>
    );
}


export default Form;