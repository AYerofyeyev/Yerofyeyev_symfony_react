import React from "react";
import propTypes from "prop-types";

const Blog = ({id, style, image, video, title, date, arrowStyle, showBlog}) => (
    <a onClick={showBlog.bind(null, false, id)}>
        <div className={style}>
            <div className="pic">
                <img src={image} alt="Article image"/>
                <video loop muted autoPlay poster="web/img/videoframe.jpg" className="fullscreen-bg__video">
                    <source src={video} type="video/webm"/>
                </video>
            </div>
            <div className="blog__title">
                <h3 className="light">{title}</h3>
                <time className="bold">{date}</time>
                <i className={arrowStyle} aria-hidden="true"></i>
            </div>
        </div>
    </a>
);

Blog.propTypes = {
    style: propTypes.string,
    image: propTypes.string,
    video: propTypes.string,
    title: propTypes.string,
    date: propTypes.string
};

export default Blog;
