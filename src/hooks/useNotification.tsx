import React, { useCallback, useMemo, useState } from "react";
import { NotificationProps, Position } from "../types/types";
import Notification from "../components/Notification";

const useNotification = (position: Position) => {
  const [notification, setNotification] = useState<NotificationProps>(null!);

  let timer: number = 0;

  const handleCloseNotification = () => setNotification(null!);

  const triggerNotification = useCallback((notification: Omit<NotificationProps, "onClose" | "id">) => {
    clearTimeout(timer);
    setNotification({ ...notification, onClose: handleCloseNotification, id: Math.random() });
    timer = setTimeout(() => {
      setNotification(null!);
    }, notification.duration);
  }, []);

  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      [position.split("-")[1]]: 0,
    }),
    [position]
  );

  const NotificationComponent: React.ReactNode = notification ? (
    <div style={containerStyle} className="toast-container">
      <div className={`toast ${position}`}>
        <Notification {...notification} onClose={handleCloseNotification} />
      </div>
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
