import React from "react"
import emp1 from "../image/emp1.png"


export default function Employee (props) {
  return (
    <>
<img src = {emp1} />      
<div id="empdetail">
      <h1>Rosey smith</h1>
      <h2>Female</h2>
      <h2>Executive Assistant</h2>
      <h2>Region : Asia Pacific</h2>
      <h4>(203) 000-5021 ext 100</h4>
      <h4>john@abc.com</h4>
      </div>
    </>
  )
}