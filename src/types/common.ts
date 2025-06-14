
// Common status types
export type Status = 
  | 'Active' | 'Inactive'
  | 'Pending' | 'In Transit' | 'Delivered'
  | 'Paid' | 'Outstanding' | 'Overdue'
  | 'Cancelled' | 'Draft'
  | 'Pricing' | 'Operations';

// Common date range filter options
export type DateRangeFilter = 'day' | 'week' | 'month' | 'quarter' | 'year' | 'custom';

// Common pagination props
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Common filter props
export interface FilterProps {
  dateRange: DateRangeFilter;
  status?: Status[];
  search?: string;
  onFilterChange: (filters: Partial<Omit<FilterProps, 'onFilterChange'>>) => void;
}

// Common badge props
export interface BadgeProps {
  status: Status;
  label?: string;
}
