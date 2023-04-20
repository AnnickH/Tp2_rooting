import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Linke = styled(Link)`
  border-radius: 8px;
  margin-left: 32px;
  margin-right: 32px;
  padding: 10px 16px;
  text-decoration: none;

  background-color: #2e3440;
  color: white;
`;

const HomePage = () => {
  const handleUserClick = (userId) => {
    console.log(userId);
    return userId;
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 5));
      });
  }, []);
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <span key={index + 1}>
              <Linke
                to={`/UserPage/${user.id}`}
                onClick={() => handleUserClick(user.id)}
              >
                {user.name}
              </Linke>
            </span>
          ))}
        </ul>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default HomePage;
