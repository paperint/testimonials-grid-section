import React from "react";
import { data } from "../data/information";
import "../App.css";

function Homepage() {
  return (
    <main className="grid items-center justify-center h-screen grid-flow-col bg-slate-400">
      <div className="grid max-w-6xl grid-cols-1 gap-6 p-6 grid-rows-auto bg-slate-400 lg:grid-cols-4 lg:grid-rows-2">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`card-${index} p-6 rounded-lg shadow-lg flex flex-col justify-evenly hover:shadow-2xl cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={item.image}
                    alt="profile"
                    className="rounded-full w-7 h-7 ring-4 ring-slate-400"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-medium "> {item.name} </h4>
                  <p className="text-xs opacity-50"> {item.status} </p>
                </div>
              </div>
              <div className="z-20 mt-4">
                <h1 className="text-xl font-semibold ">{item.title}</h1>
              </div>
              <div className="mt-4">
                <p className="text-sm opacity-70">{item.detail}</p>
              </div>
              <div>
                <img
                  src={item.absolute}
                  className="absolute top-0 z-0 w-20 lg:w-32 right-4 lg:right-32"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
// first:col-span-2 last:col-span-2

export default Homepage;
