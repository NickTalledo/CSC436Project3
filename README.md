# Next JS Todo App
This project aims to provide users with a flexible and user-friendly platform to manage their tasks. With the following features, the app empowers users to efficiently organize their tasks:

## Features
### Lists Creation: 
Users can create multiple lists, each containing various items.
### Item Completion: 
Items within a list can be marked as completed or incomplete.
### Sorting Items:
Users have the flexibility to sort items within their lists as desired.
### Public Lists: 
Publicly accessible lists are rendered using server components.
### Authentication:
Utilizes Supabase for secure authentication and data management.
### User Experience: 
User interface design and creativity are integral parts of the app's development.
## Technology Stack
Framework: 
Developed using Next.js version 13.3.2.
Styling: Styled using Tailwind CSS for an intuitive and responsive design.
Database: Leverages Supabase for authentication and data storage.
## User Experience
### Non-Logged-In Users
#### Registration and Login: 
Users can register and log in from the header.
#### Public Lists Viewing: 
Non-logged-in users can explore publicly available lists.
#### Access Control: 
Redirects to the login page if an unauthorized route is accessed.
### Logged-In Users
#### Logout: 
Users can log out from the header.
#### Personalization: 
User's name is displayed in the header.
#### Lists Management: 
Users can create new lists, view their own lists, and edit them.
#### Real-Time Updates: 
Lists can be edited in real-time without the need for manual saving.
#### Item Interaction: 
Items can be added, reordered, and marked as done seamlessly.
#### Access Control: 
Redirects to the homepage for unauthorized access to certain routes.
## Deployment
The app is deployed on Vercel, ensuring a reliable and accessible user experience.

## Resources
### Routes
/: Displays all available lists grouped by user.

/user/{user_id}: Lists all lists for a specific user.

/list/create: Allows logged-in users to create a new list.

/user/{user_id}/list/{list_id}: Displays the content of a specific list. Redirects to edit mode for the list's owner.

/user/{user_id}/list/{list_id}/edit: Enables editing for a specific list. Unauthorized users are redirected to the homepage.

/login: Provides the login interface.

/register: Offers the user registration process.
