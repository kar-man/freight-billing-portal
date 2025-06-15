import React, { createContext, useContext, useReducer } from 'react';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').UserPreferences} UserPreferences
 * @typedef {import('../types/context').UserPreferencesContextValue} UserPreferencesContextValue
 */

// Initial state for user preferences
const initialState = {
  userPreferences: {
    showWelcomeMessage: true,
    dashboardLayout: 'default',
  },
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const userPreferencesReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const UserPreferencesContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const UserPreferencesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userPreferencesReducer, initialState);

  // Action creators
  const updateUserPreferences = (preferences) => {
    dispatch({
      type: ActionType.UPDATE_USER_PREFERENCES,
      payload: preferences,
    });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateUserPreferences,
  };

  return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
};

/**
 * @returns {UserPreferencesContextValue}
 */
export const useUserPreferencesContext = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferencesContext must be used within a UserPreferencesProvider');
  }
  return context;
};