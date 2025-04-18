import "./App.css";
import useNotification from "./hooks/useNotificationStack";
import { NotificationProps } from "./types/types";

function App() {
  const { triggerNotification, NotificationComponent } = useNotification("bottom-right");
  return (
    <div className="App">
      <h1>Message Toast</h1>
      {/* <Notification type="success" message={"that's a success!"} onClose={() => {}} duration={3000} /> */}
      {[
        { type: "success", duration: 3000 },
        { type: "info", duration: 5000 },
        { type: "error", duration: 4000 },
        { type: "warning", duration: 6000 },
      ].map((e) => (
        <div key={e.type}>
          <button
            onClick={() =>
              triggerNotification({
                type: e.type as NotificationProps["type"],
                message: `This is a ${e.type} type toast`,
                duration: e.duration,
              })
            }
          >
            Trigger {e.type}
          </button>
        </div>
      ))}
      {NotificationComponent}
    </div>
  );
}

export default App;
