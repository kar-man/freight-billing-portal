import PageHeader from './PageHeader';

/**
 * @typedef {Object} PageHeaderProps
 * @property {string} title - The title of the page
 * @property {string} [subtitle] - Optional subtitle for the page
 */

/**
 * @typedef {Object} StoryObj
 * @property {PageHeaderProps} args - The props to pass to the component
 */

/**
 * Storybook meta configuration for PageHeader component
 * @type {Object}
 */
const PageHeaderStory = {
  title: 'Components/Layout/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default PageHeaderStory;

/**
 * Default story with title and subtitle
 * @type {StoryObj}
 */
export const Default = {
  args: {
    title: 'Dashboard',
    subtitle: 'Overview of your billing and operations',
  },
};

/**
 * Story without a subtitle
 * @type {StoryObj}
 */
export const WithoutSubtitle = {
  args: {
    title: 'Orders',
  },
};

/**
 * Story with long title and subtitle
 * @type {StoryObj}
 */
export const LongTitle = {
  args: {
    title: 'Comprehensive Billing and Operations Management Dashboard',
    subtitle: 'Detailed overview of all your billing operations, invoices, and client management',
  },
};
