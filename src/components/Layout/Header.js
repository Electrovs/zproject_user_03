import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="The text in the alt"/>
            </div>
        </Fragment>
    );
};

export default Header;
