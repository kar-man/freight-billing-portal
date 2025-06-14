import React from 'react';
import StatusBadge from './StatusBadge';
import { Status } from '../types/common';

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: { type: 'select' },
      options: [
        'Active', 'Inactive',
        'Pending', 'In Transit', 'Delivered',
        'Paid', 'Outstanding', 'Overdue',
        'Cancelled', 'Draft',
        'Pricing', 'Operations'
      ],
    },
  },
};

export default meta;
type Story = {
  args: {
    status: Status;
  };
  render?: () => React.ReactElement;
};

export const Default: Story = {
  args: {
    status: 'Active',
  },
};

// Create a story for each status type
export const Active: Story = {
  args: {
    status: 'Active',
  },
};

export const Inactive: Story = {
  args: {
    status: 'Inactive',
  },
};

export const Pending: Story = {
  args: {
    status: 'Pending',
  },
};

export const InTransit: Story = {
  args: {
    status: 'In Transit',
  },
};

export const Delivered: Story = {
  args: {
    status: 'Delivered',
  },
};

export const Paid: Story = {
  args: {
    status: 'Paid',
  },
};

export const Outstanding: Story = {
  args: {
    status: 'Outstanding',
  },
};

export const Overdue: Story = {
  args: {
    status: 'Overdue',
  },
};

export const Cancelled: Story = {
  args: {
    status: 'Cancelled',
  },
};

export const Draft: Story = {
  args: {
    status: 'Draft',
  },
};

export const Pricing: Story = {
  args: {
    status: 'Pricing',
  },
};

export const Operations: Story = {
  args: {
    status: 'Operations',
  },
};

// Story that shows all status badges together
export const AllStatuses: Story = {
  args: {
    status: 'Active' // Default status
  },
  render: () => {
    const statuses: Status[] = [
      'Active', 'Inactive',
      'Pending', 'In Transit', 'Delivered',
      'Paid', 'Outstanding', 'Overdue',
      'Cancelled', 'Draft',
      'Pricing', 'Operations'
    ];

    return (
      <div className="flex flex-wrap gap-2 p-4 max-w-md">
        {statuses.map(status => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>
    );
  },
};
