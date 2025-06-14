import { Status } from './common';

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Invoice {
  id: string;
  client: string;
  status: Status;
  amount: string;
  dueDate: string;
  overdue?: boolean;
  // Original properties (optional for backward compatibility)
  invoiceNumber?: string;
  clientId?: string;
  clientName?: string;
  issueDate?: string;
  totalAmount?: number;
  paidAmount?: number;
  items?: InvoiceItem[];
  notes?: string;
}

export interface InvoicesFilterProps {
  status?: Status[];
  dateRange?: [Date, Date];
  clientId?: string;
  search?: string;
}

export interface InvoicesTableProps {
  invoices: Invoice[];
  loading?: boolean;
  error?: Error | null;
  onViewInvoice?: (invoiceId: string) => void;
}
