/**
 * @typedef {import('./common').Status} Status
 */

/**
 * @typedef {Object} InvoiceItem
 * @property {string} id
 * @property {string} description
 * @property {number} quantity
 * @property {number} unitPrice
 * @property {number} totalPrice
 */

/**
 * @typedef {Object} Invoice
 * @property {string} id
 * @property {string} client
 * @property {Status} status
 * @property {string} amount
 * @property {string} dueDate
 * @property {boolean} [overdue]
 * @property {string} [invoiceNumber]
 * @property {string} [clientId]
 * @property {string} [clientName]
 * @property {string} [issueDate]
 * @property {number} [totalAmount]
 * @property {number} [paidAmount]
 * @property {InvoiceItem[]} [items]
 * @property {string} [notes]
 */

/**
 * @typedef {Object} InvoicesFilterProps
 * @property {Status[]} [status]
 * @property {[Date, Date]} [dateRange]
 * @property {string} [clientId]
 * @property {string} [search]
 */

/**
 * @typedef {Object} InvoicesTableProps
 * @property {Invoice[]} invoices
 * @property {boolean} [loading]
 * @property {Error|null} [error]
 * @property {function(string): void} [onViewInvoice]
 */