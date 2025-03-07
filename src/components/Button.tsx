import { Button, ButtonProps, SxProps } from "@mui/material";

type CustomButtonProps = {
  label: string;
  sx?: SxProps;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = "contained",
  sx,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      sx={{
        boxShadow: "none",
        border: "1px solid",
        borderColor: "primary.main",
        textTransform: "none",
        "&:hover": {
          boxShadow: "none",
          color: "primary.main",
          backgroundColor: "white",
          border: "1px solid",
          borderColor: "primary.main",
        },
        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
