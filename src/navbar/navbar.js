import React, { useState } from "react";
import "./navbar.css";
import { useParams } from "../context/context";
export default function Navbar() {
  const { mode, setMode, algo, setAlgo, setRes, setRun } = useParams();

  return (
    <div className="navbar">
      <div className="container">
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            mode == "setStart" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "setStart") setMode(null);
            else {
              setMode("setStart");
            }
          }}
        >
          <i className="bi-chevron-right"></i>
          Start Node
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            mode == "setTarget" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "setTarget") setMode(null);
            else {
              setMode("setTarget");
            }
          }}
        >
          <i className="bi-bullseye"></i>
          Target Node
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            mode == "addbricks" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addbricks") setMode(null);
            else {
              setMode("addbricks");
            }
          }}
        >
          <i className="bi-bricks"></i>
          Add Bricks
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            mode == "addweight" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addweight") setMode(null);
            else {
              setMode("addweight");
            }
          }}
        >
          <i className="bi-asterisk"></i>
          Add Weight
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            
          ].join(" ")}
          onClick={() => {
            setRes((old)=>{return !old})
          }}
        >
          <i className="bi-arrow-clockwise"></i>
          Reset
        </button>
        <button
          type="button"
          className={[
            "btn",
            "btn-outline-info",
            
          ].join(" ")}
          onClick={() => {
            setRun((old)=>{return !old})
          }}
        >
         <i className="bi-skip-start-fill"></i>
          Start
        </button>
        <div>
       <select className="form-select" aria-label="Default select example"  value={algo} onChange={(e)=>{
        setAlgo(e.target.value)
       }}>
       <option value=''>Choose your algorithm</option>
       <option value="dijkstra">dijkstra</option>
       <option value="BDS">BDS</option>
       <option value="BFS">BFS</option>
</select>
       </div>
      </div>
    </div>
  );
}
