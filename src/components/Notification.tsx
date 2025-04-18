import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";
import "./Notification.css";
import { NotificationProps } from "../types/types";

const Notification = ({ message, onClose, type }: NotificationProps) => {
  const icons = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineCloseCircle />,
  };

  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <AiOutlineClose className="closeButton" color="white" onClick={() => onClose()} />
    </div>
  );
};

export default Notification;
