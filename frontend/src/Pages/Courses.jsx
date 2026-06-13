import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlayCircle,
  FaBook,
  FaClock,
  FaCertificate,
  FaTrash,
} from "react-icons/fa";

function Courses() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "MERN Stack Development",
      trainer: "John Smith",
      progress: 75,
      lessons: 42,
      duration: "12 Weeks",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      id: 2,
      title: "Java Full Stack",
      trainer: "David Wilson",
      progress: 100,
      lessons: 38,
      duration: "10 Weeks",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      trainer: "Michael Scott",
      progress: 65,
      lessons: 30,
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      trainer: "Robert James",
      progress: 45,
      lessons: 25,
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
  ]);

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const filteredCourses = courses.filter((course) => {
    const searchValue = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !searchValue ||
      course.title.toLowerCase().includes(searchValue) ||
      course.trainer.toLowerCase().includes(searchValue);

    const matchesCategory =
      category === "All Categories" ||
      (category === "Web Development" &&
        course.title.toLowerCase().includes("mern")) ||
      (category === "Programming" &&
        ["java", "data structures", "algorithms"].some((term) =>
          course.title.toLowerCase().includes(term)
        )) ||
      (category === "Cloud Computing" &&
        course.title.toLowerCase().includes("cloud"));

    return matchesSearch && matchesCategory;
  });

  const resumeCourse = courses.find(
    (course) => course.progress > 0 && course.progress < 100
  );

  return (
    <div className="courses-page">

      {/* Header */}
      <div className="course-header">
        <div>
          <h1>My Courses</h1>
          <br />
          <p>Continue learning and track your progress.</p>
        </div>

        <button className="browse-btn">
          Browse Courses
        </button>
      </div>

      {/* Resume Learning */}
      {resumeCourse && (
        <div className="resume-card">
          <h2>Resume Learning</h2>

          <h3>{resumeCourse.title}</h3>

          <p>
            Progress: {resumeCourse.progress}%
          </p>

          <button
            className="resume-main-btn"
            onClick={() =>
              navigate(`/course/${resumeCourse.id}`)
            }
          >
            Resume Course
          </button>
        </div>
      )}

      {/* Search Section */}
      <div className="search-section">

        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All Categories</option>
          <option>Web Development</option>
          <option>Programming</option>
          <option>Cloud Computing</option>
        </select>

        <button
          type="button"
          className="search-btn"
          onClick={() =>
            setSearchQuery(searchTerm.trim())
          }
        >
          Search
        </button>

      </div>

      {/* Courses Grid */}
      <div className="courses-grid">

        {filteredCourses.map((course) => (

          <div
            className="course-card"
            key={course.id}
          >

            <img
              src={course.image}
              alt={course.title}
            />

            <div className="course-content">

              <h3>{course.title}</h3>

              <p className="trainer">
                Trainer: {course.trainer}
              </p>

              <div className="course-info">

                <span>
                  <FaBook />
                  {" "}
                  {course.lessons} Lessons
                </span>

                <span>
                  <FaClock />
                  {" "}
                  {course.duration}
                </span>

              </div>

              <div className="progress-top">
                <span>Progress</span>
                <span>
                  {course.progress}%
                </span>
              </div>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${course.progress}%`,
                  }}
                ></div>
              </div>

              <div className="course-actions">

                <button
                  className="continue-btn"
                  onClick={() =>
                    navigate(`/course/${course.id}`)
                  }
                >
                  <FaPlayCircle />
                  Continue
                </button>

                <button
                  className="resume-btn"
                  onClick={() =>
                    navigate(`/course/${course.id}`)
                  }
                >
                  Resume
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteCourse(course.id)
                  }
                >
                  <FaTrash />
                  Delete
                </button>

                {course.progress === 100 && (
                  <button
                    className="certificate-btn"
                    onClick={() =>
                      navigate("/certificates")
                    }
                  >
                    <FaCertificate />
                    Certificate
                  </button>
                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;