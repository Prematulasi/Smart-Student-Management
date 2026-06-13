

function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "React Dashboard Development",
      deadline: "25 Jun 2026",
      marks: 20,
      status: "pending",
    },
    {
      id: 2,
      title: "NodeJS REST API",
      deadline: "20 Jun 2026",
      marks: 25,
      status: "submitted",
    },
    {
      id: 3,
      title: "Java Mini Project",
      deadline: "18 Jun 2026",
      marks: 30,
      score: "27/30",
      status: "evaluated",
    },
  ];

  return (
    <div className="assignments-page">
      <h1>Assignments</h1>
      <br />
      <br />
      <div className="assignments-grid">
        {assignments.map((item) => (
          <div className="assignment-card" key={item.id}>
            <h3>{item.title}</h3>
            <br />
            <div className="assignment-info">
              <p>
                <span>Deadline</span>
                <strong>{item.deadline}</strong>
              </p>

              <p>
                <span>Marks</span>
                <strong>{item.marks}</strong>
              </p>

              {item.status === "evaluated" && (
                <p>
                  <span>Score</span>
                  <strong className="score">
                    {item.score}
                  </strong>
                </p>
              )}
            </div>

            {item.status === "pending" && (
              <button className="start-btn">
                Start Assignment
              </button>
            )}
           
            {item.status === "submitted" && (
              <button className="submitted-btn">
                View Submission
              </button>
            )}

            {item.status === "evaluated" && (
              <button className="result-btn">
                View Result
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;