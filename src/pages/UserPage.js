import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  width: 364px;
  height: 280px;

  background: #4c566a;
  color: #eceff4;
  border-radius: 8px;

  padding: 30px;
  margin: 15px;

  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: aliceblue; */
`;

const Ul = styled.ul`
  margin: 25px;
  display: flex;
  flex-wrap: wrap; /* Utiliser wrap pour que les divs passent à la ligne */
  gap: 15px; /* Ajouter un espace entre les divs */
  background-color: antiquewhite;
`;

const Butt = styled.button`
  padding: 16px;
  border-radius: 8px;
  width: 35%;
`;

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Utiliser l'ID pour charger les données de l'utilisateur

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [id]);

  // return console.log(users.map((user, index) => user));
  return (
    <div>
      <h1>Article par: </h1>
      {users.length > 0 ? (
        <Ul>
          {users.map((user, index) => (
            <Div key={index + 1}>
              {user.id} {user.title}
              <div>{user.body}</div>
              <Butt> Voir l'article</Butt>
            </Div>
          ))}
        </Ul>
      ) : (
        <p> Chargement... </p>
      )}
    </div>
  );
};

export default UserPage;
