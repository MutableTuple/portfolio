import React from "react";
import UserImage from "./UserImage";
import UserDetails from "./UserDetails";
import Form from "./Form";

export default function Sidebar() {
  return (
    <div className="p-4 flex flex-col items-center justify-between md:h-screen py-6 md:py-9">
      <div className="flex flex-col items-center w-full">
        <UserImage />
        <UserDetails />
      </div>

      <div className="mt-6 md:mt-auto w-full">
        <Form />
      </div>
    </div>
  );
}
