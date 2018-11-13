import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const MainMenuLi =({label}) => (
    <li>
        <Link to={(label=="Home") ? "/" : "/"+label.replace(" ", "").toLowerCase()}>
            {label}
        </Link>
    </li>
);

MainMenuLi.propTypes = {
    label: propTypes.string.isRequired
};

export default MainMenuLi;
