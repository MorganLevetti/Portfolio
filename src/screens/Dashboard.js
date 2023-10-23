import { IconButton } from "@mui/material"
import Header from "../components/common/Header/Header";
import React, { Component } from "react";
import Presentation from "../components/common/Presentation/Presentation";


class DashBoard extends Component {
    render() {
      return (
        <div>
          <Header/>
          <Presentation/>
          {/* <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} /> */}
        </div>
      );
    }
  }
  
  export default DashBoard;