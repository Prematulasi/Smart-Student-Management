import { useState } from "react";


function TrainerProfile() {

  const [trainer, setTrainer] =
    useState({
      name: "John Smith",
      email: "trainer@gmail.com",
      phone: "9876543210",
      specialization: "MERN Stack Development",
      experience: "5 Years",
      qualification: "M.Tech",
      bio: "Passionate trainer with experience in Full Stack Development and Cloud Technologies.",
    });

  const handleChange = (e) => {

    setTrainer({
      ...trainer,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Profile Updated Successfully"
    );

  };

  return (

    <div className="trainer-profile-container">

      <div className="profile-card">

        <div className="profile-header">

          <img
            src="https://i.pravatar.cc/150"
            alt="trainer"
          />

          <h2>{trainer.name}</h2>

          <p>
            {trainer.specialization}
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={trainer.name}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={trainer.email}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={trainer.phone}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              value={trainer.specialization}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={trainer.experience}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Qualification
            </label>

            <input
              type="text"
              name="qualification"
              value={trainer.qualification}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>
              Bio
            </label>

            <textarea
              name="bio"
              value={trainer.bio}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Update Profile
          </button>

        </form>

      </div>

    </div>

  );
}

export default TrainerProfile;