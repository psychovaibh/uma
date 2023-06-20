import React from "react";
export default function ShowUser({ data, setData, setSelectedUser }) {

  const handleEdit = (id) => {
    const user = data.find((user) => user.id === id);
    
    setSelectedUser(user);
    console.log(setSelectedUser);

  };
  const handleDelete = (id) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };
  return (
    <>
      {data.map((data, i) => (
        <div
          key={data.id}
          className="card w-25 p-3 m-5 d-inline-flex justify-content-center col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 bg-primary border-3 border-dark rounded-top-30"
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item pb-3">User Id: {i + 1}</li>
            <li className="list-group-item pb-3">
              First Name: {data.firstName}
            </li>
            <li className="list-group-item pb-3">
              Last Name: {data.lastName}
            </li>
            <li className="list-group-item pb-3">Email: {data.email} </li>
            <li className="list-group-item pb-3">
              Contact: {data.contact}{" "}
            </li>
            <ul className="d-flex p-3 justify-content-center list-group-flush b-0">
              <li className="list-group-item p-2 bg-primary ">
                <button onClick={() => handleEdit(data.id)}>Edit</button>
              </li>
              <li className="list-group-item p-2 bg-primary">
                <button onClick={() => handleDelete(data.id)}>
                  Delete
                </button>
              </li>
            </ul>
          </ul>
        </div>
      ))}
    </>
  );
}
