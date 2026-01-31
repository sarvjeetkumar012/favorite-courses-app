import { useState, useEffect } from 'react'
import './App.css'
import CourseCard from './components/CourseCard'
import FilterBar from './components/FilterBar'
import { coursesData } from './data/coursesData'

function App() {
  const [courses] = useState(coursesData)
  const [favorites, setFavorites] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFavorites, setShowFavorites] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteCourses')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteCourses', JSON.stringify(favorites))
  }, [favorites])

  const categories = [...new Set(courses.map(course => course.category))]

  const toggleFavorite = (courseId) => {
    setFavorites(prev => 
      prev.includes(courseId) 
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
  }

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFavorites = !showFavorites || favorites.includes(course.id)
    
    return matchesCategory && matchesSearch && matchesFavorites
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 My Favorite Courses</h1>
        <p>Discover and save your favorite online courses</p>
      </header>

      <main className="app-main">
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showFavorites={showFavorites}
          onToggleShowFavorites={() => setShowFavorites(!showFavorites)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {filteredCourses.length === 0 ? (
          <div className="no-courses">
            <p>No courses found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(course.id)}
              />
            ))}
          </div>
        )}

        {favorites.length > 0 && !showFavorites && (
          <div className="favorites-count">
            ❤️ {favorites.length} course{favorites.length !== 1 ? 's' : ''} in favorites
          </div>
        )}
      </main>
    </div>
  )
}

export default App
