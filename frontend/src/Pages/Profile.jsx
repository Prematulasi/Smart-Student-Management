import React, { useState } from "react";

function Profile() {
	const [editing, setEditing] = useState(false);
	const [user, setUser] = useState({
		fullName: "Prem Kumar",
		email: "prem@example.com",
		phone: "+91 98765 43210",
		college: "Smart University",
		role: "Student",
		bio: "Passionate learner. Interested in web development and AI.",
		joined: "2023-05-12",
		courses: ["React Basics", "Advanced Node.js", "Data Structures"],
		certificates: ["Frontend Pro", "NodeJS Essentials"],
	});

	const [form, setForm] = useState({ ...user });

	const handleSave = () => {
		setUser({ ...form });
		setEditing(false);
	};

	const handleChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

	const initials = user.fullName
		.split(" ")
		.map((n) => n[0])
		.slice(0, 2)
		.join("");

	return (
		<div className="profile-page">
			<div className="profile-header">
				<h1>Profile</h1>
			</div>

			<div className="profile-main">
				<div className="profile-card profile-summary-card">
					<div className="profile-avatar">{initials}</div>
					<div className="profile-summary-meta">
						<h2>{user.fullName}</h2>
						<p>{user.role} • Joined {user.joined}</p>
						<p className="profile-email">{user.email}</p>
					</div>
					<div className="profile-actions">
						{!editing ? (
							<button className="btn-primary" onClick={() => { setForm({ ...user }); setEditing(true); }}>
								Edit
							</button>
						) : (
							<>
								<button className="btn-primary" onClick={handleSave}>Save</button>
								<button className="btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
							</>
						)}
					</div>
				</div>

				<div className="profile-card profile-detail-card">
					<div className="profile-grid profile-form">
						<div className="profile-field">
							<label>Full Name</label>
							{editing ? (
								<input value={form.fullName} onChange={handleChange("fullName")} />
							) : (
								<div className="profile-value">{user.fullName}</div>
							)}
						</div>

						<div className="profile-field">
							<label>Role</label>
							{editing ? (
								<input value={form.role} onChange={handleChange("role")} />
							) : (
								<div className="profile-value">{user.role}</div>
							)}
						</div>

						<div className="profile-field">
							<label>Email</label>
							{editing ? (
								<input value={form.email} onChange={handleChange("email")} />
							) : (
								<div className="profile-value">{user.email}</div>
							)}
						</div>

						<div className="profile-field">
							<label>Phone</label>
							{editing ? (
								<input value={form.phone} onChange={handleChange("phone")} />
							) : (
								<div className="profile-value">{user.phone}</div>
							)}
						</div>

						<div className="profile-field full-width">
							<label>College / Institute</label>
							{editing ? (
								<input value={form.college} onChange={handleChange("college")} />
							) : (
								<div className="profile-value">{user.college}</div>
							)}
						</div>

						<div className="profile-field full-width">
							<label>Bio</label>
							{editing ? (
								<textarea value={form.bio} onChange={handleChange("bio")} />
							) : (
								<div className="profile-value">{user.bio}</div>
							)}
						</div>
					</div>
				</div>

				<div className="profile-card profile-detail-card">
					<div className="profile-section-title">Courses Enrolled</div>
					<ul className="profile-list">
						{user.courses.map((course, index) => (
							<li key={index}>{course}</li>
						))}
					</ul>
				</div>

				<div className="profile-card profile-detail-card">
					<div className="profile-section-title">Certificates</div>
					<div className="profile-tags">
						{user.certificates.map((certificate, index) => (
							<span key={index} className="profile-tag">{certificate}</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
