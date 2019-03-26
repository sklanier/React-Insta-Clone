import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import Post from './components/Posts/Post';



class App extends Component {
  constructor() {
    
      super();
      this.state = {
    
      post: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar/>
        <PostContainer post={this.state.post}/>
        <Post />
        <CommentSection/>
      </div>
    );
  }
}

export default App;
