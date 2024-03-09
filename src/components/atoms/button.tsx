import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  text: string;
  disabled: boolean; // Change isFormValid to disabled
  onClick?: () => void; // Optional onClick function
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={disabled} // Use the disabled prop
      onClick={onClick} // Pass the onClick function if provided
      sx={{
        width: "100%",
        borderRadius: "5px",
        backgroundColor: disabled ? "#200E3A" : "#38419D", // Use colors from your palette
        color: "#fff",
        cursor: disabled ? "not-allowed" : "pointer", // Update cursor styles
        opacity: disabled ? 0.65 : 1, // Update opacity styles
        outline: "none",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
