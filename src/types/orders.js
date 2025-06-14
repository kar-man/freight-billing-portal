/**
 * @typedef {import('./common').Status} Status
 */

/**
 * @typedef {Object} OrderItem
 * @property {string} id
 * @property {string} productName
 * @property {number} quantity
 * @property {number} unitPrice
 * @property {number} totalPrice
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} client
 * @property {Status} status
 * @property {string} amount
 * @property {string} date
 * @property {string} [orderNumber]
 * @property {string} [clientId]
 * @property {string} [clientName]
 * @property {string} [dueDate]
 * @property {number} [totalAmount]
 * @property {OrderItem[]} [items]
 * @property {string} [notes]
 */

/**
 * @typedef {Object} OrdersFilterProps
 * @property {Status[]} [status]
 * @property {[Date, Date]} [dateRange]
 * @property {string} [clientId]
 * @property {string} [search]
 */

/**
 * @typedef {Object} OrdersTableProps
 * @property {Order[]} orders
 * @property {boolean} [loading]
 * @property {Error|null} [error]
 * @property {function(string): void} [onViewOrder]
 */