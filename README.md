# 📚 Favorite Courses Web App

A modern React web application for discovering and managing your favorite online courses. Built with React and Vite.

## Features

- **Course Catalog**: Browse a curated collection of online courses across multiple categories
- **Favorites System**: Save your favorite courses with persistent storage (localStorage)
- **Smart Filtering**: Filter courses by category with real-time updates
- **Search Functionality**: Search courses by title, instructor, or description
- **Responsive Design**: Beautiful, mobile-friendly UI that works on all devices
- **Course Details**: View comprehensive information including ratings, duration, and student count

## Tech Stack

- **React**: Frontend framework
- **Vite**: Build tool for fast development
- **CSS3**: Modern styling with gradients and animations
- **localStorage**: Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "d:\PROJECTS\MY PROJECTS(MERN)\favrote courses"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── CourseCard.jsx       # Individual course card component
│   ├── CourseCard.css       # Course card styles
│   ├── FilterBar.jsx        # Filter and search component
│   └── FilterBar.css        # Filter bar styles
├── data/
│   └── coursesData.js       # Course data
├── App.jsx                  # Main application component
├── App.css                  # App styles
├── index.css                # Global styles
└── main.jsx                 # Application entry point
```

## Usage

1. **Browse Courses**: Scroll through the available courses
2. **Filter by Category**: Click on category buttons to filter courses
3. **Search**: Use the search bar to find specific courses
4. **Add to Favorites**: Click the heart icon on any course card
5. **View Favorites**: Toggle "Show Favorites" to see only your saved courses

## Customization

### Adding New Courses

Edit `src/data/coursesData.js` and add new course objects with the following structure:

```javascript
{
  id: unique_number,
  title: "Course Title",
  instructor: "Instructor Name",
  description: "Course description",
  category: "Category Name",
  duration: "XX hours",
  rating: 4.5,
  students: "X,XXX",
  image: "image_url"
}
```

### Modifying Styles

- Main app styles: `src/App.css`
- Course card styles: `src/components/CourseCard.css`
- Filter bar styles: `src/components/FilterBar.css`
- Global styles: `src/index.css`

## License

This project is open source and available for educational purposes.

## Future Enhancements

- Backend integration with MongoDB
- User authentication
- Course reviews and ratings
- Progress tracking
- Course recommendations

