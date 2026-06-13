

function Certificates() {

  const certificates = [
    {
      id: 1,
      course: "MERN Stack Development",
      completedOn: "20 Jun 2026",
      score: "92%",
      progress: 100,
    },
    {
      id: 2,
      course: "Java Full Stack",
      completedOn: "15 May 2026",
      score: "89%",
      progress: 100,
    },
    {
      id: 3,
      course: "Data Structures & Algorithms",
      completedOn: "10 Apr 2026",
      score: "94%",
      progress: 65,
    },
  ];

  // Only completed courses
  const completedCertificates = certificates.filter(
    (course) => course.progress === 100
  );

  // Download PDF Certificate
  const downloadCertificate = (courseName, score) => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(24);
    doc.text("Certificate of Completion", 45, 40);

    // Content
    doc.setFontSize(14);
    doc.text(
      "This certificate is proudly presented to",
      55,
      70
    );

    doc.setFontSize(18);
    doc.text("Student Name", 75, 90);

    doc.setFontSize(14);
    doc.text(
      `For successfully completing the course`,
      50,
      115
    );

    doc.setFontSize(16);
    doc.text(courseName, 55, 130);

    doc.setFontSize(12);
    doc.text(`Final Score: ${score}`, 80, 155);

    doc.text(
      `Date: ${new Date().toLocaleDateString()}`,
      20,
      190
    );

    doc.text("Authorized Signature", 140, 190);

    doc.save(`${courseName}-Certificate.pdf`);
  };

  return (
    <>
      <div className="certificates-page">

        {/* Header */}
        <div className="certificate-header">
          <h1>Certificates</h1>
          <br />
          <p>
            Download certificates for successfully completed courses.
          </p>
        </div>

        <br />

        {/* Stats */}
        <div className="stats-container">

          <div className="stat-card">
            <h2>{certificates.length}</h2>
            <p>Total Courses</p>
          </div>

          <div className="stat-card">
            <h2>{completedCertificates.length}</h2>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h2>
              {certificates.length -
                completedCertificates.length}
            </h2>
            <p>In Progress</p>
          </div>

        </div>

        <br />

        {/* Certificate Cards */}
        <div className="certificate-grid">

          {completedCertificates.length > 0 ? (
            completedCertificates.map((item) => (

              <div
                className="certificate-card"
                key={item.id}
              >

                <h3>{item.course}</h3>

                <br />

                <p>
                  <strong>Completed On:</strong>{" "}
                  {item.completedOn}
                </p>

                <br />

                <p>
                  <strong>Score:</strong>{" "}
                  {item.score}
                </p>

                <br />

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadCertificate(
                      item.course,
                      item.score
                    )
                  }
                >
                  Download Certificate
                </button>

              </div>

            ))
          ) : (
            <div className="no-certificates">
              <h3>No Certificates Available</h3>
              <p>
                Complete a course to unlock your
                certificates.
              </p>
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Certificates;