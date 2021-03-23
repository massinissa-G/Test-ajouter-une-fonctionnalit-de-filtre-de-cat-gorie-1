import React from "react";

export default function Button(props){

  return <button className={props.class} style={ props.style } onClick={props.click} >{props.children}</button>

}

