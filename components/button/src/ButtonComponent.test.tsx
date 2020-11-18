import React from 'react';
import { render } from '@testing-library/react';

import ButtonComponent from './ButtonComponent';
import { ButtonComponentProps } from './ButtonComponent.types';

describe('<ButtonComponent>', () => {
  let props: ButtonComponentProps;

  beforeEach(() => {
    props = {
      theme: 'primary',
    };
  });

  const renderComponent = () => render(<ButtonComponent {...props} />);

  it('should render', () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId('test-component');

    expect(testComponent).toHaveClass('test-component-primary');
  });
});
