import React, { useState, useEffect } from "react";
import "../Styles/Dashboard.css"; // Make sure this points to our updated CSS file

const Dashboard = () => {
  // Language state
  const [language, setLanguage] = useState("english");

  // Interface text in different languages
  const interfaceText = {
    english: {
      welcome: "Welcome",
      home: "Home",
      events: "Events",
      community: "Community",
      scriptures: "Scriptures",
      donations: "Donations",
      announcements: "Announcements",
      media: "Media",
      settings: "Settings",
      songs: "Songs",
      totalMembers: "TOTAL MEMBERS",
      serviceAttendance: "SERVICE ATTENDANCE",
      donationsThisMonth: "DONATIONS THIS MONTH",
      upcomingEvents: "UPCOMING EVENTS",
      verseOfDay: "VERSE OF THE DAY",
      fromLastMonth: "from last month",
      fromLastWeek: "from last week",
      inNext30Days: "in the next 30 days",
      newMembers: "New Members",
      quickActions: "Quick Actions",
      addMember: "Add Member",
      newEvent: "New Event",
      announce: "Announce",
      sendEmail: "Send Email",
      viewAll: "View All",
      createNew: "Create New",
      bibleAccess: "Bible Access",
      songLibrary: "Song Library",
      readMore: "Read More",
      chooseLanguage: "Choose Language",
      chooseBibleVersion: "Choose Bible Version",
      chooseBook: "Choose Book",
      chooseChapter: "Choose Chapter",
      joined: "Joined",
      postedOn: "Posted on",
      searchSongs: "Search Songs",
      popularSongs: "Popular Songs",
      recentlyAdded: "Recently Added",
    },
    hindi: {
      welcome: "स्वागत है",
      home: "होम",
      events: "कार्यक्रम",
      community: "समुदाय",
      scriptures: "धर्मग्रंथ",
      donations: "दान",
      announcements: "घोषणाएँ",
      media: "मीडिया",
      settings: "सेटिंग्स",
      songs: "भजन",
      totalMembers: "कुल सदस्य",
      serviceAttendance: "सेवा उपस्थिति",
      donationsThisMonth: "इस महीने का दान",
      upcomingEvents: "आगामी कार्यक्रम",
      verseOfDay: "आज का श्लोक",
      fromLastMonth: "पिछले महीने से",
      fromLastWeek: "पिछले सप्ताह से",
      inNext30Days: "अगले 30 दिनों में",
      newMembers: "नए सदस्य",
      quickActions: "त्वरित कार्य",
      addMember: "सदस्य जोड़ें",
      newEvent: "नया कार्यक्रम",
      announce: "घोषणा करें",
      sendEmail: "ईमेल भेजें",
      viewAll: "सभी देखें",
      createNew: "नया बनाएं",
      bibleAccess: "बाइबिल एक्सेस",
      songLibrary: "भजन लाइब्रेरी",
      readMore: "और पढ़ें",
      chooseLanguage: "भाषा चुनें",
      chooseBibleVersion: "बाइबिल संस्करण चुनें",
      chooseBook: "पुस्तक चुनें",
      chooseChapter: "अध्याय चुनें",
      joined: "शामिल हुए",
      postedOn: "पोस्ट किया गया",
      searchSongs: "भजन खोजें",
      popularSongs: "लोकप्रिय भजन",
      recentlyAdded: "हाल ही में जोड़े गए",
    },
    gujarati: {
      welcome: "સ્વાગત છે",
      home: "હોમ",
      events: "કાર્યક્રમો",
      community: "સમુદાય",
      scriptures: "ધર્મશાસ્ત્રો",
      donations: "દાન",
      announcements: "જાહેરાતો",
      media: "મીડિયા",
      settings: "સેટિંગ્સ",
      songs: "ભજનો",
      totalMembers: "કુલ સભ્યો",
      serviceAttendance: "સેવા હાજરી",
      donationsThisMonth: "આ મહિને દાન",
      upcomingEvents: "આગામી કાર્યક્રમો",
      verseOfDay: "આજનો શ્લોક",
      fromLastMonth: "ગયા મહિના કરતાં",
      fromLastWeek: "ગયા અઠવાડિયા કરતાં",
      inNext30Days: "આગામી 30 દિવસોમાં",
      newMembers: "નવા સભ્યો",
      quickActions: "ઝડપી ક્રિયાઓ",
      addMember: "સભ્ય ઉમેરો",
      newEvent: "નવો કાર્યક્રમ",
      announce: "જાહેરાત કરો",
      sendEmail: "ઈમેઈલ મોકલો",
      viewAll: "બધું જુઓ",
      createNew: "નવું બનાવો",
      bibleAccess: "બાઇબલ એક્સેસ",
      songLibrary: "ભજન લાઇબ્રેરી",
      readMore: "વધુ વાંચો",
      chooseLanguage: "ભાષા પસંદ કરો",
      chooseBibleVersion: "બાઇબલ સંસ્કરણ પસંદ કરો",
      chooseBook: "પુસ્તક પસંદ કરો",
      chooseChapter: "અધ્યાય પસંદ કરો",
      joined: "જોડાયા",
      postedOn: "પોસ્ટ કરેલ",
      searchSongs: "ભજનો શોધો",
      popularSongs: "લોકપ્રિય ભજનો",
      recentlyAdded: "તાજેતરમાં ઉમેરાયેલ",
    }
  };

  // Get text based on selected language
  const getText = (key) => {
    return interfaceText[language][key] || interfaceText.english[key];
  };

  // Stats data with Indian currency
  const stats = [
    {
      title: getText("totalMembers"),
      value: "248",
      trend: "+4.7%",
      isUp: true,
      info: getText("fromLastMonth"),
    },
    {
      title: getText("serviceAttendance"),
      value: "186",
      trend: "+2.1%",
      isUp: true,
      info: getText("fromLastWeek"),
    },
    {
      title: getText("donationsThisMonth"),
      value: "₹38,500",
      trend: "-0.8%",
      isUp: false,
      info: getText("fromLastMonth"),
    },
    { 
      title: getText("upcomingEvents"), 
      value: "7", 
      info: getText("inNext30Days") 
    },
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
    { initials: "AM", name: "Arun Mehta", joinDate: `${getText("joined")} April 16, 2025` },
    { initials: "RP", name: "Rohit Patel", joinDate: `${getText("joined")} April 12, 2025` },
    { initials: "SK", name: "Sunita Kapoor", joinDate: `${getText("joined")} April 10, 2025` },
  ];

  const announcements = [
    {
      title: "Special Prayer Service",
      date: `${getText("postedOn")} April 18, 2025`,
      content:
        "Join us for a special prayer service for community healing on Wednesday evening at 7 PM.",
    },
    {
      title: "Volunteer Sign-up",
      date: `${getText("postedOn")} April 16, 2025`,
      content:
        "We need volunteers for the upcoming charity drive. Please sign up at the front desk.",
    },
    {
      title: "Building Renovation",
      date: `${getText("postedOn")} April 14, 2025`,
      content:
        "The east wing will be closed for renovations starting next week Monday.",
    },
  ];

  // Verse of the day
  const [verseOfDay, setVerseOfDay] = useState({
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
  });

  // Bible data
  const bibleVersions = ["English - NIV", "Hindi - पवित्र बाइबिल", "Gujarati - પવિત્ર બાઇબલ"];
  const [selectedVersion, setSelectedVersion] = useState(bibleVersions[0]);
  
  const bibleBooks = [
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
    "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
    "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
    "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
    "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
    "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew",
    "Mark", "Luke", "John", "Acts", "Romans",
    "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians",
    "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy",
    "Titus", "Philemon", "Hebrews", "James", "1 Peter",
    "2 Peter", "1 John", "2 John", "3 John", "Jude",
    "Revelation"
  ];
  const [selectedBook, setSelectedBook] = useState(bibleBooks[0]);
  const [selectedChapter, setSelectedChapter] = useState(1);

  // Song data
  const popularSongs = [
    "Amazing Grace",
    "How Great Thou Art",
    "What a Beautiful Name",
    "Blessed Be Your Name",
    "10,000 Reasons (Bless the Lord)",
    "Yesu Teri Mahima",
    "Yeshu Tere Naam Se",
    "Mera Yesu Mera Yesu"
  ];
  
  const recentSongs = [
    "Living Hope",
    "Goodness of God",
    "Way Maker",
    "Alabaster Heart",
    "He Hideth My Soul",
    "Raat Ke Andhere Mein",
    "Mai Tere Ghar Aaonga"
  ];

  // Using Font Awesome icons
  const menuItems = [
    { icon: "fa-home", text: getText("home"), active: true },
    { icon: "fa-calendar-alt", text: getText("events") },
    { icon: "fa-users", text: getText("community") },
    { icon: "fa-book", text: getText("scriptures") },
    { icon: "fa-hand-holding-heart", text: getText("donations") },
    { icon: "fa-bullhorn", text: getText("announcements") },
    { icon: "fa-music", text: getText("songs") },
    { icon: "fa-photo-video", text: getText("media") },
    { icon: "fa-cog", text: getText("settings") },
  ];

  const quickActions = [
    { icon: "fa-plus", text: getText("addMember") },
    { icon: "fa-calendar-plus", text: getText("newEvent") },
    { icon: "fa-bullhorn", text: getText("announce") },
    { icon: "fa-envelope", text: getText("sendEmail") },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-container">
          <div className="logo">Premal Jyot</div>
          <div className="logo-subtitle">Church Dashboard</div>
        </div>

        <div className="language-selector">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
            <option value="gujarati">ગુજરાતી</option>
          </select>
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
          <div className="page-title">{getText("welcome")}, John</div>
          <div className="user-profile">
            <div>John Doe</div>
            <div className="avatar">JD</div>
          </div>
        </div>

        <div className="stats-container">
          {/* Regular stats */}
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
          
          {/* Verse of the day card */}
          <div className="stat-card verse-card">
            <div className="stat-title">{getText("verseOfDay")}</div>
            <div className="verse-text">"{verseOfDay.text}"</div>
            <div className="verse-reference">{verseOfDay.reference}</div>
          </div>
        </div>

        <div className="content-cards">
          <div className="main-column">
            <div className="card">
              <div className="card-header">
                <div className="card-title">{getText("upcomingEvents")}</div>
                <button className="button">{getText("viewAll")}</button>
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
                <div className="card-title">{getText("bibleAccess")}</div>
              </div>

              <div className="bible-access">
                <div className="bible-controls">
                  <div className="bible-control">
                    <label>{getText("chooseBibleVersion")}</label>
                    <select 
                      value={selectedVersion} 
                      onChange={(e) => setSelectedVersion(e.target.value)}
                      className="bible-select"
                    >
                      {bibleVersions.map((version, index) => (
                        <option key={index} value={version}>{version}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bible-control">
                    <label>{getText("chooseBook")}</label>
                    <select 
                      value={selectedBook} 
                      onChange={(e) => setSelectedBook(e.target.value)}
                      className="bible-select"
                    >
                      {bibleBooks.map((book, index) => (
                        <option key={index} value={book}>{book}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bible-control">
                    <label>{getText("chooseChapter")}</label>
                    <select 
                      value={selectedChapter} 
                      onChange={(e) => setSelectedChapter(e.target.value)}
                      className="bible-select"
                    >
                      {[...Array(50).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="bible-content">
                  <div className="bible-passage">
                    <h3>{selectedBook} {selectedChapter}</h3>
                    <p className="bible-text">
                      1 In the beginning God created the heavens and the earth. 
                      2 Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.
                      3 And God said, "Let there be light," and there was light.
                      4 God saw that the light was good, and he separated the light from the darkness.
                      5 God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.
                    </p>
                    <p className="bible-text">
                      6 And God said, "Let there be a vault between the waters to separate water from water."
                      7 So God made the vault and separated the water under the vault from the water above it. And it was so.
                      8 God called the vault "sky." And there was evening, and there was morning—the second day.
                    </p>
                    <p className="bible-text">
                      9 And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.
                      10 God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="side-column">
            <div className="card">
              <div className="card-header">
                <div className="card-title">{getText("newMembers")}</div>
                <button className="button">{getText("viewAll")}</button>
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

            <div className="card">
              <div className="card-header">
                <div className="card-title">{getText("announcements")}</div>
                <button className="button">{getText("createNew")}</button>
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
                <div className="card-title">{getText("songLibrary")}</div>
              </div>

              <div className="song-library">
                <div className="song-search">
                  <input 
                    type="text" 
                    placeholder={getText("searchSongs")} 
                    className="song-search-input" 
                  />
                </div>
                
                <div className="song-section">
                  <h4>{getText("popularSongs")}</h4>
                  <ul className="song-list">
                    {popularSongs.map((song, index) => (
                      <li key={index} className="song-item">
                        <i className="fas fa-music"></i>
                        <span>{song}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="song-section">
                  <h4>{getText("recentlyAdded")}</h4>
                  <ul className="song-list">
                    {recentSongs.map((song, index) => (
                      <li key={index} className="song-item">
                        <i className="fas fa-music"></i>
                        <span>{song}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-title">{getText("quickActions")}</div>
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