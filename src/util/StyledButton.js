import styled from "@emotion/styled";
import { ButtonBase } from "@mui/material";

const StyledButton = styled(ButtonBase)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    width: "200px",
    height: "45px",
    borderRadius: "10px",
    fontSize: "larger",
  }));

  export default StyledButton;