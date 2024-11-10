import React from "react";
import { Link } from "react-scroll";

const data = [
  { linkName: "home", path: "#home" },
  { linkName: "skills", path: "#skills" },
  { linkName: "projects", path: "#projects" },
];

function Links() {
  return (
    <ul className="flex gap-7">
      {data.map((item) => {
        const { linkName } = item;
        return (
          <li className="capitalize cursor-pointer text-lg hover:text-lime-200/[0.9]">
            <Link to={linkName} smooth duration={500}>
              {linkName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
