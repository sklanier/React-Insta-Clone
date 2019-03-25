import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar/>
          <PostContainer/>
          <CommentSection/>
        </header>
      </div>
    );
  }
}

export default App;
