import React from "react";
import UserImage from "./UserImage";
import UserDetails from "./UserDetails";
import Form from "./Form";
import { MdTipsAndUpdates } from "react-icons/md";
import { getUpdate } from "../_lib/data-service";
export default async function Sidebar() {
  const update = await getUpdate();
  console.log("UPDATE", update);
  return (
    <div className="p-4 flex flex-col items-center  md:h-screen py-6 md:py-9">
      <div className="flex flex-col items-center w-full">
        <UserImage />
        <UserDetails />
      </div>

      <div className="w-full p-4 border-t border-slate-400">
        <div className="px-3 ">
          <h1 className="font-semibold capitalize flex gap-1 items-center">
            [{update[0].update_type}]
          </h1>
          <p className="text-xs">
            posted on: {new Date(update[0].created_at).toLocaleString()}
          </p>
          <p className="text-md mt-2 w-full capitalize">
            {update[0].update_message}
          </p>
        </div>
      </div>
    </div>
  );
}
