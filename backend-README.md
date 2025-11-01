# MediCarePlus Backend Logic (Firebase & Twilio)

This document outlines the required backend architecture for the MediCarePlus application. The backend will be responsible for storing medication schedules, checking for due reminders, and sending SMS notifications.

## 1. Tech Stack

- **Database**: Google Firestore
- **Serverless Functions**: Google Cloud Functions
- **Notifications**: Twilio SMS API

## 2. Firestore Data Structure

We will use a main collection named `schedules` to store all medication reminders. Each document in this collection represents a single reminder for a user.

### `schedules` collection

- **Document ID**: Auto-generated
- **Fields**:
  - `userId` (string): The unique ID of the user (from Firebase Authentication).
  - `medicineName` (string): e.g., "Lisinopril"
  - `dosage` (string): e.g., "1 tablet"
  - `frequency` (string): "Daily", "Twice a Day", or "Weekly"
  - `phoneNumber` (string): The phone number to send the SMS to.
  - `reminderTime` (timestamp): The Firestore timestamp for the **next** scheduled reminder. This field is critical and will be updated after each notification.
  - `timezone` (string): The user's timezone (e.g., "America/New_York") to handle time correctly.

## 3. Cloud Functions

### Function 1: Scheduled Cron Job (`checkSchedules`)

This function is the core of the reminder system. It needs to run frequently to ensure timely notifications.

- **Trigger**: Pub/Sub topic triggered by Cloud Scheduler.
- **Schedule**: **Every minute** (`* * * * *`).
- **Logic**:
  1. Get the current time (`now`).
  2. Query the `schedules` collection for all documents where `reminderTime` is less than or equal to `now`.
  3. For each due reminder found, trigger the `sendNotification` function, passing the reminder's document data.

### Function 2: Notification Sender (`sendNotification`)

This function handles the SMS sending and updates the schedule for the next reminder.

- **Trigger**: Can be triggered by `checkSchedules` (e.g., via a direct call or another Pub/Sub topic).
- **Logic**:
  1. Receive the reminder document data as an argument.
  2. **Initialize Twilio Client**: Use your Account SID, Auth Token, and Twilio phone number from environment variables.
  3. **Send SMS**: Construct a message (e.g., "Hi! It's time to take your {medicineName} ({dosage}).") and send it to the `phoneNumber` from the reminder data.
  4. **Calculate Next Reminder Time**:
     - Based on the `frequency` field, calculate the timestamp for the next alert.
     - If `frequency` is "Daily", add 24 hours to the current `reminderTime`.
     - If `frequency` is "Twice a Day", add 12 hours.
     - If `frequency` is "Weekly", add 7 days.
  5. **Update Firestore**: Update the reminder document in the `schedules` collection, setting the `reminderTime` field to the newly calculated next reminder time. This is crucial to prevent sending duplicate notifications and to schedule the next one correctly.
  6. Handle any errors from Twilio or Firestore gracefully.
