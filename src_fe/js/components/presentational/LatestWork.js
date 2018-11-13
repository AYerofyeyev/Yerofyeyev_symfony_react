import React from "react";
import propTypes from "prop-types";

const LatestWork = ({style, title, description, link}) => (
    <div className="column">
        <div className={style}>
            <h3 className="light">{title}</h3>
            <h6 className="light">{description}</h6>
            <a href={link} target="_blank">
                <h3 className="light">{title}</h3>
                <p className="goto">Go to the {title} web site <i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
            </a>
        </div>
    </div>
);

LatestWork.propTypes = {
    style: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    link: propTypes.string
};

export default LatestWork;
