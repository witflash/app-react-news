import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import Article from './components/article';

const API_URL = 'http://localhost:3003/articles';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

axios.get(API_URL).then(response => {
  ReactDOM.render(<Articles data={response.data} />, document.getElementById('appArticle'));
  // renderArticles(response.data);
});

class Articles extends React.Component {
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

// function renderArticles(articles) {
//   let allNews = [];
//   for (let i = 0; i < articles.length; i += 1) {
//     allNews.push(React.createElement);
//   }
// }
