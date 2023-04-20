import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Article.module.css';

const ArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [com, setCom] = useState([]);
  const { id } = useParams(); //id, article id

  useEffect(() => {
    // Utiliser l'ID pour charger les données de l'utilisateur
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, [id]);

  useEffect(() => {
    // Utiliser l'ID pour charger les données de l'utilisateur
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => {
        setCom(data);
      });
  }, [id]);

  // return console.log(article.title); //article.map((article, index) => article)
  return (
    <div className={styles.di}>
      <div>{article ? article.title : <p>Chargement...</p>} </div>
      <div>Body: {article.body}</div>
      <div>
        {com.length > 0 ? (
          <ul>
            {com.map((com, index) => (
              <div key={index + 1}>
                <div>{com.id}</div>
                <div>{com.email}</div>
                <div>{com.body}</div>
              </div>
            ))}
          </ul>
        ) : (
          <p> Chargement... </p>
        )}
      </div>
    </div>
  );
};
export default ArticlePage;
