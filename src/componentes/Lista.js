import React from 'react';
import { useSelector } from 'react-redux';
import { removeItem } from '../store/actions/listAction';
import { useDispatch } from 'react-redux'


function Lista() {
    let item = useSelector(state => { return state })
    let dispatch = useDispatch();

    console.log(item)

    function remove(id) {
        let li = id.target.id
        dispatch(removeItem(li))
    }

    return (

        <ul className="list">
            {item.map((element, i) => {
                return (
                    <div className="separa">
                        <li key={i} id={i} >{element}</li>
                        <button id={element} onClick={remove}>Exluir</button>
                    </div>
                )
            })}
        </ul>

    );
}


export default Lista;