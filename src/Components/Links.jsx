import React from "react";

const data = [
  { linkName: "Home", path: "#home" },
  { linkName: "projects", path: "#projects" },
];

function Links() {
  return (
    <ul className="flex gap-3">
      {data.map((item) => {
        const { linkName, path } = item;
        return (
          <li className="capitalize">
            <a className="" href={path}>
              {linkName}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
