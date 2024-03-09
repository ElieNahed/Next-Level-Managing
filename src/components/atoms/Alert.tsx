// components/Alert.tsx

import { useSelector, useDispatch } from "react-redux";
import { showAlert, hideAlert } from "../../store/AlertStore/alertSlice";

interface AlertProps {
  text: string; // Define the text prop
  color: string; // Define the color prop
  onClose: () => void; // Define the onClose prop
}

const Alert: React.FC<AlertProps> = ({ text, color, onClose }) => {
  // Add AlertProps interface to specify props
  const dispatch = useDispatch();
  const { show } = useSelector((state: any) => state.alert);

  return (
    <>
      {show && (
        <div className="alert" style={{ backgroundColor: color }}>
          <span>{text}</span> {/* Use text prop instead of message */}
          <button onClick={onClose}>Close</button>{" "}
          {/* Use onClose prop instead of handleClose */}
        </div>
      )}
    </>
  );
};

export default Alert;
