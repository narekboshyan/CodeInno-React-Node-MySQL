import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}>
            <menu className={classes.menu}>
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </menu>
        </header>
    );
};

export default Header;
