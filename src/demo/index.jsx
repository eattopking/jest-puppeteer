import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "测试" };
  }
  render() {
    return <div>测试页面</div>;
  }
}
