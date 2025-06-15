import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').DashboardData} DashboardData
 * @typedef {import('../types/context').DashboardContextValue} DashboardContextValue
 */

// Initial state based on mockData
const initialState = {
  dashboard: mockData.dashboard,
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const DashboardContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  // Action creators
  const updateDashboardData = (data) => {
    dispatch({ type: ActionType.UPDATE_DASHBOARD_DATA, payload: data });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateDashboardData,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

/**
 * @returns {DashboardContextValue}
 */
export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider');
  }
  return context;
};