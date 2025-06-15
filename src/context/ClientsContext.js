import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').ClientsData} ClientsData
 * @typedef {import('../types/context').ClientsContextValue} ClientsContextValue
 */

// Initial state based on mockData
const initialState = {
  clients: mockData.clients,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const clientsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CLIENTS_DATA:
      return {
        ...state,
        clients: {
          ...state.clients,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const ClientsContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const ClientsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clientsReducer, initialState);

  // Action creators
  const updateClientsData = (data) => {
    dispatch({ type: ActionType.UPDATE_CLIENTS_DATA, payload: data });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateClientsData,
  };

  return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>;
};

/**
 * @returns {ClientsContextValue}
 */
export const useClientsContext = () => {
  const context = useContext(ClientsContext);
  if (context === undefined) {
    throw new Error('useClientsContext must be used within a ClientsProvider');
  }
  return context;
};