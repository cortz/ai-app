import type { Rule } from "../types/rules";

export const DEFAULT_RULES: Rule[] = [
  {
    id: "code-style",
    name: "Code Style and Patterns",
    description: "General TypeScript, naming, and formatting conventions",
    content: `# Code Style and Patterns

- Follow TypeScript best practices.
- Use meaningful variable and function names.
- Naming conventions:
  - PascalCase for components
  - camelCase for variables and functions
- Structure conventions:
  - Follow existing folder and file organization patterns
- Create semantically correct components with clear boundaries:
  - Each component should have a single, well-defined purpose.
  - Separate UI elements with different responsibilities (e.g., navigation vs. data manipulation).
  - Avoid mixing unrelated functionality (e.g., don't place action buttons inside breadcrumb components).
- Maintain consistent formatting.
- Prioritize readability and maintainability.
- Throw errors sparingly. Error messages should end with a period.
- Use TanStack Query for all API interactions.`,
  },
  {
    id: "component-rules",
    name: "React Aria Components",
    description: "Rules for building reusable React Aria components",
    content: `# React Aria Components

When implementing UI components in the frontend, follow these rules carefully.

## File and Naming Conventions _(Rule Type: File Creation Only)_

- Component filenames **must use PascalCase**.  
  ✅ \`Checkbox.tsx\`, \`UserCard.tsx\`  
  ❌ \`checkbox.tsx\`, \`user-card.tsx\`
- The filename must match the exported component name exactly.
- Use PascalCase for component exports (e.g., \`export const UserCard = () => {}\`).
- Use camelCase for variable and function names.
- Avoid default exports — always use named exports.
- Folders can use lowercase unless otherwise standardized in the project.

## Implementation Guidelines

- Use React Aria components from \`src/components/ui/ComponentName\`.
- Prefer clear, descriptive names over comments.
- Use the \`@components\` alias or search relevant folders to locate existing components.
- Reuse existing components instead of duplicating UI.
- Apply proper accessibility (ARIA) attributes.
- Follow each component's documentation and established usage patterns.`,
  },
  {
    id: "file-naming",
    name: "File and Naming Conventions",
    description: "Rules for filenames, exports, and folder organization",
    content: `# File and Naming Conventions

_(Rule Type: File Creation Only)_

- Component filenames **must use PascalCase**.  
  ✅ \`Checkbox.tsx\`, \`UserCard.tsx\`  
  ❌ \`checkbox.tsx\`, \`user-card.tsx\`
- The filename must match the exported component name exactly.
- Use PascalCase for component exports (e.g., \`export const UserCard = () => {}\`).
- Use camelCase for variable and function names.
- Avoid default exports — always use named exports.
- Folders can use lowercase unless otherwise standardized in the project.`,
  },
  {
    id: "form-validation",
    name: "Form Validation Rules",
    description: "Form validation conventions using react-hook-form and zod",
    content: `# Form Validation Rules

This file outlines project-specific rules and patterns for building and validating forms in the frontend.

## Libraries

- Use \`react-hook-form\` for form state management.
- Use \`zod\` for schema-based validation.
- Integrate both via \`@hookform/resolvers/zod\`.
- Use \`yup\` **only** if working on legacy forms. Prefer migrating to \`zod\` when refactoring.

## Validation Rules

- Always define a schema for validation.
- Define validation schemas in a separate file under \`src/validations/\` or \`src/forms/schemas/\`.
- Do not use inline validation rules directly in JSX.
- Display validation errors next to the relevant field.
- Use the \`FormErrorMessage\` component to show errors consistently.
- Fields marked as \`required\` must be clearly labeled with an asterisk or hint text.
- Use \`isRequired\` and \`aria-required\` attributes on required fields.
- Match field names in the schema exactly with the component's \`name\` prop.
- Validate on submit by default. Use \`onBlur\` or \`onChange\` only if needed for better UX.`,
  },
];
