import { FC, useMemo } from "react";
import { NotificationProps, Position } from "../types/types";

interface ToastStackProps {
  position: Position;
  notifications?: NotificationProps[];
}

const ToastStack: FC<ToastStackProps> = ({ position }) => {
  const containerStyle: React.CSSProperties = useMemo(
    () => ({
      position: "fixed",
      [position.split("-")[1]]: 0,
      height: "100%",
      backgroundColor: "yellowgreen",
    }),
    [position]
  );

  return <div style={containerStyle}>{/*  */}</div>;
};

export default ToastStack;
