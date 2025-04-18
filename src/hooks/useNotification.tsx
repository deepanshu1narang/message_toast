import React, { useCallback, useState } from "react";
import { NotificationProps } from "../types/types";
import Notification from "../components/Notification";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const useNotification = (position: Position) => {
  const [notification, setNotification] = useState<NotificationProps>(null!);

  let timer: number = 0;

  const triggerNotification = useCallback((notification: NotificationProps) => {
    clearTimeout(timer);
    setNotification(notification);
    timer = setTimeout(() => {
      setNotification(null!);
    }, notification.duration);
  }, []);

  const NotificationComponent: React.ReactNode = notification ? (
    <div className={`toast ${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
