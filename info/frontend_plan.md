# Frontend Development Plan

## Project Setup

```bash
npx create-react-app health-echo-frontend --template typescript
cd health-echo-frontend
npm install @reduxjs/toolkit react-redux react-router-dom axios @mui/material @emotion/react @emotion/styled chart.js
```

## Component Architecture

```mermaid
flowchart TD
    App --> Router
    Router --> Layout
    Layout --> Header[Header (Navigation)]
    Layout --> Main[Main Content]
    Main -->|Authenticated| Dashboard
    Main -->|Public| Auth[Auth Pages]
    Dashboard --> Profile[User Profile]
    Dashboard --> Health[Health Tracker]
    Dashboard --> Reminders[Medication Reminders]
```

## API Integration Strategy

1.  Axios Instance Configuration:

```typescript
// src/api/client.ts
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});
```

2.  Redux Store Setup:

```typescript
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
```

## Development Timeline

| Week | Milestone                      | Key Deliverables                                                                                                                               |
| ---- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Core Setup & Auth Flow         | - React app scaffolding<br>- Login/Register UI<br>- Redux auth state                                                                        |
| 2    | User Profile & Health Tracking | - Profile management<br>- Health data visualization<br>- API integration                                                                     |
| 3    | Testing & Polish              | - Unit tests<br>- Responsive design<br>- Error handling                                                                                       |

## Required Backend APIs

1.  POST /api/auth/login
2.  POST /api/auth/register
3.  GET /api/users/me
4.  POST /api/health-logs
