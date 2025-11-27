const NotificationItem = ({ message, timestamp }) => {
  return (
    <div className="notification-item">
      <p className="notification-message">{message}</p>
      <p className="notification-timestamp">{timestamp}</p>
    </div>
  );
};

export const Notifications = () => {
  const notificationsList = [
    { id: 1, message: "Your laptop has been sold", timestamp: "2 hours ago" },
    { id: 2, message: "JohnDoe sent you a message", timestamp: "Yesterday" },
    { id: 3, message: "Payment for the watch has been received", timestamp: "2 days ago" },
    { id: 4, message: "Your ad has  been approved", timestamp: "1 week ago" },
  ];

  return (
    <div className="notifications-container">
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">olx</div>
          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <button className="my-account-btn">My Account</button>
      </header>

      <main className="notifications-main">
        <h1>Notifications</h1>
        <div className="notifications-list">
          {notificationsList.map((notification) => (
            <NotificationItem
              key={notification.id}
              message={notification.message}
              timestamp={notification.timestamp}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
