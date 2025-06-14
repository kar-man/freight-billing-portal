/**
 * @typedef {import('./common').Status} Status
 */

/**
 * @typedef {Object} ClientContact
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} [phone]
 * @property {string} [role]
 * @property {boolean} [isPrimary]
 */

/**
 * @typedef {Object} ClientAddress
 * @property {string} street
 * @property {string} city
 * @property {string} state
 * @property {string} zipCode
 * @property {string} country
 */

/**
 * @typedef {Object} Client
 * @property {string} initials
 * @property {string} name
 * @property {string} industry
 * @property {string} location
 * @property {Status} status
 * @property {number} totalOrders
 * @property {string} totalRevenue
 * @property {string} lastOrder
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {ClientAddress} [address]
 * @property {ClientContact[]} [contacts]
 * @property {number} [totalBilled]
 * @property {number} [outstandingBalance]
 * @property {string} [createdAt]
 * @property {string} [notes]
 */

/**
 * @typedef {Object} ClientsFilterProps
 * @property {Status[]} [status]
 * @property {string} [search]
 */

/**
 * @typedef {Object} ClientsTableProps
 * @property {Client[]} clients
 * @property {boolean} [loading]
 * @property {Error|null} [error]
 * @property {function(string): void} [onViewClient]
 */