# Policy Management Dashboard Frontend

A React + TypeScript frontend for managing insurance policies, built to integrate with the Laravel-based Policy Management API.

## Project Overview

This application provides a clean interface to:

* View all policies
* Create new policies
* Edit existing policies
* Delete policies

It fetches data from the backend API and renders a responsive dashboard to help manage policy records efficiently.

This project was created as part of a full-stack learning experience targeting:

* React + Vite
* TypeScript
* API integration
* Clean project structure and modular components

## Features

* Fetch and display policies in a table
* Create new policies via a form
* Edit existing policies with inline forms
* Delete policies
* Basic error handling and loading indicators
* Clean component-based architecture

## Tech Stack

* React 19
* TypeScript
* Vite
* Fetch API for HTTP requests
* Plain CSS styling (Tailwind optional)

## Project Structure

```
policy-dashboard-frontend/
├── public/             # Static assets
├── src/
│   ├── api/            # API request helpers (fetchPolicies, createPolicy, etc.)
│   ├── components/     # React components
│   │   ├── PolicyList.tsx
│   │   └── EditPolicyForm.tsx
│   ├── App.tsx         # App entry component
│   ├── main.tsx        # Vite entry point
│   └── index.css       # Global styles
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Configure the API base URL

If needed, adjust the base URL in `src/api/policies.ts`:

```
const BASE_URL = "http://127.0.0.1:8000/api/policies";
```

Make sure your Laravel API is running on this address.

### 3. Run the app in development

```
npm run dev
```

This will start Vite's dev server:

Local: [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```
npm run build
```

## Components

### PolicyList.tsx

Displays the list of policies with Edit and Delete actions.

### EditPolicyForm.tsx

Inline form to edit policy data.

## API Endpoints

This frontend expects the following Laravel API endpoints:

| Method | Endpoint           | Purpose          |
| ------ | ------------------ | ---------------- |
| GET    | /api/policies      | List policies    |
| POST   | /api/policies      | Create policy    |
| GET    | /api/policies/{id} | Get policy by ID |
| PUT    | /api/policies/{id} | Update policy    |
| DELETE | /api/policies/{id} | Delete policy    |

## Notes

* You can customize styling in `index.css` or integrate Tailwind CSS.
* The project structure is intentionally simple for learning and demonstration.

## Acknowledgements

This project is part of a full-stack practice combining:

* Laravel API development
* React TypeScript dashboard
* RESTful CRUD operations
