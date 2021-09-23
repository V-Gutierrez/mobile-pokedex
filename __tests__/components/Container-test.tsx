import 'react-native';
import React from 'react';
import {Container} from '../../src/components';

import {render} from '@testing-library/react-native';
import {Text} from 'react-native';

describe('Container component', () => {
  it('should render children correctly', () => {
    const children = <Text>Hello, World!</Text>;

    const {getByText} = render(<Container>{children}</Container>);
    const childrenComponent = getByText('Hello, World!');

    expect(childrenComponent).toBeDefined();
  });
});
