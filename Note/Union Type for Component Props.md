In TypeScript, unions can be a powerful way to handle multiple UI frameworks (like React, Preact, Angular, etc.) in a type-safe way. When working across frameworks, it’s useful to create union types that account for the specific component types and props expected by each framework. Here's a guide on how to set up union types that can accommodate various UI frameworks.

### Step 1: Define a Union Type for Component Props

Each UI framework has its way of defining props and components. You can create a union type that represents the props across different frameworks. This allows flexibility while maintaining type safety.

```typescript
// React Component Props
interface ReactComponentProps {
  type: 'react';
  component: React.ComponentType<any>;
  props: React.ComponentProps<any>;
}

// Preact Component Props
interface PreactComponentProps {
  type: 'preact';
  component: preact.ComponentType<any>;
  props: preact.JSX.IntrinsicElements;
}

// Angular Component Props
interface AngularComponentProps {
  type: 'angular';
  component: any; // Angular doesn't have a straightforward ComponentType like React
  props: { [key: string]: any };
}

// Vue Component Props
interface VueComponentProps {
  type: 'vue';
  component: any; // Vue components can vary significantly
  props: { [key: string]: any };
}

// Union of All Component Props
type ComponentProps =
  | ReactComponentProps
  | PreactComponentProps
  | AngularComponentProps
  | VueComponentProps;
```

### Step 2: Handling the Union in a Render Function

Now that you have a union type for the component props, you can create a function to handle rendering the correct component based on its type.

```typescript
function renderComponent(props: ComponentProps) {
  switch (props.type) {
    case 'react':
      return <props.component {...props.props} />;
    case 'preact':
      return preact.h(props.component, props.props);
    case 'angular':
      // For Angular, you might use Angular's `ComponentFactory` or a custom renderer
      return renderAngularComponent(props.component, props.props);
    case 'vue':
      // For Vue, you might use Vue's `createApp` and mount it conditionally
      return renderVueComponent(props.component, props.props);
    default:
      throw new Error('Unsupported framework');
  }
}
```

This setup ensures that each case in the switch statement only uses the props specific to the framework, preventing TypeScript from throwing type errors.

### Step 3: Defining Helper Functions for Non-React Frameworks

React has native JSX support, but Preact, Angular, and Vue require additional setup. Here’s an example of how you might handle these cases.

```typescript
function renderAngularComponent(component: any, props: { [key: string]: any }) {
  // Implement Angular component rendering logic here
  // This usually involves creating an Angular app/module and mounting it
}

function renderVueComponent(component: any, props: { [key: string]: any }) {
  // Implement Vue component rendering logic here
  // Typically involves using Vue's `createApp` and mounting it
}
```

### Step 4: Create a Union for Event Handling

Each framework also has different ways of handling events, so you might want to create another union for event handling across these frameworks.

```typescript
type ComponentEvents =
  | { type: 'react'; event: React.SyntheticEvent }
  | { type: 'preact'; event: preact.JSX.TargetedEvent }
  | { type: 'angular'; event: Event }
  | { type: 'vue'; event: Event };

function handleEvent(event: ComponentEvents) {
  switch (event.type) {
    case 'react':
      // Handle React-specific event
      break;
    case 'preact':
      // Handle Preact-specific event
      break;
    case 'angular':
      // Handle Angular-specific event
      break;
    case 'vue':
      // Handle Vue-specific event
      break;
  }
}
```

### Example Usage

Finally, here’s how you might use these unions in practice:

```typescript
const reactComponent: ReactComponentProps = {
  type: 'react',
  component: MyReactComponent,
  props: { title: 'React Component' },
};

const preactComponent: PreactComponentProps = {
  type: 'preact',
  component: MyPreactComponent,
  props: { title: 'Preact Component' },
};

// Render components dynamically based on type
renderComponent(reactComponent);
renderComponent(preactComponent);
```

### Benefits

1. **Type Safety**: TypeScript enforces that you only pass the correct props to each component type.
2. **Scalability**: Adding support for additional frameworks is straightforward—just extend the union types.
3. **Flexibility**: You can create reusable components or utilities that work across multiple frameworks without duplicating code.

Using TypeScript union types in this way can create a highly flexible and type-safe structure for handling multiple UI frameworks in a single codebase.
