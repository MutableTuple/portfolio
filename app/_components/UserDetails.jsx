import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaLocationDot,
  FaProductHunt,
} from "react-icons/fa6";
export default function UserDetails() {
  return (
    <div className="flex flex-col mt-4 p-6 w-full ">
      <ul className="flex flex-col gap-4 ">
        <li className="flex gap-2  items-center font-medium ">
          <FaLocationDot />{" "}
          <p className="hover:text-stone-300">Mumbai, Maharashtra, India</p>{" "}
        </li>

        <li className="flex gap-2  items-center font-semibold ">
          <FaGithub />{" "}
          <Link
            className="hover:text-stone-300"
            href="https://github.com/MutableTuple"
            target="_blank"
          >
            Github
          </Link>{" "}
        </li>
        <li className="flex gap-2 items-center font-semibold ">
          <FaLinkedin />{" "}
          <Link
            className="hover:text-stone-300"
            href="https://www.linkedin.com/in/yogesh-vishwakarma-bb132721a/"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
        </li>
        <li className="flex gap-2 items-center font-semibold ">
          <FaXTwitter />{" "}
          <Link
            className="hover:text-stone-300"
            href="https://x.com/_yogeshvk"
            target="_blank"
          >
            Twitter/X
          </Link>{" "}
        </li>
        <li className="flex gap-2 items-center font-semibold ">
          <FaProductHunt />{" "}
          <Link
            className="hover:text-stone-300"
            href="https://www.producthunt.com/@yogeshvk"
            target="_blank"
          >
            Product Hunt
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
