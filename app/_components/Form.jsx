import React from "react";
import { IoIosSend } from "react-icons/io";
export default function Form({ formdata }) {
  return (
    <form className="w-full  px-6">
      <textarea
        name="message"
        id="message"
        placeholder="Any feedback? for me? ☺️"
        className=" text-stone-100 p-2 bg-slate-700 border outline-none h-24 w-full"
      />
      <button className="border p-2 px-4 flex gap-2 items-center text-md justify-center w-full hover:bg-stone-200 bg-stone-50 text-stone-950 tranustion-all duration-200">
        send message <IoIosSend />
      </button>
    </form>
  );
}
