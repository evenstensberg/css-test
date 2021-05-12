import React, { PureComponent } from "react";

class HelloWorldComponent extends PureComponent {
  render() {
    return (
      <div>
      <h1 className="main-class" styles={{
        color: 'black'
      }}>Hello World!</h1>
      </div>
    );
  }
}

export default HelloWorldComponent;
