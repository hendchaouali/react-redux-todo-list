import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleCompleteAsync, deleteTodo, toggleComplete, deleteTodoAsync} from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        // dispatch(toggleComplete({ id, completed: !completed }));
        dispatch(toggleCompleteAsync({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        // dispatch(deleteTodo({ id }));
        dispatch(deleteTodoAsync({ id }));
    };

    return (
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
                        type='checkbox'
                        className='mr-3'
                        onClick={handleCheckboxClick}
                        defaultChecked={completed}
                    ></input>
                    {title}
				</span>
                <button onClick={handleDeleteClick} className='btn btn-danger'>
                    Supprimer
                </button>
            </div>
    );
};

export default TodoItem;
