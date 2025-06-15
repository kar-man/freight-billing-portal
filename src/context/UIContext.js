import React, { createContext, useContext, useReducer } from 'react';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').Notification} Notification
 * @typedef {import('../types/context').UIContextValue} UIContextValue
 */

// Initial state for UI
const initialState = {
  theme: 'light',
  notifications: [],
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
const uiReducer = (state, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case ActionType.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case ActionType.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Create context
const UIContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // Action creators
  const toggleTheme = () => {
    dispatch({ type: ActionType.TOGGLE_THEME });
  };

  const addNotification = (notification) => {
    const id = Date.now().toString();
    dispatch({
      type: ActionType.ADD_NOTIFICATION,
      payload: { id, ...notification },
    });
    return id;
  };

  const removeNotification = (id) => {
    dispatch({ type: ActionType.REMOVE_NOTIFICATION, payload: id });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    toggleTheme,
    addNotification,
    removeNotification,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

/**
 * @returns {UIContextValue}
 */
export const useUIContext = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUIContext must be used within a UIProvider');
  }
  return context;
};