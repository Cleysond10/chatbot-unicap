import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App"

describe('Test Table Component', () => {
  it('Should show chat title', () => {
    render(
      <App />
    );

    const title = screen.getByText("Chat");

    expect(title).toBeInTheDocument();
  });

  it('Should show chat bot image', () => {
    render(
      <App />
    );

    const img = screen.getByRole("img");

    expect(img).toBeVisible();
  });

  it('Should show chat bot input', () => {
    render(
      <App />
    );

    const input = screen.getByPlaceholderText("Type the message ...");

    expect(input).toBeInTheDocument();
  });
});