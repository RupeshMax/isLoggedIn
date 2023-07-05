import React from "react";
import Form from "./Form";

// var isLoggedIn = true;
var userRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Form isLoggedIn={isLoggedIn} />} */}
      <Form userRegistered={userRegistered} />
    </div>
  );
}

export default App;
