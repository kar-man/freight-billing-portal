import React from 'react';

export interface Trend {
  value: string;
  isPositive: boolean;
}

export interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: Trend;
  icon: React.ComponentType<any>;
  iconColor: string;
}
