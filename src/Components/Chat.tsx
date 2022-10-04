import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Message } from "./Message";
import { db } from "../firebase";
import { SendMessage } from "./SendMessage";

const style = {
  main: `flex flex-col p-[10px] relative overflow-scroll pb-10`,
};

export default function Chat() {
  const [message, setMessage] = useState<any[]>([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let mes: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        mes.push({ id, ...data });
      });
      setMessage(mes);
      console.log(mes);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <main className={style.main}>
        {message &&
          message.map((item) => {
            return <Message key={item.id} message={item} scroll={scroll} />;
          })}
      </main>
      <SendMessage scroll={scroll} />

      <span></span>
    </>
  );
}
