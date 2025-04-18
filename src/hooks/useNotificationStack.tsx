import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NotificationProps, Position } from "../types/types";
import Notification from "../components/Notification";

interface CustomCSS extends React.CSSProperties {
  "--flex-direction"?: string;
}

const useNotification = (position: Position) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const handleDeleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((x) => x.id !== id));
  };

  const triggerNotification = (notification: Omit<NotificationProps, "onClose" | "id">) => {
    let notifs = [...notifications];
    let notif: NotificationProps = {
      ...notification,
      id: Math.random(),
      onClose: () => handleDeleteNotification(notif.id),
    };
    notifs = [...notifications, notif];
    setNotifications(notifs);
    let timer: number = 0;
    clearTimeout(timer);
    timer = setTimeout(() => handleDeleteNotification(notif.id), notif.duration);
  };

  const containerStyle: CustomCSS = useMemo(() => {
    const flexDirection = position.split("-")[0] === "top" ? "column" : "column-reverse";

    return {
      [position.split("-")[1]]: 0,
      "--flex-direction": flexDirection,
    };
  }, [position]);

  const NotificationComponent: React.ReactNode =
    notifications.length > 0 ? (
      <div style={containerStyle} className="toast-container">
        {notifications.map((notification) => (
          <div key={notification.id} className={`toast ${position}`}>
            <Notification {...notification} onClose={() => handleDeleteNotification(notification.id)} />
          </div>
        ))}
      </div>
    ) : null;

  //   const ToastContainer: React.ReactNode = <ToastStack position={position} />;

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
