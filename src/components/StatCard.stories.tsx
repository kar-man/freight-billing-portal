import React from 'react';
import { Package2, DollarSign, Users, ShoppingCart } from 'lucide-react';
import StatCard from './StatCard';

const meta = {
  title: 'Components/StatCard',
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
type Story = {
  args: {
    title: string;
    value: string;
    trend?: { value: string; isPositive: boolean };
    icon: React.ComponentType<any>;
    iconColor: string;
  };
  render?: (args: any) => React.ReactElement;
};

export const Default: Story = {
  args: {
    title: 'Total Orders',
    value: '1,247',
    trend: { value: '12.5%', isPositive: true },
    icon: Package2,
    iconColor: 'blue',
  },
};

export const WithNegativeTrend: Story = {
  args: {
    title: 'Revenue',
    value: '$48,352',
    trend: { value: '3.2%', isPositive: false },
    icon: DollarSign,
    iconColor: 'green',
  },
};

export const WithoutTrend: Story = {
  args: {
    title: 'Active Clients',
    value: '86',
    icon: Users,
    iconColor: 'purple',
  },
};

export const WithDifferentIcon: Story = {
  args: {
    title: 'Pending Orders',
    value: '24',
    trend: { value: '5.8%', isPositive: true },
    icon: ShoppingCart,
    iconColor: 'orange',
  },
};
