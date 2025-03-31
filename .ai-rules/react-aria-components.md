# React Aria Components

When implementing UI components in the frontend, follow these rules very carefully.

## Implementation

- Use React Aria Components from `@repo/src/components/ui/ComponentName`:
- Search [Components](/src/components/ui/) when you need to find a component.
- Always use existing components rather than creating new ones.
- Ensure proper accessibility attributes are applied.
- Follow the component's documentation for proper usage patterns.
- Write unit tests for all ui components

## Example 1 - Simple Form

```tsx
import { Form } from "@repo/ui/components/Form";
import { FormErrorMessage } from "@repo/ui/components/FormErrorMessage";
import { Button } from "@repo/ui/components/Button";
import { TextField } from "@repo/ui/components/TextField";

<Form>
  <TextField name="email" label={<Trans>Email</Trans>} isRequired />
  <FormErrorMessage error={updateUserMutation.error} />
  <Button variant="primary" onPress={handleSubmit}>
    <Trans>Submit</Trans>
  </Button>
</Form>;
```
