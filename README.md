# calorie-counter

Implemented using **ReactJS** and **NestJS** with **Sqlite**.

## Functionalities
### 1. Users should be able to manage food entries
- A user should be able to add a new food entry
- Food entry should contain the following information:
  - Date/time when the food was taken
  - Food/product name (i.e. Milk, banana, hamburger)
  - Calorie value (numeric value)
  - Price of the food
- The first screen a user should see is the list of existing food entries
- User should be able to filter those entries by entry date (date from / date to)
- Please place filtering fields on a screen with a list of previously added food entries
### 2. Calorie limit warning per day
- The daily threshold limit of calories should be 2.100.
  - Ensure the users can see for which day they reached that limit. Also, ensure it is easy to change that limit in the code, per user. You don’t have to create an interface for this purpose.

### 3. Budget Warning
- If a user has spent more than $1.000 per month, please show a warning message to the user saying they reached the monthly limit. Display it the same way the calorie limit warning is displayed

### 4. Admin role with a simple reporting
- Implement an admin role
- Admin can see a screen with all added food entries of all users and manage existing food entries (read, update, create, delete)
- Admin should also see the report screen with the following information
  - Number of added entries in the last 7 days vs. added entries the week before that. Please Include the current day in those stats
  - The average number of calories added per user for the last 7 days
  - A regular user should not be able to access this reporting screen or access its data

### 5. User authentication/authorization
- Token authentication method using *JWT*.
