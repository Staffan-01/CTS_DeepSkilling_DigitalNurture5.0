import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayType: 'all',
      isLoggedIn: true
    };
  }

  // Method 1: If/Else rendering
  renderBook = () => {
    if (this.state.displayType === 'book' || this.state.displayType === 'all') {
      return <BookDetails />;
    }
    return null;
  };

  // Method 2: Ternary operator rendering
  renderBlog = () => {
    return this.state.displayType === 'blog' || this.state.displayType === 'all'
      ? <BlogDetails />
      : null;
  };

  // Method 3: && operator rendering
  renderCourse = () => {
    return (this.state.displayType === 'course' || this.state.displayType === 'all') && <CourseDetails />;
  };

  // Method 4: Element variable
  renderDetails = () => {
    let details = null;
    switch (this.state.displayType) {
      case 'book':
        details = <BookDetails />;
        break;
      case 'blog':
        details = <BlogDetails />;
        break;
      case 'course':
        details = <CourseDetails />;
        break;
      default:
        details = (
          <div>
            <BookDetails />
            <BlogDetails />
            <CourseDetails />
          </div>
        );
    }
    return details;
  };

  handleFilter = (type) => {
    this.setState({ displayType: type });
  };

  render() {
    const { displayType } = this.state;

    // Method 5: Inline conditional with && for login status
    return (
      <div className="App">
        <h1>Blogger App - Conditional Rendering</h1>

        {this.state.isLoggedIn && <p className="welcome-msg">Welcome back, User!</p>}

        <div className="filter-buttons">
          <button
            className={displayType === 'all' ? 'active' : ''}
            onClick={() => this.handleFilter('all')}
          >
            All
          </button>
          <button
            className={displayType === 'book' ? 'active' : ''}
            onClick={() => this.handleFilter('book')}
          >
            Books
          </button>
          <button
            className={displayType === 'blog' ? 'active' : ''}
            onClick={() => this.handleFilter('blog')}
          >
            Blogs
          </button>
          <button
            className={displayType === 'course' ? 'active' : ''}
            onClick={() => this.handleFilter('course')}
          >
            Courses
          </button>
        </div>

        <div className="content-container">
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

export default App;
