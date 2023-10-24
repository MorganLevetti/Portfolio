import Header from "../components/common/Header/Header";
import React, { Component } from "react";
import Presentation from "../components/common/Presentation/Presentation";
import BackgroundParticules from "../js/BackgroundParticules";


class DashBoard extends Component {
    render() {
      return (
        <div>
          <BackgroundParticules/>
          <Header/>
          <Presentation/>
        </div>
      );
    }
  }
  
  export default DashBoard;