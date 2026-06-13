import { useParams } from "react-router-dom";


function CoursePlayer() {

  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M"
    },
    {
      id: 2,
      title: "Java Full Stack",
      videoUrl: "https://www.youtube.com/embed/grEKMHGYyns"
    }
  ];

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <div className="player-page">
      <h1>{course.title}</h1>

      <iframe
        width="100%"
        height="500"
        src={course.videoUrl}
        title={course.title}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default CoursePlayer;