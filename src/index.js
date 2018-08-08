import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import Article from './components/article';

// const API_URL = 'http://localhost:3003/articles';
const API_URL =
  'https://newsapi.org/v2/everything?q=bitcoin&apiKey=adeb58d8f37044b981f8496c95b089a5';

let articles = [];

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

axios.get(API_URL).then(response => {
  this.articles = response.data.articles;
  ReactDOM.render(<Articles data={this.articles} />, document.getElementById('appArticle'));
});

class Articles extends React.Component {
  // state = this.article;

  // handleDeleteElement = id => {
  //   this.setState(prevState => ({
  //     elements: prevState.elements.filter(el => el.id != id),
  //   }));
  // };

  render() {
    return (
      <section className="row">
        {this.props.data.map((article, index) => {
          return <Article key={index} data={article} />;
        })}
      </section>
    );
  }
}
