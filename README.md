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
