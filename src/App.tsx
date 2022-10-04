import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Components/Chat";
const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[100vh] bg-gray-100 shadow-xl border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.section}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
