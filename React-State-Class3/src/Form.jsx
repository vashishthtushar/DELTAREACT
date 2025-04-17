import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };

  let handleInputChange = (event) => {

    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName: "",
        username: "",
        password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>&nbsp;
      <input
        type="text"
        placeholder="Enter full Name"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="username">Username</label>&nbsp;
      <input
        type="text"
        placeholder="Enter username"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>&nbsp;
      <input
        type="password"
        placeholder="Enter password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br /><br />
      &nbsp;&nbsp;
      <button>Submit</button>
    </form>
  );
}
