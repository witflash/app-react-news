import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  render() {
    return (
      <div className="col-12 col-md-6 col-xl-4 mb-4">
        <article className="article">
          <a href="" className="card">
            <img src={this.props.data.urlToImage} alt="article" className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title text-left">{this.props.data.title}</h2>
              <p className="card-text text-left">{this.props.data.description}</p>
            </div>
          </a>
          <button type="button" className="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </article>
      </div>
    );
  }
}

export default Article;
