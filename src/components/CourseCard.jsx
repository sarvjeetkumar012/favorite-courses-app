import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onToggleFavorite, isFavorite }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={() => onToggleFavorite(course.id)}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="course-instructor">By {course.instructor}</p>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span className="course-category">{course.category}</span>
          <span className="course-duration">{course.duration}</span>
        </div>
        <div className="course-footer">
          <span className="course-rating">⭐ {course.rating}</span>
          <span className="course-students">{course.students} students</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
