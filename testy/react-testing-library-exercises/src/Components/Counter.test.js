// Napisz podane testy!
import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Counter', () => {
  test('should have initial counter set to 0', () => {
    // arrange
    render(<Counter />);

    // act
    const element = screen.getByText('value: 0');

    // assert
    expect(element).toBeInTheDocument();
  });

  test('should have increase counter when increase clicked', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'increase'});
    fireEvent.click(button);
    const element = screen.getByText('value: 1');

    expect(element).toBeInTheDocument();
  });

  test('should have decrease counter when decrease clicked', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'decrease'});
    fireEvent.click(button);
    const element = screen.getByText('value: -1');

    expect(element).toBeInTheDocument();
  });

  test('should have reset counter when reset clicked', () => {
    render(<Counter />);

    const increaseButton = screen.getByRole('button', { name: 'increase'});
    fireEvent.click(increaseButton);
    const elementWithValue1 = screen.getByText('value: 1');
    expect(elementWithValue1).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: 'reset'});
    fireEvent.click(resetButton);
    const elementWithValue0 = screen.getByText('value: 0');
    expect(elementWithValue0).toBeInTheDocument();
  });
});
