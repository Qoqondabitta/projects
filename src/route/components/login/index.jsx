import React, { useRef } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef();
  const onSave = () => {
    if (
      nameRef.current.value === "Sardor" &&
      passwordRef.current.value === "1234"
    ) {
      localStorage.setItem("token", true);
      <Navigate to={"/contact"} />
    } else {
      localStorage.setItem("token", false);
      alert("ups, something went wrong");
    }
  };
  return (
    <div>
      <h1>Logo</h1>
      <input ref={nameRef} type="text" placeholder="name" />
      <input ref={passwordRef} type="text" placeholder="password" />
      <button type="submit" onClick={onSave}>Login</button>
    </div>
  );
};

export default Login;
