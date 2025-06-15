import { renderHook, act } from '@testing-library/react-hooks';
import { useDashboardStore } from '../features/dashboard/api/useDashboardStore';
import { useClientsStore } from '../features/clients/api/useClientsStore';
import { useAppStore } from '../store';

// Mock the SWR hooks
jest.mock('../features/dashboard/api/useDashboardData', () => ({
  useDashboardData: () => ({
    data: { stats: [{ title: 'Test Stat', value: '100', change: '+10%' }] },
    error: null,
    isLoading: false,
    refetch: jest.fn()
  })
}));

jest.mock('../features/clients/api/useClientsData', () => ({
  useClientsData: () => ({
    data: { stats: [], allClients: [{ name: 'Test Client' }] },
    error: null,
    isLoading: false,
    refetch: jest.fn()
  })
}));

// Test the integration between Zustand and SWR
describe('Zustand-SWR Integration', () => {
  beforeEach(() => {
    // Reset the Zustand store before each test
    act(() => {
      useAppStore.setState({
        dashboard: null,
        isDashboardLoading: false,
        dashboardError: null,
        clients: null,
        isClientsLoading: false,
        clientsError: null,
        // Reset other state as needed
      });
    });
  });

  test('Dashboard store should update with SWR data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDashboardStore());

    // Wait for the effect to run
    await waitForNextUpdate();

    // Check that the store was updated with the SWR data
    expect(result.current.dashboard).toEqual({ 
      stats: [{ title: 'Test Stat', value: '100', change: '+10%' }] 
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  test('Clients store should update with SWR data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useClientsStore());

    // Wait for the effect to run
    await waitForNextUpdate();

    // Check that the store was updated with the SWR data
    expect(result.current.clients).toEqual({ 
      stats: [], 
      allClients: [{ name: 'Test Client' }] 
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  // Add similar tests for other features
});
