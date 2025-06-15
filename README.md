# Freight Billing Portal

This is a React dashboard application created to manage freight billing, orders, and clients.

## How to Run This Project

1.  **Clone the Repository**:
    Download or clone this project to your local machine.

2.  **Install Dependencies**:
    Navigate into the project directory in your terminal and run:
    ```bash
    npm install
    ```
    This will install all the required libraries listed in `package.json`.

3.  **Start the Development Server**:
    Once the installation is complete, run the following command:
    ```bash
    npm start
    ```
    This will launch the application, and you can view it in your browser at `http://localhost:3000`.

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

## TypeScript to JavaScript Migration

This project has been fully migrated from TypeScript to JavaScript with JSDoc comments for type safety. The migration was completed in phases, and all functionality now works in JavaScript.

### Migration Process

1. **Preparation and Analysis**
   - Removed TypeScript configuration file (tsconfig.json)
   - Updated package.json to remove TypeScript dependencies

2. **Type Definition Migration**
   - Converted type definitions to JSDoc
     - common.ts → common.js
     - context.ts → context.js
     - orders.ts → orders.js
     - clients.ts → clients.js
     - invoices.ts → invoices.js
     - dashboard.ts → dashboard.js

3. **Component Migration**
   - Updated all components with JSDoc comments
     - UI components (StatusBadge.js, StatCard.js, etc.)
     - Layout components (Header.js, etc.)
     - Feature components (Dashboard, Orders, Invoices, etc.)
   - Removed duplicate TypeScript components

4. **Context Migration**
   - Updated AppContext.js with JSDoc comments
   - Removed AppContext.tsx

5. **API Migration**
   - Converted all API files to JavaScript with JSDoc comments
   - Implemented a generic useApiData hook for consistent data fetching and error handling

6. **File Structure Cleanup**
   - Removed empty directories
   - Removed TypeScript type files that have been converted to JS
   - Removed TypeScript declaration files
   - Updated mockData.js with JSDoc comments
   - Updated tokens.js with JSDoc comments

7. **Storybook Migration**
   - Converted Storybook files to JavaScript

### Type Safety with JSDoc

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
