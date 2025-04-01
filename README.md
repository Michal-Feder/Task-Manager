# React Task Manager

A modern React application for task management with category filtering, light/dark mode, and persistent storage.

## ✨ Features

- Task creation, editing, and deletion
- Category-based organization with visual cues
- Task filtering by category
- Mark tasks as complete/incomplete
- Separate views for in-progress and completed tasks
- Light and dark theme modes
- Responsive design for mobile and desktop
- Persistent storage via Redux and localStorage

## 🛠️ Tech Stack

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Redux Persist for data persistence
- CSS Modules for styling
- UUID for unique identifiers

## 📂 Project Structure

```
react-task-manager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CategorySelect.jsx
│   │   ├── CategorySelect.module.css
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Icon.jsx
│   │   ├── Icon.module.css
│   │   ├── InputField.jsx
│   │   ├── InputField.module.css
│   │   ├── TaskForm.jsx
│   │   ├── TaskForm.module.css
│   │   ├── TaskItem.jsx
│   │   ├── TaskItem.module.css
│   │   └── TaskList.jsx
│   │   └── TaskList.module.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.module.css
│   │   └── TaskManagementPage.jsx
│   │   └── TaskManagementPage.module.css
│   ├── redux/
│   │   ├── store.js
│   │   ├── taskSlice.js
│   │   └── themeSlice.js
│   ├── utils/
│   │   ├── analytics.js
│   │   └── iconConfig.js
│   ├── App.css
│   ├── App.js
│   └── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Michal-Feder/Task-Manager
   cd Task-Manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To build the app for production:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📝 Usage

1. **Creating a Task**:
   - Click the "New Task" button
   - Select a category
   - Enter a task title
   - Click "Save new task"

2. **Editing a Task**:
   - Click the edit icon on any task
   - Update the task details
   - Click "Save changes"

3. **Completing a Task**:
   - Check the checkbox next to a task to mark it as complete
   - The task will move to the "Completed" section

4. **Filtering Tasks**:
   - Use the filter dropdown to filter tasks by category
   - You can select multiple categories for filtering

5. **Changing Theme**:
   - Click the sun/moon icon in the header to toggle between light and dark mode

## 🔄 State Management

The application uses Redux Toolkit for state management:
- `taskSlice.js`: Manages task data and operations
- `themeSlice.js`: Manages theme preferences
- Redux Persist is used to save state to localStorage

## 📱 Responsive Design

The application is designed to work on both desktop and mobile devices:
- Swipe gestures for task actions on mobile
- Hover effects for task actions on desktop
- Responsive layouts that adapt to screen size

