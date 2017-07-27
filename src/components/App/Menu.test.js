import React from 'react';

import Menu from './Menu';
import createComponentWithIntl from '../../scripts/helperWithIntl';

test('Menu rendered correctly', () => {
  const component = createComponentWithIntl(<Menu />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
