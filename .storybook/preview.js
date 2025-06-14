import '../src/index.css';
import { tokens } from '../src/theme/tokens';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: tokens.colors.neutral.gray[50],
        },
        {
          name: 'dark',
          value: tokens.colors.neutral.gray[900],
        },
      ],
    },
  },
};

export default preview;