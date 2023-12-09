# Yachter Application

| Contents
|---
| [Client Side](#client-side)
| - [User Roles](#user-roles)
|   - [Guest part](#guest-part)
|   - [Member part](#member-part)
|   - [Yacht owner part](#yacht-owner-part)
| [Server Side](#server)
| - [Mock Data](#mock-data)
| - [Detailed Information](#detailed-information)

## Client Side

Yachter Application is a React application, designed to provide a user-friendly and immersive experience for individuals interested in exploring, booking, and interacting with yachts. Divided into distinct sections catering to different user roles, the client-side seamlessly combines functionality and aesthetics.

### User Roles

#### 1. Guest Users

- **Access:**
  - Publicly accessible section for users who have not logged in.
- **Features:**
  - View a selection of yachts.
  - Explore yacht categories.
  - Access general information about each yacht.

#### 2. Authenticated Members

- **Access:**
  - Requires user authentication.
- **Features:**
  - Mark yachts as favorites.
  - View a personalized list of favorite yachts.
  - Create and delete reservations.

#### 3. Yacht Owners

- **Access:**
  - Requires user authentication.
- **Features:**
  - Add, edit, update, and delete yachts from their fleet.
  - Change statuses of reservations - confirm or decline.

## Server Side

The server is included in the repository and it needs to run during the usage of the application. To start the server use following command:
```
node server.js
```

### Mock Data

The server service that the Yachter Application is using is called [COLLECTIONS](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/COLLECTIONS.md).

The mock data includes:
- **Users:**
  - The registered users in the application.
- **Yachts:**
  - Created yachts by yacht owners.
- **Reservations:**
  - Created reservations by the members.
- **Likes:**
  - Members likes.

### Detailed Information

Detailed information on how the server works can be found [HERE](https://github.com/softuni-practice-server/softuni-practice-server/tree/master).




