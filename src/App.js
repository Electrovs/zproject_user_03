import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart"
import { useState } from 'react';

function App() {
    const [cartShown, setCartShown] = useState(false);

    const showCartHandler = () => {
        setCartShown(true);
    };
    
    const hideCartHandler = () => {
        setCartShown(false);
    };


    return (
        <Fragment>
            {cartShown && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
