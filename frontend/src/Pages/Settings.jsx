import React, { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [fullName, setFullName] = useState("Prem Kumar");
  const [email, setEmail] = useState("prem@example.com");
  const [college, setCollege] = useState("Smart University");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileMessage, setProfileMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [activeSection, setActiveSection] = useState(null);

  const handleProfileUpdate = () => {
    if (!fullName || !email || !college) {
      setProfileMessage("Please fill in all profile fields.");
      return;
    }

    setProfileMessage("Profile updated successfully.");
  };

  const handlePasswordUpdate = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordMessage("Please complete all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage("New password and confirmation must match.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordMessage("New password should be at least 6 characters.");
      return;
    }

    setPasswordMessage("Password updated successfully.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: 1000,
    margin: "0 auto",
    padding: 20,
  };

  const pageStyle = {
    fontSize: 18,
    lineHeight: 1.6,
    minHeight: "100vh",
    paddingBottom: 40,
    background: "#f6fbf6",
  };

  const rowStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: isActive ? "#fff" : "#fafcf9",
    border: "1px solid #e6f0e6",
    padding: "18px 16px",
    borderRadius: 10,
    cursor: "pointer",
    boxShadow: isActive ? "0 4px 14px rgba(0,0,0,0.06)" : "none",
    transition: "background 120ms, transform 120ms",
  });

  const leftContent = { display: "flex", gap: 12, alignItems: "center" };

  const titleStyle = { fontSize: 18, fontWeight: 700 };

  const subtitleStyle = { fontSize: 14, color: "#6b786b" };

  const chevronStyle = { fontSize: 18, color: "#9aa79a" };

  const renderForm = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="card">
            <h2 style={{fontSize:20}}>Profile Settings</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <input
              type="text"
              placeholder="College Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <button type="button" onClick={handleProfileUpdate} style={{padding:'10px 14px', borderRadius:8, background:'#2f9a3f', color:'white', border:'none', cursor:'pointer'}}>
              Update Profile
            </button>
            {profileMessage && <p className="settings-message">{profileMessage}</p>}
          </div>
        );

      case "password":
        return (
          <div className="card">
            <h2 style={{fontSize:20}}>Change Password</h2>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{width:'100%', padding:10, margin:'8px 0', borderRadius:8, border:'1px solid #e1ece1'}}
            />
            <button type="button" onClick={handlePasswordUpdate} style={{padding:'10px 14px', borderRadius:8, background:'#2f9a3f', color:'white', border:'none', cursor:'pointer'}}>
              Update Password
            </button>
            {passwordMessage && <p className="settings-message">{passwordMessage}</p>}
          </div>
        );

      case "notifications":
        return (
          <div className="card">
            <h2 >Notifications</h2>
            <label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              Enable Email Notifications
            </label>
          </div>
        );

      case "appearance":
        return (
          <div className="card">
            <h2>Appearance</h2>
            <label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              Dark Mode
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : ""}`} style={pageStyle}> 
      <h1 style={{fontSize:28, marginBottom:16}}>Settings</h1>

      <div style={sectionStyle}>
        {[
          { key: "profile", title: "Profile", subtitle: "Update name, email, college" },
          { key: "password", title: "Password", subtitle: "Change your account password" },
          { key: "notifications", title: "Notifications", subtitle: "Email and in-app alerts" },
          { key: "appearance", title: "Appearance", subtitle: "Theme and display settings" },
        ].map((s) => {
          const isActive = activeSection === s.key;
          return (
            <div key={s.key} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={rowStyle(isActive)}
                onClick={() => setActiveSection(isActive ? null : s.key)}
              >
                <div style={leftContent}>
                  <div style={{width:36, height:36, borderRadius:8, background:'#eef7ee', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    {/* simple icon placeholder */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#7fb977" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div>
                    <div style={titleStyle}>{s.title}</div>
                    <div style={subtitleStyle}>{s.subtitle}</div>
                  </div>
                </div>

                <div style={chevronStyle}>{isActive ? "\u25B2" : "\u25B6"}</div>
              </div>

              {isActive && (
                <div>
                  {renderForm()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;