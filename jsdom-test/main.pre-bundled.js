import React from 'react';
import renderer from 'react-test-renderer';

class HelloWorldComponent extends React.PureComponent {
  render() {
    return (
      <div>
      <h1 className="main-class">Hello World!</h1>
      </div>
    );
  }
}

describe('main test', () => {
    it('Link changes the class when hovered', () => {
        const component = renderer.create(<HelloWorldComponent />);
        let tree = component.toJSON();
        console.log(tree)
  /*       expect(tree.props.className).toBe('main-class'); */
    });
})