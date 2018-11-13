import React, { Component } from "react";

import BlogArticle from "../presentational/BlogArticle";
import BlogList from "../presentational/BlogList";

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            blogList: [],
            blogListMain: true,
            blogId: null
        };
        this.getBlogList = this.getBlogList.bind(this);
        this.showBlog = this.showBlog.bind(this);
    }

    showBlog(newBlogListMain, newBlogId){
        this.setState(() => ({
                blogListMain: newBlogListMain,
                blogId: newBlogId
            }))
    }

    getBlogList(result){
        this.setState(() => ({
            blogList: result
        }))
    }

    componentWillMount(){
        let that = this;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/blog');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                that.getBlogList(JSON.parse(xhr.response));
            }
        };
        xhr.send();
    }

    render() {
        return(
            <main>
                {
                    (this.state.blogListMain) ?
                    <BlogList blogList={this.state.blogList} showBlog={this.showBlog}/> :
                    <BlogArticle blog={this.state.blogList[--this.state.blogId]} showBlog={this.showBlog}/>
                }
            </main>
        );
    }
}

export default BlogContainer;
