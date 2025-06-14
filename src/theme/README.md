# Design Token System

This directory contains the design token system for the Billing Portal application. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use these tokens to maintain a consistent visual language throughout the application.

## Structure

The design token system is organized into the following categories:

- **Colors**: Primary colors (blue, green, orange, purple, red) and neutral colors (white, gray, black)
- **Typography**: Font families, font sizes, font weights, and line heights
- **Spacing**: Consistent spacing values for margins, padding, etc.
- **Border Radius**: Values for rounding corners
- **Shadows**: Box shadow values for creating depth

## Usage with Tailwind CSS

The design tokens are integrated with Tailwind CSS through the `tailwind.config.js` file. This means you can use the tokens directly in your Tailwind classes.

### Examples

#### Colors

```jsx
// Using primary blue color
<div className="bg-primary-blue-500 text-white">Blue Button</div>

// Using neutral gray color
<div className="text-neutral-gray-600">Gray Text</div>
```

#### Typography

```jsx
// Using font family
<p className="font-sans">Text in Inter font</p>

// Using font size and weight
<h1 className="text-2xl font-bold">Heading</h1>
```

#### Spacing

```jsx
// Using spacing values
<div className="p-4 m-6">Padded and Margined Box</div>
```

#### Border Radius

```jsx
// Using border radius
<div className="rounded-lg">Rounded Box</div>
```

#### Shadows

```jsx
// Using shadows
<div className="shadow-md">Box with Medium Shadow</div>
```

## Benefits

Using the design token system provides several benefits:

1. **Consistency**: Ensures visual consistency across the application
2. **Maintainability**: Makes it easier to update the design system
3. **Scalability**: Provides a foundation for scaling the design system
4. **Efficiency**: Reduces the need for hardcoded values in components

## Extending the System

To extend the design token system, modify the `tokens.js` file and ensure the changes are reflected in the `tailwind.config.js` file.