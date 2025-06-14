import { Status } from './common';

export interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  client: string;
  status: Status;
  amount: string;
  date: string;
  // Original properties (optional for backward compatibility)
  orderNumber?: string;
  clientId?: string;
  clientName?: string;
  dueDate?: string;
  totalAmount?: number;
  items?: OrderItem[];
  notes?: string;
}

export interface OrdersFilterProps {
  status?: Status[];
  dateRange?: [Date, Date];
  clientId?: string;
  search?: string;
}

export interface OrdersTableProps {
  orders: Order[];
  loading?: boolean;
  error?: Error | null;
  onViewOrder?: (orderId: string) => void;
}
