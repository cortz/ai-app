import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Switch } from "../Switch";

describe("Switch", () => {
  it("renders with default props", () => {
    render(<Switch>Enable feature</Switch>);
    const switchElement = screen.getByRole("switch", {
      name: /enable feature/i,
    });
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it("renders with error variant", () => {
    render(<Switch variant="error">Error switch</Switch>);
    const switchElement = screen.getByRole("switch", { name: /error switch/i });
    expect(switchElement).toHaveClass("text-red-500");
  });

  it("handles selection changes", () => {
    const handleChange = vi.fn();
    render(
      <Switch isSelected onChange={handleChange}>
        Toggle me
      </Switch>
    );

    const switchElement = screen.getByRole("switch", { name: /toggle me/i });
    expect(switchElement).toBeChecked();
    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<Switch isDisabled>Disabled switch</Switch>);
    const switchElement = screen.getByRole("switch", {
      name: /disabled switch/i,
    });
    expect(switchElement).toBeDisabled();
    expect(switchElement).toHaveClass("opacity-50", "cursor-not-allowed");
  });

  it("applies custom className", () => {
    render(<Switch className="custom-class">Custom switch</Switch>);
    const switchElement = screen.getByRole("switch", {
      name: /custom switch/i,
    });
    expect(switchElement).toHaveClass("custom-class");
  });
});
