import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface CustomTextFieldProps
  extends Omit<TextFieldProps, "onChange" | "value"> {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      {...rest}
      sx={{
        width: "100%",
        marginBottom: "1rem",
        "& .MuiInputBase-root": {
          color: "#38419D", // Use color from your palette for text input
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#38419D", // Use color from your palette for input border
          },
          "&:hover fieldset": {
            borderColor: "#3887BE", // Use color from your palette for hover state border
          },
          "&.Mui-focused fieldset": {
            borderColor: "#52D3D8", // Use color from your palette for focused state border
          },
        },
      }}
    />
  );
};

export default CustomTextField;
