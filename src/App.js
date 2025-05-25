import React from "react";
import { AuthProvider } from "./context/authContext";
import RootIndex from "./screens/rootIndex";

const App = () => {
  return (
    <AuthProvider>
      <RootIndex />
    </AuthProvider>
  );
};

export default App;
//https://github.com/imMayyur/aws-cognito-with-react/blob/master/4%20-%20Session/src/Components/Login.js
// https://www.cloudthat.com/resources/author/mayur_patel/
