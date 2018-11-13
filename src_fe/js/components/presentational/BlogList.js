import React from "react";
import Blog from "../presentational/Blog";

const BlogList = ({blogList, showBlog}) => (
    <section className="blog">
        <div className="wrapper">
            <h1>BLOG</h1>
            <div className="content">
                {blogList.map( (blog, index) => {
                    return <Blog
                        key = {index}
                        id = {blog.id}
                        style={(index%2 == 0) ? 'line' : 'line right'}
                        image={'web/img/blog/'+blog.image}
                        video={blog.video}
                        title={blog.title}
                        date={blog.date}
                        arrowStyle={(index%2 == 0) ? 'fa fa-caret-left left' : 'fa fa-caret-right right'}
                        showBlog={showBlog}
                    />
                })}
            </div>
        </div>
    </section>
);

export default BlogList;
