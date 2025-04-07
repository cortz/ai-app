import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("border-gray-300");
  });

  it("renders with error variant", () => {
    render(<Input variant="error" placeholder="Error input" />);
    const input = screen.getByPlaceholderText("Error input");
    expect(input).toHaveClass("border-red-500");
  });

  it("handles user input", () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("applies disabled state correctly", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" placeholder="Custom input" />);
    const input = screen.getByPlaceholderText("Custom input");
    expect(input).toHaveClass("custom-class");
  });

  it("renders with required attribute", () => {
    render(<Input required placeholder="Required input" />);
    const input = screen.getByPlaceholderText("Required input");
    expect(input).toBeRequired();
  });
});
