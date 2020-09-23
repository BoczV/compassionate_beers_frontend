import React from "react";
import { LoggedInContext } from "../context/LoggedInContext";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(LoggedInContext);

  const sendUserLoginData = () => {
    Axios.post("http://localhost:8080/", {
      username: username,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Incorrect username and/or password!");
      });
  };

  return <div></div>;
}

export default Login;
