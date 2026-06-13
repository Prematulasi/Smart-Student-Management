import { useState } from "react";

function TrainerAssessments() {

  const [showForm, setShowForm] =
    useState(false);

  const [selectedAssessment,
    setSelectedAssessment] =
    useState(null);

  const [assessmentData,
    setAssessmentData] =
    useState({
      title: "",
      course: "",
      description: "",
      marks: "",
      dueDate: "",
    });

  const assessments = [
    {
      id: 1,
      title: "React Fundamentals",
      course: "MERN Stack",
      marks: 50,
      description:
        "Build React Components",
      dueDate: "2026-06-30",
    },
    {
      id: 2,
      title: "Java Basics",
      course: "Java Full Stack",
      marks: 40,
      description:
        "Java OOP Concepts",
      dueDate: "2026-07-05",
    },
  ];

  const handleChange = (e) => {

    setAssessmentData({
      ...assessmentData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Assessment Created Successfully"
    );

    console.log(
      assessmentData
    );

    setShowForm(false);

  };

  return (
    <div className="assessment-container">

      <div className="assessment-header">

        <h1>Assessments</h1>

        <button
          className="create-btn"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          {showForm
            ? "Close Form"
            : "Create Assessment"}
        </button>

      </div>

      {showForm && (

        <div className="create-assessment-card">

          <h2>
            Create Assessment
          </h2>

          <form
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="title"
              placeholder="Assessment Title"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="course"
              placeholder="Course Name"
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="marks"
              placeholder="Total Marks"
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
            >
              Save Assessment
            </button>

          </form>

        </div>

      )}

      <div className="assessment-grid">

        {assessments.map(
          (assessment) => (

          <div
            className="assessment-card"
            key={assessment.id}
          >

            <h3>
              {assessment.title}
            </h3>

            <p>
              Course:
              {assessment.course}
            </p>

            <p>
              Marks:
              {assessment.marks}
            </p>

            <button
              className="view-btn"
              onClick={() =>
                setSelectedAssessment(
                  assessment
                )
              }
            >
              View Details
            </button>

          </div>

        ))}

      </div>

      {selectedAssessment && (

        <div className="details-card">

          <h2>
            Assessment Details
          </h2>

          <h3>
            {
              selectedAssessment.title
            }
          </h3>

          <p>
            Course:
            {
              selectedAssessment.course
            }
          </p>

          <p>
            Marks:
            {
              selectedAssessment.marks
            }
          </p>

          <p>
            Due Date:
            {
              selectedAssessment.dueDate
            }
          </p>

          <p>
            Description:
            {
              selectedAssessment.description
            }
          </p>

          <button
            onClick={() =>
              setSelectedAssessment(
                null
              )
            }
          >
            Close
          </button>

        </div>

      )}

    </div>
  );
}

export default TrainerAssessments;