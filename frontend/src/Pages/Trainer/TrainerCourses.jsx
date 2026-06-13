import { useState } from "react";


function TrainerCourses() {

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    duration: "",
    videoLink: "",
  });

  const [pdfFile, setPdfFile] =
    useState(null);

  const handleChange = (e) => {

    setCourseData({
      ...courseData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(courseData);
    console.log(pdfFile);

    alert(
      "Course Created Successfully"
    );

  };

  return (

    <div className="trainer-course-container">

      <div className="course-form-card">

        <h1>Create Course</h1>

        <form
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={courseData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Course Description"
            value={courseData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={courseData.duration}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="videoLink"
            placeholder="YouTube Video Link"
            value={courseData.videoLink}
            onChange={handleChange}
          />

          <label>
            Upload PDF Notes
          </label>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setPdfFile(
                e.target.files[0]
              )
            }
          />

          <button type="submit">
            Create Course
          </button>

        </form>

      </div>

    </div>

  );
}

export default TrainerCourses;