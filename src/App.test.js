// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KarmaCompass title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KarmaCompass/i);
    expect(titleElement).toBeInTheDocument();
});
