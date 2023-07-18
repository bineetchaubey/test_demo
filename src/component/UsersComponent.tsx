import React, { useEffect, useState } from "react";
import { UserInterface, UserListProps } from "./../types/User";
import { sortByKey } from "./../utils/Common";

const UserComponent: React.FC<UserListProps> = ({
  userList,
}): React.ReactElement => {
  const [userDisplayList, setUserDisplayList] =
    useState<UserInterface[]>(userList);

  useEffect(() => {
    setUserDisplayList([...userList]);
  }, [userList]);

  const sortByFieldName = (key: any) => {
    const sortedArray = sortByKey(userDisplayList, key);
    setUserDisplayList([...sortedArray]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={(e) => sortByFieldName("name")}>Name</th>
            <th onClick={(e) => sortByFieldName("email")}>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {userDisplayList.length > 0 &&
            userDisplayList.map((row) => {
              return (
                <tr key={row.id}>
                  <td> {row.name}</td>
                  <td> {row.email}</td>
                  <td> {row.address.city}</td>
                  <td> {row.company.name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;
