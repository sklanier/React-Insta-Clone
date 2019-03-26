import React, { Component } from "react";
import "../Posts/Posts.css";
import DummyData from './../../dummy-data';

   

    class Post extends Component {
        constructor(props){
            super(props);
        }
      render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;

        return (
          <article className="Post" ref="Post">
            ...
                <img src={avatar} alt={nickname} />
            ... 
                  <span>{nickname}</span>
            ...
                <img alt={caption} src={image} />
            ...
              <strong>{nickname}</strong>{caption}
            ...
          </article>
        );
      }
    }
    export default Post;