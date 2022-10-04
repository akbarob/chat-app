import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { IoMdSend } from "react-icons/io";
const style = {
  form: ` h-14 w-full max-w[720px] flex text-xl absolute bottom-[0] `,
  input: ` rounded-2xl w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500 flex items-center justify-center text-white rounded-full text-sm`,
};
type Props = {
  scroll: any;
};
export const SendMessage = ({ scroll }: Props) => {
  const [input, setInput] = useState<string>("");

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const { uid, displayName }: any = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      time: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form className={style.form} onSubmit={sendMessage}>
      <input
        value={input}
        className={style.input}
        placeholder="type here..."
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      {input === "" ? (
        <button className={style.button} type="submit" disabled>
          Send <IoMdSend />
        </button>
      ) : (
        <button className={style.button} type="submit">
          Send <IoMdSend />
        </button>
      )}
    </form>
  );
};
