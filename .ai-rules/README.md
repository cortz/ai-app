# AI Rules and Guidelines

This folder contains rules and guidelines for AI interactions with this project. These rules help maintain consistency and ensure that AI assistants follow project-specific requirements and best practices.

## Purpose

The `.ai-rules` folder serves as a central location for:

- Project-specific coding standards
- AI interaction guidelines
- Code style preferences
- Architecture decisions
- Security requirements
- Testing requirements

## Current Rules

1. **Code Style and Patterns**
   - Follow TypeScript best practices
   - Use meaningful variable and function names
   - Follow existing conventions for:

- Naming (PascalCase for components, camelCase for variables/functions).
- Structure (folder organization, file organization).
- Always create semantically correct components with clear boundaries and responsibilities:
  - Each component should have a single, well-defined purpose.
  - UI elements with different functionality (e.g., navigation vs. data manipulation) should be in separate components.
  - Avoid mixing unrelated functionality in one component (e.g., don't add action buttons inside breadcrumb components).
- Maintain consistent formatting
- Prioritize code readability and maintainability.
- Throw errors sparingly. Error messages should include a period.
- Use TanStack Query for API interactions.

3. **Testing**

   - Include integration tests where appropriate
   - Maintain good test coverage

4. **Documentation**

   - Keep documentation up to date
   - Document complex algorithms or business logic
   - Include examples where helpful

5. **Implementation**

IMPORTANT: Always follow these steps very carefully when implementing changes:

- Consult any relevant rules files listed below and start by listing which rule files have been used to guide your response (e.g., `Rules consulted: form-with-validation.md, tanstack-query-api-integration.md`).
- Search the codebase for similar code before implementing new code.
- Reference existing implementations to maintain consistency.
- Always run `npm run build && npm run lint` (as a single command) from `/application/` to verify the code compiles.
- Fix any compiler warnings or test failures.

## Adding New Rules

You can add new rules by:

1. Creating new markdown files in this folder
2. Updating this README with references to new rule files
3. Organizing rules by category (e.g., `security.md`, `testing.md`)

## Usage

AI assistants should consult these rules before making any changes to the codebase. The rules should be treated as project-specific guidelines that complement general best practices.
