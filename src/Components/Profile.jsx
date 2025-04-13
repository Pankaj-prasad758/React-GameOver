import React from "react";
import { useContext } from "react";
import { MyContext } from "./Hooks/ContextAPI/Index";
function Profile() {
    const {userInfo} = useContext(MyContext)
  return (
    <>
    <div className="mt-4">
    <h1 className="text-white text-4xl">Profile</h1>
      <p className="text-white text-3xl">user Email {userInfo.email} </p>
      <p className="text-white text-3xl">user Age: {userInfo.age} </p>
    </div>
    </>
  );
}

export default Profile;
