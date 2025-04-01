# React Task Manager

A modern React application for task management with category filtering, light/dark mode, and persistent storage.

## 📷 Screenshots

![Light Mode](https://via.placeholder.com/800x450?text=Task+Manager+Light+Mode)
![Dark Mode](https://via.placeholder.com/800x450?text=Task+Manager+Dark+Mode)

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
│   │   ├── Header.jsx
│   │   ├── Icon.jsx
│   │   ├── InputField.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── TaskManagementPage.jsx
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
   git clone https://github.com/yourusername/react-task-manager.git
   cd react-task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the `iconConfig.js` file in the `src/utils` directory with the following content:
   ```javascript
   import { 
     Home, Edit, Trash, Sun, Moon, Plus, ArrowLeft, 
     X as Close, Tag, ShoppingCart, Briefcase, 
     BookOpen, Coffee, Camera, Music, Code, 
     Palette, Heart, Globe
   } from 'react-feather';

   // Define available category icons
   export const ICONS = {
     'Home': Home,
     'Edit': Edit,
     'Trash': Trash,
     'Sun': Sun,
     'Moon': Moon,
     'Plus': Plus,
     'Back': ArrowLeft,
     'Close': Close,
     'Logo': Tag,
     'Shopping': ShoppingCart,
     'Work': Briefcase,
     'Study': BookOpen,
     'Break': Coffee,
     'Photography': Camera,
     'Music': Music,
     'Coding': Code,
     'Art': Palette,
     'Personal': Heart,
     'Travel': Globe
   };

   // Categories available for tasks
   export const CATEGORIES = [
     'Shopping', 
     'Work', 
     'Study', 
     'Break', 
     'Photography', 
     'Music', 
     'Coding', 
     'Art', 
     'Personal', 
     'Travel'
   ];
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

## 🧩 Adding New Categories

To add new categories to the application:

1. Update the `CATEGORIES` array in `src/utils/iconConfig.js`
2. Add the corresponding icon import and entry in the `ICONS` object
3. Add the CSS variable for the category color in `App.css`:
   ```css
   :root {
     --Shopping: #FF6B6B;
     --Work: #4ECDC4;
     /* Add your new category color here */
     --Your-Category: #HEX_COLOR;
   }
   ```

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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
