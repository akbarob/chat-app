import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-2xl m-4 p-2 rounded-tl-full rounded-tr-full`,
  nameSent: `text-right text-gray-600 text-xs`,
  nameReceived: `text-left text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white text-right float-right rounded-bl-full `,
  received: `bg-green-100 text-black  float-left  text-left rounded-br-full`,
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

  const nameClass =
    message.uid === auth.currentUser?.uid
      ? `${style.nameSent}`
      : `${style.nameReceived}`;
  return (
    <div>
      <p className={nameClass}>
        {message.name}{" "}
        <span className="">
          {new Intl.DateTimeFormat("en-GB", {
            timeStyle: "short",
          }).format(message.time)}
        </span>
      </p>{" "}
      <div className={`${style.message} ${messageClass}`}>
        <p ref={scroll}>{message.text}</p>
      </div>
    </div>
  );
};

// const Time = () => {
//   return (
//     <span>
//       {new Intl.DateTimeFormat("en-US", {
//         // year: "numeric",
//         // month: "long",
//         // day: "2-digit",
//         timeStyle: "short",
//       }).format(message.time)}
//     </span>
//   );
// };
