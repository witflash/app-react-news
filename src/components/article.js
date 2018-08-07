import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-xl-4 mb-4">
        <article className="card">
          <img src={this.props.data.urlToImage} alt="article" className="card-img-top" />
          <div className="card-body">
            <h1 className="card-title">{this.props.data.title}</h1>
            <p className="card-text">{this.props.data.description}</p>
          </div>
        </article>
      </div>
    );
  }
}

export default Article;
