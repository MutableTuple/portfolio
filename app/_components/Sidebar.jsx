import React from "react";
import UserImage from "./UserImage";
import UserDetails from "./UserDetails";
import Form from "./Form";

export default function Sidebar() {
  return (
    <div className="max-h-screen p-4 flex flex-col items-center justify-between py-9">
      <div className="flex flex-col items-center">
        <UserImage />
        <UserDetails />
      </div>

      <div className="mt-auto w-full">
        {" "}
        {/* mt-auto makes the form stick at the bottom */}
        <Form />
      </div>
    </div>
  );
}
