import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModale from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age(non-empty values).',
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age(> 0).',
            });
            return;
        }

        const userData = {
            name: enteredName,
            age: enteredAge,
        };

        props.onSaveUserData(userData);
        setEnteredName('');
        setEnteredAge('');
    };

    return (
        <div>
            {error && (
                <ErrorModale
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredName}
                        onChange={nameChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;