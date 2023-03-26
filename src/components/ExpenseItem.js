import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import {AiFillMinusCircle } from 'react-icons/ai';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    };
    const decreaseAllocation = (name) => {
        const expense = {
            name: name, 
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><AiFillPlusCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></AiFillPlusCircle></td>
        <td><AiFillMinusCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></AiFillMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="grey" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
