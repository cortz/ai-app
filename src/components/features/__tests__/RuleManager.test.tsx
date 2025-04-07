import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { RuleManager } from "../RuleManager";

describe("RuleManager", () => {
  it("renders all rules", () => {
    render(<RuleManager />);

    // Check if all rules are rendered
    expect(screen.getByText("Code Style and Patterns")).toBeInTheDocument();
    expect(screen.getByText("React Aria Components")).toBeInTheDocument();
    expect(screen.getByText("File and Naming Conventions")).toBeInTheDocument();
    expect(screen.getByText("Form Validation Rules")).toBeInTheDocument();
  });

  it("allows selecting and deselecting rules", () => {
    render(<RuleManager />);

    const codeStyleCheckbox = screen.getByRole("checkbox", {
      name: /code style and patterns/i,
    });

    // Initially unchecked
    expect(codeStyleCheckbox).not.toBeChecked();

    // Check the rule
    fireEvent.click(codeStyleCheckbox);
    expect(codeStyleCheckbox).toBeChecked();

    // Uncheck the rule
    fireEvent.click(codeStyleCheckbox);
    expect(codeStyleCheckbox).not.toBeChecked();
  });

  it("disables download button when no rules are selected", () => {
    render(<RuleManager />);

    const downloadButton = screen.getByRole("button", {
      name: /download selected rules/i,
    });

    expect(downloadButton).toBeDisabled();
  });

  it("enables download button when rules are selected", () => {
    render(<RuleManager />);

    const codeStyleCheckbox = screen.getByRole("checkbox", {
      name: /code style and patterns/i,
    });

    // Select a rule
    fireEvent.click(codeStyleCheckbox);

    const downloadButton = screen.getByRole("button", {
      name: /download selected rules/i,
    });

    expect(downloadButton).not.toBeDisabled();
  });

  it("shows alert when trying to download without selection", () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<RuleManager />);

    const downloadButton = screen.getByRole("button", {
      name: /download selected rules/i,
    });

    fireEvent.click(downloadButton);
    expect(alertSpy).toHaveBeenCalledWith(
      "Please select at least one rule to download."
    );

    alertSpy.mockRestore();
  });
});
