import React, { useState } from "react";
import "../Styles/Dashboard.css"; // Make sure this points to our updated CSS file

const Dashboard = () => {
  // Stats data with Nike-inspired presentation
  const stats = [
    {
      title: "TOTAL MEMBERS",
      value: "248",
      trend: "+4.7%",
      isUp: true,
      info: "from last month",
    },
    {
      title: "SERVICE ATTENDANCE",
      value: "186",
      trend: "+2.1%",
      isUp: true,
      info: "from last week",
    },
    {
      title: "DONATIONS THIS MONTH",
      value: "$4,280",
      trend: "-0.8%",
      isUp: false,
      info: "from last month",
    },
    { title: "UPCOMING EVENTS", value: "7", info: "in the next 30 days" },
  ];

  const events = [
    {
      day: "21",
      month: "Apr",
      title: "Sunday Service",
      time: "10:00 AM - 12:00 PM",
      location: "Main Hall",
    },
    {
      day: "24",
      month: "Apr",
      title: "Prayer Meeting",
      time: "6:30 PM - 7:30 PM",
      location: "Prayer Room",
    },
    {
      day: "28",
      month: "Apr",
      title: "Charity Fundraiser",
      time: "3:00 PM - 6:00 PM",
      location: "Community Center",
    },
  ];

  const members = [
    { initials: "AM", name: "Amy Martin", joinDate: "Joined April 16, 2025" },
    { initials: "RP", name: "Robert Patel", joinDate: "Joined April 12, 2025" },
    { initials: "SK", name: "Sarah Kim", joinDate: "Joined April 10, 2025" },
  ];

  const announcements = [
    {
      title: "Special Prayer Service",
      date: "Posted on April 18, 2025",
      content:
        "Join us for a special prayer service for community healing on Wednesday evening at 7 PM.",
    },
    {
      title: "Volunteer Sign-up",
      date: "Posted on April 16, 2025",
      content:
        "We need volunteers for the upcoming charity drive. Please sign up at the front desk.",
    },
    {
      title: "Building Renovation",
      date: "Posted on April 14, 2025",
      content:
        "The east wing will be closed for renovations starting next week Monday.",
    },
  ];

  // Using Nike-like iconography (assuming Font Awesome)
  const menuItems = [
    { icon: "fa-home", text: "Home", active: true },
    { icon: "fa-calendar-alt", text: "Events" },
    { icon: "fa-users", text: "Community" },
    { icon: "fa-book", text: "Scriptures" },
    { icon: "fa-hand-holding-heart", text: "Donations" },
    { icon: "fa-bullhorn", text: "Announcements" },
    { icon: "fa-photo-video", text: "Media" },
    { icon: "fa-cog", text: "Settings" },
  ];

  const quickActions = [
    { icon: "fa-plus", text: "Add Member" },
    { icon: "fa-calendar-plus", text: "New Event" },
    { icon: "fa-bullhorn", text: "Announce" },
    { icon: "fa-envelope", text: "Send Email" },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">Premal Jyot</div>
          <div className="logo-subtitle">Church Dashboard</div>
        </div>
        <div className="menu">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`menu-item ${item.active ? "active" : ""}`}
            >
              <i className={`fas ${item.icon}`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="page-title">Welcome, John</div>
          <div className="user-profile">
            <div>John Doe</div>
            <div className="avatar">JD</div>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-title">{stat.title}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-footer">
                {stat.trend && (
                  <span className={stat.isUp ? "trend-up" : "trend-down"}>
                    <i
                      className={`fas fa-arrow-${stat.isUp ? "up" : "down"}`}
                    ></i>{" "}
                    {stat.trend}
                  </span>
                )}
                <span className="stat-info">{stat.info}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="content-cards">
          <div>
            <div className="card">
              <div className="card-header">
                <div className="card-title">Upcoming Events</div>
                <button className="button">View All</button>
              </div>

              <div className="upcoming-events">
                {events.map((event, index) => (
                  <div key={index} className="event">
                    <div className="event-date">
                      <div className="event-day">{event.day}</div>
                      <div className="event-month">{event.month}</div>
                    </div>
                    <div className="event-details">
                      <div className="event-title">{event.title}</div>
                      <div className="event-time">{event.time}</div>
                      <div className="event-location">
                        <i className="fas fa-map-marker-alt"></i> {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-title">New Members</div>
                <button className="button">View All</button>
              </div>

              <div>
                {members.map((member, index) => (
                  <div key={index} className="member">
                    <div className="member-avatar">{member.initials}</div>
                    <div className="member-info">
                      <div className="member-name">{member.name}</div>
                      <div className="member-role">{member.joinDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <div className="card-header">
                <div className="card-title">Announcements</div>
                <button className="button">Create New</button>
              </div>

              <div>
                {announcements.map((announcement, index) => (
                  <div key={index} className="announcement">
                    <div className="announcement-title">
                      {announcement.title}
                    </div>
                    <div className="announcement-date">{announcement.date}</div>
                    <div>{announcement.content}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-title">Quick Actions</div>
              </div>

              <div className="quick-actions-grid">
                {quickActions.map((action, index) => (
                  <button key={index} className="action-button">
                    <i className={`fas ${action.icon}`}></i> {action.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;