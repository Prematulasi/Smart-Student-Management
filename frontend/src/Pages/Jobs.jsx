
import { useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      company: "Infosys",
      role: "Software Engineer",
      location: "Hyderabad",
      package: "4.5 LPA",
      skills: ["React", "NodeJS", "MongoDB"],
      description: [
        "Design and build scalable MERN stack applications.",
        "Create user-friendly frontend interfaces with React.",
        "Optimize APIs and database performance for production.",
      ],
      eligibility:
        "B.Tech / MCA with minimum 60% and no active backlogs.",
    },
    {
      id: 2,
      company: "Accenture",
      role: "Full Stack Developer",
      location: "Bangalore",
      package: "6 LPA",
      skills: ["MERN", "SQL", "Git"],
      description: [
        "Develop enterprise-grade web applications using modern frameworks.",
        "Collaborate with cross-functional teams to deliver quality releases.",
        "Maintain clean, reusable, and well-documented code.",
      ],
      eligibility:
        "B.Tech / MCA with good communication skills.",
    },
    {
      id: 3,
      company: "TCS",
      role: "Frontend Developer",
      location: "Chennai",
      package: "5.2 LPA",
      skills: ["React", "JavaScript", "CSS"],
      description: [
        "Build responsive, accessible UI components with React.",
        "Improve application performance and page load speed.",
        "Work with designers to translate visual concepts into code.",
      ],
      eligibility:
        "Any Computer Science graduate with 65% aggregate.",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const searchValue = searchQuery.toLowerCase().trim();

    return (
      !searchValue ||
      job.company.toLowerCase().includes(searchValue) ||
      job.role.toLowerCase().includes(searchValue) ||
      job.location.toLowerCase().includes(searchValue) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchValue)
      )
    );
  });

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <h1>Job Opportunities</h1>
        <p>Explore available opportunities and apply.</p>
      </div>

      {/* Stats */}

      <div className="job-stats">
        <div className="job-stat-card">
          <h2>25</h2>
          <p>Available Jobs</p>
        </div>

        <div className="job-stat-card">
          <h2>8</h2>
          <p>Applied Jobs</p>
        </div>

        <div className="job-stat-card">
          <h2>3</h2>
          <p>Shortlisted</p>
        </div>
      </div>

      {/* Search */}

      <div className="search-section">
        <input
          type="text"
          placeholder="Search Jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchQuery(searchTerm.trim());
            }
          }}
        />

        <button
          type="button"
          className="search-btn"
          onClick={() => setSearchQuery(searchTerm.trim())}
        >
          Search
        </button>
      </div>

      {/* Job Cards */}

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h3>{job.company}</h3>
            <h4>{job.role}</h4>

            <p>
              <FaMapMarkerAlt /> {job.location}
            </p>

            <p>
              <FaMoneyBillWave /> {job.package}
            </p>

            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>

            <button
              className="apply-btn"
              onClick={() => setSelectedJob(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && searchQuery && (
        <p className="no-results">
          No jobs found for "{searchQuery}".
        </p>
      )}

      {/* Modal */}

      {selectedJob && (
        <div className="modal-overlay">
          <div className="job-modal">

            <div className="modal-header">
              <h2>{selectedJob.company}</h2>

              <button
                className="close-btn"
                onClick={() => setSelectedJob(null)}
              >
                ✕
              </button>
            </div>

            <h3>{selectedJob.role}</h3>

            <p>
              <strong>Location:</strong>{" "}
              {selectedJob.location}
            </p>

            <p>
              <strong>Package:</strong>{" "}
              {selectedJob.package}
            </p>

            <div className="job-section">
              <h4>Job Description</h4>
              <ul className="job-description-list">
                {selectedJob.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="job-section">
              <h4>Required Skills</h4>
              <p className="job-skills-text">
                {selectedJob.skills.join(", ")}
              </p>
            </div>

            <div className="job-section">
              <h4>Eligibility</h4>
              <p>{selectedJob.eligibility}</p>
            </div>

            <div className="apply-form">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <label>
                Upload Resume
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
              />

              <textarea
                placeholder="Why are you suitable for this role?"
                rows="4"
              ></textarea>

              <button className="submit-btn">
                Submit Application
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;