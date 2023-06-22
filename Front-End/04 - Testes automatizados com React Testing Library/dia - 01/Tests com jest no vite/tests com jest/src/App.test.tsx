import { render, screen } from '@testing-library/react';
import App from './App';

it('testa 2', ()=> {
  render(<App  />)
  const tittleReactAndVite = screen.getByText(/vite \+ react/i);
  expect(tittleReactAndVite).toBeInTheDocument();
})