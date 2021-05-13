import React, { PureComponent } from "react";
import './styles.css';

class HelloWorldComponent extends PureComponent {
  render() {
    return (
      <div>
      <h1 className="main-class">Hello World!</h1>
      </div>
    );
  }
}

export default HelloWorldComponent;
