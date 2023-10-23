import Header from "../components/common/Header/Header";
import React, { Component } from "react";
import Presentation from "../components/common/Presentation/Presentation";


class DashBoard extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Presentation/>
        </div>
      );
    }
  }
  
  export default DashBoard;