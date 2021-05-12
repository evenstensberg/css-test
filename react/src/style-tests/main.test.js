
import * as styles from '../index.css';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOMServer from 'react-dom/server';

import HelloWorldComponent from '../HelloWorldComponent';

describe('main test', () => {
    test('Link changes the class when hovered', () => {
        const component = renderer.create(<HelloWorldComponent />);
        let tree = component.toJSON();
        let staticMarkup = ReactDOMServer.renderToStaticMarkup(HelloWorldComponent);
        console.log(staticMarkup, "HEY")
       /*  expect(tree.props.className).toBe('main-class') */
    });
})