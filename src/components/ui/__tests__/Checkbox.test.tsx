import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
  it("renders with default props", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("renders with error variant", () => {
    render(<Checkbox variant="error">Error checkbox</Checkbox>);
    const checkbox = screen.getByRole("checkbox", { name: /error checkbox/i });
    expect(checkbox).toHaveClass("text-red-500");
  });

  it("handles selection changes", () => {
    const handleChange = vi.fn();
    render(
      <Checkbox isSelected onChange={handleChange}>
        Select me
      </Checkbox>
    );

    const checkbox = screen.getByRole("checkbox", { name: /select me/i });
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<Checkbox isDisabled>Disabled checkbox</Checkbox>);
    const checkbox = screen.getByRole("checkbox", {
      name: /disabled checkbox/i,
    });
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("applies custom className", () => {
    render(<Checkbox className="custom-class">Custom checkbox</Checkbox>);
    const checkbox = screen.getByRole("checkbox", { name: /custom checkbox/i });
    expect(checkbox).toHaveClass("custom-class");
  });
});
