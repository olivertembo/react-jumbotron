import { render } from '@testing-library/react';
import Jumbotron from './Jumbotron';

describe('renders Jumbotron component', () => {
  it(`should render the initial state`, () => {
    const view = render(
      <Jumbotron />
          );
    expect(view).toMatchSnapshot();
  });
});
