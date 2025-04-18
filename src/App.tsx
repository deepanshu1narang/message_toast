import "./App.css";
import useNotification from "./hooks/useNotification";
import { NotificationProps } from "./types/types";

function App() {
  const { triggerNotification, NotificationComponent } = useNotification("bottom-right");
  return (
    <div className="App">
      <h1>Message Toast</h1>
      {/* <Notification type="success" message={"that's a success!"} onClose={() => {}} duration={3000} /> */}
      {(["success", "info", "error", "warning"] as NotificationProps["type"][]).map((e) => (
        <div>
          <button
            key={e}
            onClick={() =>
              triggerNotification({
                type: e,
                message: `This is a ${e} type toast`,
                duration: 3000,
                onClose: () => {},
              })
            }
          >
            Trigger {e}
          </button>
        </div>
      ))}
      {NotificationComponent}
    </div>
  );
}

export default App;
