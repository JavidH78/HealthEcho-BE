# Backend Tasks for Frontend Home Page Implementation

This document outlines the necessary backend API endpoints and modifications required to support the features planned for the new frontend Home Page.

## General Requirements

*   **Authentication:** All new endpoints listed below must be secured and require the user to be authenticated. Ensure appropriate authorization checks are in place (e.g., users can only access their own data).

## 1. User Data Endpoint

*   **Requirement:** An endpoint to retrieve basic details (at least `userId` and `name`) for the currently authenticated user. This is needed for the personalized welcome message on the home page.
*   **Suggestion:**
    *   `GET /api/me` or `GET /api/users/me`
    *   **Response Body:**
        ```json
        {
          "userId": 123,
          "name": "User Name",
          "email": "user@example.com" 
          // Include other relevant non-sensitive details if needed
        }
        ```
    *   Consider if the existing `UserController` can be adapted or if a dedicated endpoint is better.

## 2. Health Log Endpoints

*   **Requirement:** Endpoints to fetch recent health logs and create new health logs for the authenticated user.
*   **Suggestions:**
    *   **Fetch Recent Logs:**
        *   `GET /api/me/health-logs?limit=5&sort=logDate,desc` (or similar query parameters for fetching the latest few logs)
        *   **Response Body:** An array of `HealthLogs` objects (matching the `HealthLogs.java` model, potentially excluding the full `User` object if redundant).
        ```json
        [
          {
            "logId": 1,
            "logDate": "2025-04-06",
            "symptom": "Headache",
            "medication": "Painkiller",
            "exercise": null,
            "diet": "Normal",
            "vitalSigns": "{\"temperature\": 98.6}", 
            "createdAt": "...",
            "updatedAt": "..."
          },
          // ... more logs
        ]
        ```
    *   **Create New Log:**
        *   `POST /api/me/health-logs`
        *   **Request Body:** A JSON object representing the new log entry. The backend should associate it with the authenticated user.
        ```json
        {
          "logDate": "2025-04-07", // Or default to current date on backend
          "symptom": "Sore throat",
          "medication": null,
          "exercise": "Light walk",
          "diet": null,
          "vitalSigns": null 
        }
        ```
        *   **Response:** The created `HealthLogs` object or a success status (e.g., 201 Created).

## 3. Reminder Endpoints

*   **Requirement:** An endpoint to fetch upcoming reminders for the authenticated user.
*   **Suggestion:**
    *   **Fetch Upcoming Reminders:**
        *   `GET /api/me/reminders?status=upcoming&limit=5&sort=reminderDate,asc` (or similar query parameters to get near-future reminders)
        *   **Response Body:** An array of `Reminder` objects.
        ```json
        [
          {
            "reminderId": 1,
            "reminderDate": "2025-04-07T09:00:00",
            "message": "Take morning medication",
            "createdAt": "..."
          },
          // ... more reminders
        ]
        ```
    *   *(Note: Endpoints for creating/managing reminders might be needed later but are not strictly required for the initial home page display).*

Please review these requirements and ensure the backend team implements them accordingly.
