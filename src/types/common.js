/**
 * @typedef {'Active'|'Inactive'|'Pending'|'In Transit'|'Delivered'|'Paid'|'Outstanding'|'Overdue'|'Cancelled'|'Draft'|'Pricing'|'Operations'} Status
 */

/**
 * @typedef {'day'|'week'|'month'|'quarter'|'year'|'custom'} DateRangeFilter
 */

/**
 * @typedef {Object} PaginationProps
 * @property {number} currentPage
 * @property {number} totalPages
 * @property {function(number): void} onPageChange
 */

/**
 * @typedef {Object} FilterProps
 * @property {DateRangeFilter} dateRange
 * @property {Status[]} [status]
 * @property {string} [search]
 * @property {function(Object): void} onFilterChange
 */

/**
 * @typedef {Object} BadgeProps
 * @property {Status} status
 * @property {string} [label]
 */