import PageHeader from './PageHeader';

const PageHeaderStory = {
  title: 'Components/Common/PageHeader',
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

export const Default = {
  args: {
    title: 'Dashboard',
    subtitle: 'Overview of your billing and operations',
  },
};

export const WithoutSubtitle = {
  args: {
    title: 'Orders',
  },
};

export const LongTitle = {
  args: {
    title: 'Comprehensive Billing and Operations Management Dashboard',
    subtitle: 'Detailed overview of all your billing operations, invoices, and client management',
  },
};
