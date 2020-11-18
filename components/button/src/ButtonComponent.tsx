import React from 'react';

import { ButtonComponentProps } from './ButtonComponent.types';

import './ButtonComponent.scss';

const ButtonComponent: React.FC<ButtonComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
  </div>
);

export default ButtonComponent;
