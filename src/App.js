import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {

  const [enteredInformations, setEnteredInformations] = useState([]);

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
        ...enteredUserData,
        id: Math.random().toString(),
    };

    setEnteredInformations( (prevData) => {
      return [...prevData, userData];
    });
  };

  return (
    <div >
      <AddUser onSaveUserData={saveUserDataHandler} />
      <UserList users={enteredInformations} />     
    </div>
  );
}

export default App;
