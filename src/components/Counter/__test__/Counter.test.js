import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Counter component', () => {
  test('header renders with correct text', () => {
    render(<Counter />);
    const headerEl = screen.getByTestId('header');
    expect(headerEl.textContent).toBe('My Counter');
  })

  test('counter inits with text of 0', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    expect(counterEl.textContent).toBe('0');
  })

  test('input inits with value of 1', () => {
    render(<Counter />);
    const inputEl = screen.getByTestId('input');
    expect(inputEl.value).toBe('1');
  })

  test('add button renders with +', () => {
    render(<Counter />);
    const addBtn = screen.getByTestId('addBtn');
    expect(addBtn.textContent).toBe('+');
  })

  test('subtract button renders with -', () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId('subtractBtn');
    expect(subtractBtn.textContent).toBe('-');
  })

  test('changing value of input works correctly', () => {
    render(<Counter />);
    const inputEl = screen.getByTestId('input');
    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, { target: { value: '10' } });
    expect(inputEl.value).toBe('10');
  })

  test('clicking on + adds 1 to counter', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const btnEl = screen.getByTestId('addBtn');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('1');
  })


  test('clicking on - subtracts 1 from counter', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const btnEl = screen.getByTestId('subtractBtn');

    expect(counterEl.textContent).toBe('0');

    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe('-1');
  })

  test('changing input then clicking on + works correctly', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const btnEl = screen.getByTestId('addBtn');
    const inputEl = screen.getByTestId('input');

    expect(counterEl.textContent).toBe('0');

    fireEvent.change(inputEl, { target: { value: '10' } });
    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe('10');
  })


  test('changing input then clicking on - works correctly', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const btnEl = screen.getByTestId('subtractBtn');
    const inputEl = screen.getByTestId('input');

    expect(counterEl.textContent).toBe('0');

    fireEvent.change(inputEl, { target: { value: '10' } });
    fireEvent.click(btnEl);

    expect(counterEl.textContent).toBe('-10');
  })


  test('clicking + then clicking - works correctly', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const addBtnEl = screen.getByTestId('addBtn');
    const subtractBtnEl = screen.getByTestId('subtractBtn');
    const inputEl = screen.getByTestId('input');

    expect(counterEl.textContent).toBe('0');

    fireEvent.change(inputEl, { target: { value: '10' } });
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    expect(counterEl.textContent).toBe('40');

    fireEvent.click(subtractBtnEl);
    fireEvent.click(subtractBtnEl);
    expect(counterEl.textContent).toBe('20');
  })

  test('text is green when counter is >= 100', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const inputEl = screen.getByTestId('input');
    const addBtnEl = screen.getByTestId('addBtn');

    expect(counterEl.className).toBe('');

    fireEvent.change(inputEl, { target: { value: '100' } });
    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe('text-green');
  })

  test('text is red when counter is <= -100', () => {
    render(<Counter />);
    const counterEl = screen.getByTestId('counter');
    const inputEl = screen.getByTestId('input');
    const subtractBtnEl = screen.getByTestId('subtractBtn');

    expect(counterEl.className).toBe('');

    fireEvent.change(inputEl, { target: { value: '100' } });
    fireEvent.click(subtractBtnEl);
    expect(counterEl.className).toBe('text-red');
  })
})