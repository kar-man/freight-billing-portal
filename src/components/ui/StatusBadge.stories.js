import React from 'react';
import StatusBadge from './StatusBadge';

/**
 * @typedef {'Active'|'Inactive'|'Pending'|'In Transit'|'Delivered'|'Paid'|'Outstanding'|'Overdue'|'Cancelled'|'Draft'|'Pricing'|'Operations'} Status
 */

/**
 * @typedef {Object} StoryArgs
 * @property {Status} status - The status to display
 */

const meta = {
  title: 'Components/UI/StatusBadge',
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

/**
 * Default story
 * @type {{args: StoryArgs}}
 */
export const Default = {
  args: {
    status: 'Active',
  },
};

// Create a story for each status type
/**
 * Active status
 * @type {{args: StoryArgs}}
 */
export const Active = {
  args: {
    status: 'Active',
  },
};

/**
 * Inactive status
 * @type {{args: StoryArgs}}
 */
export const Inactive = {
  args: {
    status: 'Inactive',
  },
};

/**
 * Pending status
 * @type {{args: StoryArgs}}
 */
export const Pending = {
  args: {
    status: 'Pending',
  },
};

/**
 * In Transit status
 * @type {{args: StoryArgs}}
 */
export const InTransit = {
  args: {
    status: 'In Transit',
  },
};

/**
 * Delivered status
 * @type {{args: StoryArgs}}
 */
export const Delivered = {
  args: {
    status: 'Delivered',
  },
};

/**
 * Paid status
 * @type {{args: StoryArgs}}
 */
export const Paid = {
  args: {
    status: 'Paid',
  },
};

/**
 * Outstanding status
 * @type {{args: StoryArgs}}
 */
export const Outstanding = {
  args: {
    status: 'Outstanding',
  },
};

/**
 * Overdue status
 * @type {{args: StoryArgs}}
 */
export const Overdue = {
  args: {
    status: 'Overdue',
  },
};

/**
 * Cancelled status
 * @type {{args: StoryArgs}}
 */
export const Cancelled = {
  args: {
    status: 'Cancelled',
  },
};

/**
 * Draft status
 * @type {{args: StoryArgs}}
 */
export const Draft = {
  args: {
    status: 'Draft',
  },
};

/**
 * Pricing status
 * @type {{args: StoryArgs}}
 */
export const Pricing = {
  args: {
    status: 'Pricing',
  },
};

/**
 * Operations status
 * @type {{args: StoryArgs}}
 */
export const Operations = {
  args: {
    status: 'Operations',
  },
};

/**
 * Story that shows all status badges together
 * @type {{args: StoryArgs, render: Function}}
 */
export const AllStatuses = {
  args: {
    status: 'Active' // Default status
  },
  render: () => {
    const statuses = [
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