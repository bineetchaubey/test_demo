import { UserInterface } from "@src/types/User";
import React, { useState } from "react";
import { AddUserProps } from "./../types/User";

const AddUserComponent: React.FC<AddUserProps> = ({
  addUserInList,
}): React.ReactElement => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const addUserFormSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (name === "" || email === "" || city === "" || company === "") {
      return;
    }

    const uniqueId = Math.floor(Math.random() * 1000);
    const user: UserInterface = {
      id: uniqueId,
      name: name,
      email: email,
      address: {
        city: city,
      },
      company: {
        name: company,
      },
    };
    addUserInList(user);
    setName("");
    setEmail("");
    setCity("");
    setCompany("");
  };

  return (
    <div>
      <form onSubmit={(e) => addUserFormSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="emai"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Company</label>
          <input
            type="text"
            name="compnay"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUserComponent;
