/**
 * @typedef {Object} DashboardData
 * @property {Array<import('./dashboard').StatCardProps>} stats
 * @property {Object} actionableOrders
 * @property {string} actionableOrders.currentMonth
 * @property {Object} actionableOrders.missingBillingAmount
 * @property {number} actionableOrders.missingBillingAmount.count
 * @property {string} actionableOrders.missingBillingAmount.value
 * @property {string} actionableOrders.missingBillingAmount.description
 * @property {Object.<string, {count: number, value: string}>} actionableOrders.missingBillingAmount.byMonth
 * @property {Object} actionableOrders.missingSupportingDocs
 * @property {number} actionableOrders.missingSupportingDocs.count
 * @property {string} actionableOrders.missingSupportingDocs.value
 * @property {string} actionableOrders.missingSupportingDocs.description
 * @property {Object.<string, {count: number, value: string}>} actionableOrders.missingSupportingDocs.byMonth
 * @property {Object} actionableOrders.missingPOD
 * @property {number} actionableOrders.missingPOD.count
 * @property {string} actionableOrders.missingPOD.value
 * @property {string} actionableOrders.missingPOD.description
 * @property {Object.<string, {count: number, value: string}>} actionableOrders.missingPOD.byMonth
 * @property {Object} billingStatus
 * @property {string} billingStatus.currentMonth
 * @property {Object} billingStatus.readyToBill
 * @property {number} billingStatus.readyToBill.count
 * @property {string} billingStatus.readyToBill.value
 * @property {string} billingStatus.readyToBill.description
 * @property {Object.<string, {count: number, value: string}>} billingStatus.readyToBill.byMonth
 * @property {Object} billingStatus.draftInvoices
 * @property {number} billingStatus.draftInvoices.count
 * @property {string} billingStatus.draftInvoices.value
 * @property {string} billingStatus.draftInvoices.description
 * @property {Object.<string, {count: number, value: string}>} billingStatus.draftInvoices.byMonth
 * @property {Object} billingStatus.disputedInvoices
 * @property {number} billingStatus.disputedInvoices.count
 * @property {string} billingStatus.disputedInvoices.value
 * @property {string} billingStatus.disputedInvoices.description
 * @property {Object.<string, {count: number, value: string}>} billingStatus.disputedInvoices.byMonth
 * @property {Array<{id: number, type: string, description: string, timestamp: string, icon: string, iconColor: string}>} liveFeed
 * @property {Array<{id: string, client: string, status: string, amount: string, date: string}>} recentOrders
 * @property {Array<{month: string, revenue: number}>} [revenueByMonth]
 */

/**
 * @typedef {Object} ReportsData
 * @property {any} [key]
 */

/**
 * @typedef {Object} Notification
 * @property {string} id
 * @property {string} message
 * @property {'info'|'success'|'warning'|'error'} type
 * @property {number} [timestamp]
 */

/**
 * @typedef {Object} UserPreferences
 * @property {boolean} showWelcomeMessage
 * @property {string} dashboardLayout
 */

/**
 * @typedef {Object} OrdersData
 * @property {Array<import('./dashboard').StatCardProps>} stats
 * @property {Array<import('./orders').Order>} allOrders
 * @property {Array<import('./orders').Order>} [list]
 */

/**
 * @typedef {Object} InvoicesData
 * @property {Array<import('./dashboard').StatCardProps>} stats
 * @property {Array<import('./invoices').Invoice>} allInvoices
 * @property {Array<import('./invoices').Invoice>} [list]
 */

/**
 * @typedef {Object} ClientsData
 * @property {Array<import('./dashboard').StatCardProps>} stats
 * @property {Array<import('./clients').Client>} allClients
 * @property {Array<import('./clients').Client>} [list]
 */

/**
 * @typedef {Object} AppState
 * @property {DashboardData} dashboard
 * @property {OrdersData} orders
 * @property {InvoicesData} invoices
 * @property {ClientsData} clients
 * @property {ReportsData} reports
 * @property {'light'|'dark'} theme
 * @property {Array<Notification>} notifications
 * @property {UserPreferences} userPreferences
 */

/**
 * @typedef {Object} AppContextValue
 * @property {AppState} state
 * @property {function(Object): void} updateDashboardData
 * @property {function(Object): void} updateOrdersData
 * @property {function(Object): void} updateInvoicesData
 * @property {function(Object): void} updateClientsData
 * @property {function(Object): void} updateReportsData
 * @property {function(): void} toggleTheme
 * @property {function(Object): string} addNotification
 * @property {function(string): void} removeNotification
 * @property {function(Object): void} updateUserPreferences
 */

/**
 * @enum {string}
 */
export const ActionType = {
  UPDATE_DASHBOARD_DATA: 'UPDATE_DASHBOARD_DATA',
  UPDATE_ORDERS_DATA: 'UPDATE_ORDERS_DATA',
  UPDATE_INVOICES_DATA: 'UPDATE_INVOICES_DATA',
  UPDATE_CLIENTS_DATA: 'UPDATE_CLIENTS_DATA',
  UPDATE_REPORTS_DATA: 'UPDATE_REPORTS_DATA',
  TOGGLE_THEME: 'TOGGLE_THEME',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  UPDATE_USER_PREFERENCES: 'UPDATE_USER_PREFERENCES',
};