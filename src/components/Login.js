import React from "react";
import { LoggedInContext } from "../context/LoggedInContext";
import Axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(LoggedInContext);

  const sendUserLoginData = () => {
    Axios.post("", {
      username: username,
      password: password,
    });
  };

  return <div></div>;
}

export default Login;
