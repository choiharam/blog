import React from "react";
import "./../styles/utios.module.css";

export default function Content(props: { message:string }) {
  return (
    <div className="content">
      <h1>{props.message}</h1>
    </div>
  );
}
