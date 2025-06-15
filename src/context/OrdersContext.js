import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').OrdersData} OrdersData
 * @typedef {import('../types/context').OrdersContextValue} OrdersContextValue
 */

// Initial state based on mockData
const initialState = {
  orders: mockData.orders,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const ordersReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_ORDERS_DATA:
      return {
        ...state,
        orders: {
          ...state.orders,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const OrdersContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);

  // Action creators
  const updateOrdersData = (data) => {
    dispatch({ type: ActionType.UPDATE_ORDERS_DATA, payload: data });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateOrdersData,
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
};

/**
 * @returns {OrdersContextValue}
 */
export const useOrdersContext = () => {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrdersContext must be used within an OrdersProvider');
  }
  return context;
};