import React from "react";
import "../questions.css";

const Questions = () => {
  const [tab, setTab] = React.useState("2");

  let content = [];

  if (tab === "1") {
    content = [{ name: "lorem" }, { name: "lorem2" }];
  } else if (tab === "2") {
    content = [{ name: "lorem" }, { nam: "lorem2" }];
  } else {
    content = [{ name: "lorem" }, { nme: "lorem2" }];
  }

  const obj = {
    name: "dfs",
    nme: "dsd",
  };

  console.log(obj.name);

  // deconstruction
  const { name, nme } = obj

  


  return (
    <div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ul
          className='tabs'
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".6rem",
            listStyle: "none",
            flexDirection: "column",
            borderLeft: "1px solid #a1a1a1",
          }}
        >
          <li>
            <button
              className={tab === "1" ? "active" : ""}
              value={"1"}
              onClick={(e) => setTab(e.target.value)}
            >
              Tab 1
            </button>
          </li>
          <li>
            <button
              className={tab === "2" ? "active" : ""}
              value={"2"}
              onClick={(e) => setTab(e.target.value)}
            >
              Tab 2
            </button>
          </li>{" "}
          <li>
            <button
              className={tab === "3" ? "active" : ""}
              value={"3"}
              onClick={(e) => setTab(e.target.value)}
            >
              Tab 3
            </button>
          </li>
        </ul>

        <div>
          {content.map(({ name, nme }) => {
            return (
              <>
                <div style={{ color: "red" }}>{name}</div>
                <div style={{ color: "pink" }}>{nme}</div>
              </>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Questions;
