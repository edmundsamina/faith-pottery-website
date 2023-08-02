import { describe, test, expect } from "vitest";
import {render, screen} from '@testing-library/react';
import {AboutUs} from './AboutUs.jsx';
import handmade from '../../../icons/hand-right.png'


describe("AboutUS Section test", () => {
  test("Should show titles", () => {
    render(<AboutUs/>)
    expect(screen.getByText(/HAND MADE WITH LOVE/i)).toBeDefined()
    expect(screen.getByText(/FAST AND RELIABLE SHIPPING/i)).toBeDefined()
    expect(screen.getByText(/UNIQUE, ONE OF A KIND PEICES/i)).toBeDefined()

  });


  test("Should show images have loaded", () => {
    render(<AboutUs/>)
  expect(handmade).toBeInTheDocument()
  });
});
