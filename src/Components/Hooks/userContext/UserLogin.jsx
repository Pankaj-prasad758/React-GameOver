import React, { useContext, useState } from "react";
import { UserContext } from "./userContext";
import Profile from "./Profile";
function UserLogin() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };
  return (
    <>
      <div className="flex justify-center mt-6 ">
        <div className="h-96  bg-black text-2xl text-white w-fit p-7 flex justify-center flex-col text-center">
          <div>
            <label>Username:</label>{' '}
             <input
              value={username}
              type="text"
              placeholder="enter username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>{" "}
             
            <input
              value={password}
              type="text"
              placeholder="enter password"
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <button type="submit" className="border-2 border-s-orange-50 rounded-2xl w-fit p-2 mt-1" onClick={handleSubmit} >
            Submit
          </button>
        <Profile/>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
