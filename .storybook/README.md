# Storybook Documentation

This project uses Storybook for component documentation and development. Storybook provides a way to develop UI components in isolation, which can improve component reuse, testability, and development speed.

## Running Storybook

To start Storybook locally:

```bash
npm run storybook
```

This will start Storybook on port 6006. Open your browser and navigate to http://localhost:6006 to view the component documentation.

## Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

This will create a static build of Storybook in the `storybook-static` directory, which can be deployed to a static hosting service.

## Component Documentation

The following components have been documented with Storybook:

1. **StatCard** - A card component for displaying statistics with optional trend indicators
2. **StatusBadge** - A badge component for displaying status information
3. **PageHeader** - A header component for page titles and subtitles

Each component has multiple stories that demonstrate different props and configurations.

## Adding New Stories

To add documentation for a new component:

1. Create a new file named `ComponentName.stories.jsx` (or `.tsx` for TypeScript) next to your component file
2. Import your component and define stories that demonstrate different use cases
3. Run Storybook to see your new stories

Example:

```jsx
import React from 'react';
import MyComponent from './MyComponent';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // Define controls for your component props
  },
};

export const Default = {
  args: {
    // Default props
  },
};

// Add more stories as needed
```

## Best Practices

- Document all reusable components
- Show different states and variations of each component
- Use controls to allow interactive exploration of component props
- Group related components under the same category in the Storybook sidebar