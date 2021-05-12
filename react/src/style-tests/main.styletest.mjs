
import * as styles from './index.scss';

import HelloWorldComponent from '../HelloWorldComponent';

describe('main test', () => {
    it('should calculate class value', () => {
        expect(HelloWorldComponent).toHaveClass(styles.default['main-class'])
    })
})