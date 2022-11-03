import { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../api";
import LoadingSpinner from "../loading";

export const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((data) => {
      setIsLoading(false);
      setUsers(data.users);
    });
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {users.map((user) => {
            return (
              <section>
                <li key={user.username}>
                  <fieldset>
                    <img src={user.avatar_url} alt={user.username} />
                    <fieldset>
                      <h3>Username - {user.username}</h3>
                      {/* <p>Name - {user.name}</p> */}
                    </fieldset>
                  </fieldset>
                </li>
              </section>
            );
          })}
        </ul>
      )}
    </div>
  );
};
