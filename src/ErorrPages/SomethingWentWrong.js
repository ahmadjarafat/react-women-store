import React from "react";
import "./SomethingWentWrong.css";


class SomethingWentWrong extends React.Component {

      render() {
    return (
      <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>:(</h1>
        </div>
        <h2>Oops! Something went wrong!</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <a href="/Home">Return to homepage</a></p>
      </div>
    </div>)

}}

export default SomethingWentWrong;