import React from "react";
import "./Person.css";

const Person = props => {
  const personStyle = {
    border: "1px solid gray",
    boxShadow: "2px 2px gray",
    textAlign: "left",
    padding: "1rem",
    width: "10rem",
    backgroundColor: "orange"
  };




  const person =
    props.name !== "naruto" ? (
      <div className="person" style={personStyle}>
        <h4>Name : {props.name} </h4>
        <h4>age : {props.age}</h4>
        <h4>desg : {props.desg}</h4>
        <input type="text" onChange={props.nameChanged} />
      </div>
    ) : (
      {
        Error('I crashed!');
      }
    );

  return <div>{person}</div>;
};

export default Person;
