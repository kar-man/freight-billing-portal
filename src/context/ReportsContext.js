import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').ReportsData} ReportsData
 * @typedef {import('../types/context').ReportsContextValue} ReportsContextValue
 */

// Initial state based on mockData
const initialState = {
  reports: mockData.reports,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const reportsReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_REPORTS_DATA:
      return {
        ...state,
        reports: {
          ...state.reports,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const ReportsContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const ReportsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reportsReducer, initialState);

  // Action creators
  const updateReportsData = (data) => {
    dispatch({ type: ActionType.UPDATE_REPORTS_DATA, payload: data });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateReportsData,
  };

  return <ReportsContext.Provider value={value}>{children}</ReportsContext.Provider>;
};

/**
 * @returns {ReportsContextValue}
 */
export const useReportsContext = () => {
  const context = useContext(ReportsContext);
  if (context === undefined) {
    throw new Error('useReportsContext must be used within a ReportsProvider');
  }
  return context;
};