import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SignIn from "./SignIn";

const style = {
  nav: `bg-green-700 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}> Chat APP</h1>
      <SignIn user={user} />
    </div>
  );
}
