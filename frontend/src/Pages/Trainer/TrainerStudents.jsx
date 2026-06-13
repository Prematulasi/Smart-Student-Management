function TrainerStudents() {

  const students = [
    {
      id: 1,
      name: "Rahul",
      course: "MERN Stack",
      progress: 80,
      score: 85,
    },
    {
      id: 2,
      name: "Priya",
      course: "Java Full Stack",
      progress: 65,
      score: 78,
    },
  ];

  return (
    <div>

      <h1>Students</h1>

      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Progress</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.progress}%</td>
              <td>{student.score}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TrainerStudents;