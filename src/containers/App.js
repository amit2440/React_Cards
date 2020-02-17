import React, { useState } from "react";
import "../styles.css";
import Persons from "../components/Persons/Persons";

// functional component
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Persons />
//     </div>
//   );
// }

//closs component
const App = () => {
  const [personsState, setPersonState] = useState({
    persons: [
      {
        name: "naruto",
        age: 10,
        desg: "programmer"
      },
      {
        name: "sasuke",
        age: 15,
        desg: "lead"
      },
      {
        name: "hinata",
        age: 20,
        desg: "manager"
      }
    ]
  });

  const [showState, setShowState] = useState({
    isShow: true
  });

  const addPrefixHandler = prefix => {
    const persons = [...personsState.persons].map(person => {
      const objPerson = { ...person };
      objPerson.name =
        objPerson && objPerson.name && objPerson.name.includes(prefix)
          ? person.name
          : prefix + person.name;
      return objPerson;
    });
    setPersonState({ persons: persons });
  };

  const showPersonsHandler = () => {
    setShowState({ isShow: !showState.isShow });
  };

  const nameChangeHandler = (event, index) => {
    const persons = [...personsState.persons].map((person, arrIndex) => {
      const objPerson = { ...person };
      if (index === arrIndex) {
        objPerson.name = event.target.value;
      }
      return objPerson;
    });
    setPersonState({ persons: persons });
  };

  const personRemovedHandler = index => {
    console.log("person deleted : ", index);
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonState({ persons: persons });
  };

  const addPersonHandler = personDetail => {
    console.log("person detail", personDetail);
    if (personDetail.name !== null) {
      const person = {
        name: personDetail.name,
        age: personDetail.age,
        desg: personDetail.desg
      };
      const persons = [...personsState.persons];
      persons.push(person);
      setPersonState({ persons: persons });
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Persons
        persons={personsState.persons}
        isShow={showState.isShow}
        addPrefix={() => addPrefixHandler("mr.")}
        showPersons={() => showPersonsHandler()}
        nameChanged={(event, index) => nameChangeHandler(event, index)}
        personRemoved={index => personRemovedHandler(index)}
        addPerson={personDetail => addPersonHandler(personDetail)}
      />
    </div>
  );
};
export default App;

// class App extends Component {
//   state = {
//     persons: [
//       {
//         name: "naruto",
//         age: 10,
//         desg: "programmer"
//       },
//       {
//         name: "sasuke",
//         age: 15,
//         desg: "lead"
//       },
//       {
//         name: "hinata",
//         age: 20,
//         desg: "manager"
//       }
//     ],
//     isShow: true
//   };

//   personRemovedHandler = index => {
//     console.log("person deleted : ", index);
//     const persons = [...this.state.persons];
//     persons.splice(index, 1);
//     this.setState({ persons: persons });
//   };

//   nameChangeHandler = (event, index) => {
//     const persons = [...this.state.persons].map((person, arrIndex) => {
//       const objPerson = { ...person };
//       if (index === arrIndex) {
//         objPerson.name = event.target.value;
//       }
//       return objPerson;
//     });
//     this.setState({ persons: persons });
//   };

//   addPrefixHandler = prefix => {
//     const persons = [...this.state.persons].map(person => {
//       const objPerson = { ...person };
//       objPerson.name = objPerson.name.includes(prefix)
//         ? person.name
//         : prefix + person.name;
//       return objPerson;
//     });
//     this.setState({ persons: persons });
//   };

//   showPersonsHandler = () => {
//     this.setState({ isShow: !this.state.isShow });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <Persons
//           persons={this.state.persons}
//           isShow={this.state.isShow}
//           addPrefix={() => this.addPrefixHandler("mr.")}
//           showPersons={() => this.showPersonsHandler()}
//           nameChanged={(event, index) => this.nameChangeHandler(event, index)}
//           personRemoved={index => this.personRemovedHandler(index)}
//         />
//       </div>
//     );
//   }
// }
