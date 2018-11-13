import React, { Component } from "react";

class NewsBoxContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const Url = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/technology/1.json?api-key=094dd4bd21744520a83fec0ee892f39c';

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(xhr.responseText).results;
                let posts = data.map(mapToPost);
                let elem = document.getElementById("newsblock");
                if (elem) {
                    elem.innerHTML = getPostsTemplate(posts);
                }
            }
        };

        xhr.open("GET", Url, true);
        xhr.send();

        function mapToPost(post) {
            return {
                link: post.url,
                img: post.media[0] ? post.media[0]["media-metadata"][2].url : null,
                    // img: null,
                description: post.abstract,
                title: post.title,
                date: post.published_date
            };
        }

        function getPostsTemplate(posts) {
            return posts.reduce(function (tmpl, post) {
                tmpl += `<div class="post">
                                    <h5 class="post-title">${post.title}</h5>
                                    <img class="post-img" src=${post.img} />
                                    <p class="post-description">${post.description}</p>
                                    <a calss="post-link" href=${post.link} target="_blank">Read more</a>
                                    <p class="post-date">Publication date: ${post.date}</p>
                                    <hr /> <br /> <hr />
                                    </div>
                             `;
                return tmpl;
            }, '');
        }

        return (
            <div id="newsblock"></div>
        );
    }
}

export default NewsBoxContainer;
