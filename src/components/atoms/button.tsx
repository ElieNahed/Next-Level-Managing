import React from "react";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  text: string;
  disabled: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        type="submit"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
        sx={{
          width: "50%",
          borderRadius: "5px",
          backgroundColor: disabled ? "#200E3A" : "#38419D",
          color: "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.65 : 1,
          outline: "none",
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
