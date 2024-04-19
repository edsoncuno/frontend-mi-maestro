"use client";
import { useState } from "react";

export default function App(props) {
  const [hover, setHover] = useState(false);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.data.href}
      style={{
        display: "flex",
        width: "min-content",
        height: "auto",
        alignItems: "center",
        textDecoration: "none",
        color: "white",
        border: hover ? `1px solid ${props.data.color}` : "1px solid white",
        padding: "5px 10px",
        borderRadius: "5px",
        transition: "all 0.35s",
        boxShadow: hover ? `0 0 0 3px ${props.data.color}` : "",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ marginRight: "1rem" }}>{props.data.label}</div>
      <div
        style={{
          width: props.data.size,
          height: props.data.size,
          backgroundImage: `url(${props.data.bgiUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </a>
  );
}
