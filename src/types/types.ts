export interface NotificationProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
  onClose: () => void;
  duration: number;
}
