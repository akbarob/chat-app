import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-2xl m-4 p-2 rounded-tl-full rounded-tr-full`,
  name: ` mt-[-4rem] text-gray-600 text-xs `,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

interface Props {
  message: any;
  scroll: any;
}

export const Message = ({ message, scroll }: Props) => {
  const messageClass =
    message.uid === auth.currentUser?.uid
      ? `${style.sent}`
      : `${style.received}`;
  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p ref={scroll}>{message.text}</p>
      </div>
    </div>
  );
};
