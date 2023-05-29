// Napisz podane testy!
import { render, screen, fireEvent, getByText } from '@testing-library/react';

import TextTransformer from './TextTransformer';

describe('TextTransformer', () => {
  test('renders correctly', () => {
    const element = render(<TextTransformer />)
    // TODO FIX ME
    // expect(element).toMatchSnapshot();
  });
  test('should transform inserted text', () => {
    render(<TextTransformer />)

    const input = screen.getByLabelText('Insert text');
    fireEvent.change(input, {target: {value: 'velobank'}});
    const element = screen.getByText('__VELOBANK__');

    expect(element).toBeInTheDocument();
  });

  test('should not override inserted text when prop has been set later', () => {
    const { rerender } = render(<TextTransformer />)

    const input = screen.getByLabelText('Insert text');
    fireEvent.change(input, {target: {value: 'velobank'}});
    rerender(<TextTransformer value="Propstext" />);
    const element = screen.getByText('__VELOBANK__');

    expect(element).toBeInTheDocument();
  });

  test('should transform text from props when prop has been set', () => {
    render(<TextTransformer value="Propstext" />)

    const element = screen.getByText('__PROPSTEXT__');

    expect(element).toBeInTheDocument();
  });

  test('should not show transformed text when state is empty', () => {
    render(<TextTransformer />);

    const element = screen.queryByText('Transformed text');

    expect(element).not.toBeInTheDocument();
  })
});
