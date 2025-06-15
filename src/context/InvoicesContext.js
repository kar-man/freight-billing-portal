import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').InvoicesData} InvoicesData
 * @typedef {import('../types/context').InvoicesContextValue} InvoicesContextValue
 */

// Initial state based on mockData
const initialState = {
  invoices: mockData.invoices,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const invoicesReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_INVOICES_DATA:
      return {
        ...state,
        invoices: {
          ...state.invoices,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const InvoicesContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const InvoicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(invoicesReducer, initialState);

  // Action creators
  const updateInvoicesData = (data) => {
    dispatch({ type: ActionType.UPDATE_INVOICES_DATA, payload: data });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateInvoicesData,
  };

  return <InvoicesContext.Provider value={value}>{children}</InvoicesContext.Provider>;
};

/**
 * @returns {InvoicesContextValue}
 */
export const useInvoicesContext = () => {
  const context = useContext(InvoicesContext);
  if (context === undefined) {
    throw new Error('useInvoicesContext must be used within an InvoicesProvider');
  }
  return context;
};