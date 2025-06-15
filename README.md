# Freight Billing Portal

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-Private-yellow.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg?logo=react)
![Status](https://img.shields.io/badge/status-Development-orange.svg)

> A comprehensive web application for managing freight billing, orders, invoices, and client relationships for Janio's finance team.

![Freight Billing Portal Screenshot](https://placeholder.com/screenshot.png)

## Table of Contents

- [Project Overview](#project-overview)
- [Technical Information](#technical-information)
- [Installation & Setup](#installation--setup)
- [Usage Instructions](#usage-instructions)
- [Development Information](#development-information)
- [Configuration & Environment](#configuration--environment)
- [Documentation & Resources](#documentation--resources)
- [Support & Maintenance](#support--maintenance)
- [Legal & Credits](#legal--credits)

## Project Overview

### About the Project

The Freight Billing Portal is an internal web application designed to streamline and automate the freight billing process for Janio's finance team. It provides a centralized platform for managing orders, generating invoices, tracking payments, and maintaining client relationships.

### Key Features

- **Dashboard Analytics**: Real-time overview of billing metrics, outstanding invoices, and payment status
- **Order Management**: Track, filter, and manage freight orders throughout their lifecycle
- **Invoice Generation**: Automated creation and management of invoices based on order data
- **Client Management**: Maintain client information, billing preferences, and relationship history
- **Financial Reporting**: Generate comprehensive reports for financial analysis and decision-making
- **User-friendly Interface**: Intuitive design with smooth transitions and responsive layout

### Target Audience

This application is specifically designed for Janio's finance team to manage freight billing operations efficiently. It serves various roles within the finance department, including:

- Finance managers overseeing billing operations
- Accounting staff processing invoices and payments
- Financial analysts generating reports and insights
- Client relationship managers handling billing inquiries

## Technical Information

### Tech Stack

#### Frontend
- **Framework**: React 18.3.1
- **Routing**: React Router 6.20.0
- **State Management**: Zustand 5.0.5
- **Data Fetching**: SWR 2.3.3, TanStack React Query 5.80.7
- **HTTP Client**: Axios 1.9.0
- **UI/UX**: 
  - TailwindCSS 3.4.17 for styling
  - Framer Motion 11.2.10 for animations
  - Lucide React 0.395.0 for icons
- **Component Documentation**: Storybook 7.6.10

#### Development Tools
- **Build Tool**: Create React App (React Scripts 5.0.1)
- **Code Quality**: 
  - ESLint 8.57.1
  - Prettier 3.5.3
- **Testing**: Jest and React Testing Library

### System Requirements

- **Node.js**: v16.x or higher
- **npm**: v8.x or higher
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Operating System**: Platform-independent (Windows, macOS, Linux)

### Architecture Overview

The application follows a modern React architecture with these key principles:

1. **Feature-based Organization**: Code is organized by business domain features rather than technical concerns
2. **Component-Driven Development**: UI is built from reusable components documented in Storybook
3. **Client-Side Routing**: Single-page application with React Router
4. **State Management**: Zustand for global state with minimal boilerplate
5. **Data Fetching Strategy**: SWR and React Query for efficient data loading with caching

#### State Management with Zustand

We've migrated from React Context to Zustand for global state management. Zustand provides a simpler and more performant way to manage state with less boilerplate.

```javascript
// Example of using the Zustand store
import { useAppStore } from './store';

function MyComponent() {
  // Select only what you need from the store
  const clients = useAppStore((state) => state.clients);
  const fetchClients = useAppStore((state) => state.fetchClients);

  // Use the state and actions
  return (
    <button onClick={fetchClients}>
      Load {clients.length} Clients
    </button>
  );
}
```

#### Data Fetching with SWR

We use SWR (stale-while-revalidate) for data fetching, which provides caching, revalidation, and other features out of the box.

```javascript
// Example of using SWR for data fetching
import useSWR from 'swr';
import { fetcher } from '../api/client';

function useClientsData() {
  const { data, error, isLoading, mutate } = useSWR('/clients', fetcher);

  return {
    clients: data || [],
    isLoading,
    isError: !!error,
    error,
    refreshClients: mutate
  };
}
```

#### Feature-Based Organization

The codebase is organized by features, with each feature containing its own components, API hooks, and utilities:

```
src/
├── features/
│   └── feature-name/
│       ├── components/
│       ├── api/
│       ├── utils/
│       └── index.js
├── store/
├── api/
├── utils/
└── components/
    └── ui/
```

#### Type Safety with JSDoc

Type information is now provided through JSDoc comments. For example:

```javascript
/**
 * @typedef {'Active'|'Inactive'|'Pending'|'In Transit'|'Delivered'|'Paid'|'Outstanding'|'Overdue'|'Cancelled'|'Draft'|'Pricing'|'Operations'} Status
 */

/**
 * @param {Object} props
 * @param {Status} props.status
 * @returns {JSX.Element}
 */
function StatusBadge({ status }) {
  // Implementation
}
```

#### Main Application Pages

- Dashboard: Overview of key metrics and recent activity
- Orders: Management of freight orders and their status
- Invoices: Generation and tracking of client invoices
- Clients: Management of client information and relationships
- Reports: Generation of financial and operational reports

## Installation & Setup

### Prerequisites

Before setting up the project, ensure you have:

- Node.js (v16.x or higher)
- npm (v8.x or higher)
- Git (for cloning the repository)

### Step-by-Step Setup

1. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   cd freight-billing-portal
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_API_URL=https://api.example.com
   REACT_APP_ENV=development
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`

### Common Setup Issues

- **Node Version Mismatch**: If you encounter errors during installation, verify your Node.js version with `node -v`
- **Port Conflicts**: If port 3000 is already in use, the development server will prompt you to use a different port
- **API Connection Issues**: Ensure the API URL in your `.env` file is correct and accessible

## Component Documentation with Storybook

This project uses Storybook for component documentation and development. Storybook provides a way to develop UI components in isolation, which can improve component reuse, testability, and development speed.

### Running Storybook

To start Storybook locally:

```bash
npm run storybook
```

This will start Storybook on port 6006. Open your browser and navigate to http://localhost:6006 to view the component documentation.

### Building Storybook

To build a static version of Storybook:

```bash
npm run build-storybook
```

This will create a static build of Storybook in the `storybook-static` directory, which can be deployed to a static hosting service.

For more information about Storybook and how to add new component stories, see the [Storybook README](.storybook/README.md).

## Usage Instructions

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Access the application at `http://localhost:3000`

### Navigating the Application

- **Dashboard**: View key metrics and recent activity
- **Orders**: Manage freight orders, filter by status, and view details
- **Invoices**: Generate, view, and manage client invoices
- **Clients**: Add, edit, and manage client information
- **Reports**: Generate and export financial reports

### User Roles and Permissions

The application supports different user roles with varying levels of access:

- **Admin**: Full access to all features and settings
- **Finance Manager**: Access to all financial data and reports
- **Billing Specialist**: Focus on invoice generation and management
- **Viewer**: Read-only access to data without edit capabilities

### Test Accounts

For development and testing purposes, use these credentials:

- **Admin**: username: `admin@janio.com`, password: `admin123`
- **Finance Manager**: username: `finance@janio.com`, password: `finance123`
- **Viewer**: username: `viewer@janio.com`, password: `viewer123`

## Development Information

### Project Structure

The codebase follows a feature-based organization:

```
src/
├── features/            # Business domain features
│   ├── dashboard/       # Dashboard feature
│   │   ├── components/  # Dashboard-specific components
│   │   ├── api/         # Data fetching hooks for dashboard
│   │   └── DashboardPage.js
│   ├── orders/          # Orders management feature
│   ├── invoices/        # Invoice management feature
│   ├── clients/         # Client management feature
│   └── reports/         # Reporting feature
├── components/          # Shared components
│   ├── ui/              # UI components (buttons, inputs, etc.)
│   └── layout/          # Layout components (header, sidebar, etc.)
├── store/               # Zustand store definitions
├── api/                 # API client and utilities
├── utils/               # Utility functions and helpers
├── App.js               # Main application component
└── index.js             # Application entry point
```

### Coding Standards

- **JavaScript**: ES6+ features with JSDoc for type documentation
- **Component Structure**: Functional components with hooks
- **State Management**: Zustand for global state, React hooks for local state
- **Styling**: TailwindCSS utility classes with consistent patterns
- **Error Handling**: Error boundaries for graceful failure handling

### Testing

Run tests with:

```bash
npm test
```

The project uses Jest and React Testing Library for:
- Unit tests for utility functions
- Component tests for UI behavior
- Integration tests for feature workflows

### Build and Deployment

1. **Create Production Build**:
   ```bash
   npm run build
   ```

2. **Preview Production Build Locally**:
   ```bash
   npx serve -s build
   ```

3. **Deployment Process**:
   The application is deployed through CI/CD pipeline to internal servers.

## Configuration & Environment

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Base URL for API requests | `https://api.example.com` |
| `REACT_APP_ENV` | Environment name | `development` |
| `REACT_APP_DEBUG` | Enable debug logging | `false` |

### Environment Configurations

The application supports multiple environments:

- **Development**: Local development with hot reloading
- **Staging**: Pre-production environment for testing
- **Production**: Live environment for actual use

## Documentation & Resources

### Component Documentation

The project uses Storybook for component documentation:

1. Start Storybook:
   ```bash
   npm run storybook
   ```

2. Access Storybook at `http://localhost:6006`

### API Documentation

API endpoints are documented in the internal wiki. Key endpoints include:

- `/api/orders` - Order management
- `/api/invoices` - Invoice operations
- `/api/clients` - Client information
- `/api/reports` - Report generation

### Additional Resources

- [Internal Wiki](https://wiki.janio.internal/freight-billing-portal)
- [Design System](https://design.janio.internal)
- [API Documentation](https://api-docs.janio.internal)

## Support & Maintenance

### Known Limitations

- The application currently supports only English language
- Report exports are limited to PDF and Excel formats
- Bulk operations are limited to 100 items at a time

### Troubleshooting

Common issues and solutions:

- **Data Not Loading**: Check network connectivity and API status
- **Slow Performance**: Try clearing browser cache or using Chrome for optimal performance
- **Login Issues**: Ensure your account has the correct permissions

### Support Channels

For assistance, contact:

- **Technical Issues**: IT Support at `it-support@janio.com`
- **Feature Requests**: Product Team at `product@janio.com`
- **Billing Questions**: Finance Team at `finance@janio.com`

### Version History

- **v0.1.0** (Current) - Initial development release
  - Basic functionality for orders, invoices, and clients
  - Dashboard with key metrics
  - User authentication and authorization

## Legal & Credits

### License

This project is proprietary software owned by Janio. All rights reserved.

### Third-Party Libraries

This project makes use of several open-source libraries, including but not limited to:

- React (MIT License)
- React Router (MIT License)
- Zustand (MIT License)
- SWR (MIT License)
- TailwindCSS (MIT License)
- Framer Motion (MIT License)

Full attribution and licenses are available in the `LICENSE-3RD-PARTY.md` file.

### Contributors

- Janio Development Team
- Janio Finance Department (Requirements and Testing)

---

© 2023-2024 Janio. All Rights Reserved.
