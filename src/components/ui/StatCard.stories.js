import { Package2, DollarSign, Users, ShoppingCart } from 'lucide-react';
import StatCard from './StatCard';

/**
 * @typedef {Object} StoryArgs
 * @property {string} title - The title of the stat card
 * @property {string} value - The main value to display
 * @property {Object} [trend] - Optional trend information
 * @property {string} trend.value - The trend value as a string
 * @property {boolean} trend.isPositive - Whether the trend is positive
 * @property {Function} icon - The icon component to display
 * @property {string} iconColor - The color of the icon
 */

const meta = {
  title: 'Components/UI/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconColor: {
      control: { type: 'select', options: ['blue', 'green', 'orange', 'purple', 'red', 'gray'] },
    },
    icon: {
      control: { type: 'select', options: ['Package2', 'DollarSign', 'Users', 'ShoppingCart'] },
      mapping: {
        Package2: Package2,
        DollarSign: DollarSign,
        Users: Users,
        ShoppingCart: ShoppingCart,
      },
    },
  },
};

export default meta;

/**
 * Default story with positive trend
 * @type {{args: StoryArgs}}
 */
export const Default = {
  args: {
    title: 'Total Orders',
    value: '1,247',
    trend: { value: '12.5%', isPositive: true },
    icon: Package2,
    iconColor: 'blue',
  },
};

/**
 * Story with negative trend
 * @type {{args: StoryArgs}}
 */
export const WithNegativeTrend = {
  args: {
    title: 'Revenue',
    value: '$48,352',
    trend: { value: '3.2%', isPositive: false },
    icon: DollarSign,
    iconColor: 'green',
  },
};

/**
 * Story without trend information
 * @type {{args: StoryArgs}}
 */
export const WithoutTrend = {
  args: {
    title: 'Active Clients',
    value: '86',
    icon: Users,
    iconColor: 'purple',
  },
};

/**
 * Story with a different icon
 * @type {{args: StoryArgs}}
 */
export const WithDifferentIcon = {
  args: {
    title: 'Pending Orders',
    value: '24',
    trend: { value: '5.8%', isPositive: true },
    icon: ShoppingCart,
    iconColor: 'orange',
  },
};
