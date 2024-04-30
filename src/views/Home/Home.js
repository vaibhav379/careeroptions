import {
  Box,
  Button,
  Input,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { setName } from "../../store/actions";
import { connect } from "react-redux";
import { enqueueSnackbar } from "notistack";

const Home = (props) => {
  const { name, setName } = { ...props };
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!name){
        enqueueSnackbar("Please enter a name to continue.",{variant:"error"})
        return;
    }
    navigate("/dashboard");
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          padding: "20px",
          top: "50%",
        }}
      >
        <Typography sx={{p:"20px"}} >Please enter your name to get started</Typography>
        <TextField  onChange={setName} value={name} />
        <Button sx={{p:"20px"}} onClick={handleSubmit}>Get Started</Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.form.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (e) => {
      dispatch(setName(e.target.value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
