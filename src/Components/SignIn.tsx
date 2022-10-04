import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";

interface Props {
  user: any;
}
const style = {
  wrapper: `flex justify-center`,
  button: `bg-red-600 px-4 py-2 ml-4 text-white hover:bg-transparent hover:text-green-600 rounded-md hover:ring-inset-2 hover:ring-2 hover:ring-red-600 hover:text-red-600 hover:font-bold`,
  pic: `rounded-full h-10`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  // signInWithRedirect(auth, provider);
  signInWithPopup(auth, provider);
};
const Signout = () => {
  signOut(auth);
  alert("Signed Out");
};
export default function SignIn({ user }: Props) {
  console.log(auth.currentUser?.photoURL, auth.currentUser?.phoneNumber);
  const img: any = auth.currentUser?.photoURL;
  return (
    <div className={style.wrapper}>
      {!user ? (
        <GoogleButton onClick={googleSignIn} />
      ) : (
        <>
          <img src={img} className={style.pic} />
          <button onClick={Signout} className={style.button}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
