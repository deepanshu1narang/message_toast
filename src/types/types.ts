export interface NotificationProps {
  id: number;
  message: string;
  type: "success" | "info" | "warning" | "error";
  onClose: () => void;
  duration: number;
}

export type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";
