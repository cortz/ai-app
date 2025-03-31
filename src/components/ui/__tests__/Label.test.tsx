import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "../Label";

describe("Label", () => {
  it("renders with default props", () => {
    render(<Label htmlFor="email">Email</Label>);
    const label = screen.getByText("Email");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "email");
  });

  it("renders with required variant", () => {
    render(<Label variant="required">Required Field</Label>);
    const label = screen.getByText("Required Field");
    expect(label).toHaveClass("after:text-red-500");
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Custom Label</Label>);
    const label = screen.getByText("Custom Label");
    expect(label).toHaveClass("custom-class");
  });
});
