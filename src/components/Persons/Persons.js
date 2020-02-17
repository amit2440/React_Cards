import React, { useRef } from "react";
import Person from "./Person/Person";
import "./Persons.css";
import ErrorBoundary from "../../error/ErrorBoundary/ErrorBoundary";

const Persons = props => {
  const txtName = useRef();
  const txtAge = useRef();
  const txtDesg = useRef();

  const persons = props.persons.map((person, index) => (
    <ErrorBoundary key={index}>
      <Person
        name={person.name}
        age={person.age}
        desg={person.desg}
        nameChanged={event => props.nameChanged(event, index)}
        personRemoved={() => props.personRemoved(index)}
      />
    </ErrorBoundary>
  ));

  const personStyle = {
    border: "1px solid gray",
    boxShadow: "2px 2px gray",
    textAlign: "left",
    padding: "1rem",
    width: "10rem",
    backgroundColor: "orange"
  };

  const addPersonHandler = () => {
    const userDetail = {
      name: txtName.current.value,
      age: txtAge.current.value,
      desg: txtDesg.current.value
    };

    props.addPerson(userDetail);
  };
  const newPerson = (
    <div className="person" style={personStyle}>
      <h4>
        <input
          ref={txtName}
          type="text"
          placeholder="enter name"
          name="txtname"
        />
      </h4>
      <h4>
        <input ref={txtAge} type="text" placeholder="enter age" name="txtage" />
      </h4>
      <h4>
        <input
          ref={txtDesg}
          type="text"
          placeholder="enter desg"
          name="txtdesg"
        />
      </h4>
      <button
        className="button"
        onClick={addPersonHandler}
        style={{ padding: "5px" }}
      >
        Add Person
      </button>
    </div>
  );

  const personHolder = props.isShow ? (
    <div className="persons-holder">
      <div className="persons">
        {newPerson}
        {persons}
      </div>
      <br />
      <button className="button" onClick={props.addPrefix}>
        Add Prefix
      </button>
    </div>
  ) : null;

  return (
    <div className="persons-holder">
      {personHolder}
      <button className="button" onClick={props.showPersons}>
        Show / Hide
      </button>
    </div>
  );
};

export default Persons;
