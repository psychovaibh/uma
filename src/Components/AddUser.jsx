import React, { useState } from "react";

export default function AddUser({ data, setData, setSelectedUser, selectedUser }) {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    contact: ''
  });

  React.useEffect(()=>{
    if (selectedUser) {
      setFormData(selectedUser);
    }
    else{
      setFormData({
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        contact:''
      });
    }
  },[selectedUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addData = (e) => {
    e.preventDefault();

    if (selectedUser) {
      const updatedData = data.map((user)=>{
        if(user.id === selectedUser.id){
          return formData;
        }
        return user;
      });
      setData(updatedData);
      setSelectedUser(null);
    } else{

    

    const id = data.length + 1;

    const newUser = {
      id: id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contact: formData.contact
    };

    setData([...data, newUser]);
  }
    setFormData({
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      contact: ''
    });
  };
  return (
    <>
      <div className="adduser w-50 bg-light m-auto mt-5">
        <form onSubmit={addData}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact Number
            </label>
            <input
              type="contact"
              className="form-control"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            {selectedUser ? "update" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
