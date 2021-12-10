const Notification = (props) => {
  const { NotificationText, notificationClass, imageUrl } = props;
  return (
    <div className={notificationClass}>
      <img src={imageUrl} className="icon" />
      <h1>{NotificationText}</h1>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      NotificationText="Information Message"
      notificationClass="blue"
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      NotificationText="Success Message"
      notificationClass="green"
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      NotificationText="Warning Message"
      notificationClass="yellow"
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      NotificationText="Error Message"
      notificationClass="red"
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
