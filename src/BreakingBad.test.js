import React from 'react';
import ReactDOM from 'react-dom';
import BreakingBad from './BreakingBad';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BreakingBad />, div);
});
