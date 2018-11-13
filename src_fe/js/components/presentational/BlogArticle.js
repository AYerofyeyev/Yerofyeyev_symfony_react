import React from "react";

const BlogArticle = ({blog, showBlog}) => (
                <section className="article">
                    <div className="wrapper">
                        <div className="header">
                            <h3>{blog.title}</h3>
                            <time className="bold">{blog.date}</time>
                        </div>
                        <div className="post">
                            <a className="bold" onClick = {showBlog.bind(null, true, null)}>
                                <i className="fa fa-angle-double-left" aria-hidden="true"></i> GO BACK TO THE BLOG
                            </a>
                            <p>{blog.text}</p>
                        </div>
                    </div>
                </section>
        );

export default BlogArticle;
