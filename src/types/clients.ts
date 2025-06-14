import { Status } from './common';

export interface ClientContact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  isPrimary?: boolean;
}

export interface ClientAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Client {
  initials: string;
  name: string;
  industry: string;
  location: string;
  status: Status;
  totalOrders: number;
  totalRevenue: string;
  lastOrder: string;
  // Original properties (optional for backward compatibility)
  id?: string;
  email?: string;
  phone?: string;
  address?: ClientAddress;
  contacts?: ClientContact[];
  totalBilled?: number;
  outstandingBalance?: number;
  createdAt?: string;
  notes?: string;
}

export interface ClientsFilterProps {
  status?: Status[];
  search?: string;
}

export interface ClientsTableProps {
  clients: Client[];
  loading?: boolean;
  error?: Error | null;
  onViewClient?: (clientId: string) => void;
}
