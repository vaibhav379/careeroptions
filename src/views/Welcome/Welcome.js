import {
  Looks3Rounded,
  LooksOne,
  LooksOneRounded,
  LooksTwoRounded,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import StyledButton from "../../util/StyledButton";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url(/images/first.png)",
          backgroundSize: "cover",
          pl: "50px",
          pt: "50px",
        }}
      >
        <Box sx={{ height: "fit-content", display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <Typography variant="h2" sx={{ maxWidth: "500px" }}>
              Discover a career{" "}
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: "500px" }}>
              that's truly yours
            </Typography>
            <Typography
              variant="h2"
              sx={{ maxWidth: "500px", fontWeight: "bold" }}
            >
              with AI
            </Typography>
          </Box>
          <Box>
            <img style={{ maxWidth:"15vw"}} alt="logo" src="/images/logo.jpeg" />
          </Box>
        </Box>

        <Box sx={{ pt: "5em", display: "grid" }}>
          <List>
            <ListItem>
              <LooksOneRounded
                sx={{
                  mr: "20px",
                  height: "40px",
                  width: "40px",
                  color: "#79ab50",
                }}
              ></LooksOneRounded>
              <Typography variant="h4">Take a quick Career quiz</Typography>
            </ListItem>
            <ListItem>
              <LooksTwoRounded
                sx={{
                  mr: "20px",
                  height: "40px",
                  width: "40px",
                  color: "#79ab50",
                }}
              ></LooksTwoRounded>
              <Typography variant="h4">
                Get AI-generated career options
              </Typography>
            </ListItem>
            <ListItem>
              <Looks3Rounded
                sx={{
                  mr: "20px",
                  height: "40px",
                  width: "40px",
                  color: "#79ab50",
                }}
              ></Looks3Rounded>
              <Typography variant="h4">Explore roadmap to get there</Typography>
            </ListItem>
          </List>
          <StyledButton
            sx={{ height: "60px !important", ml: "50px", mt: "40px" }}
            onClick={() => {
              navigate("/home");
            }}
          >
            Begin Now
          </StyledButton>
        </Box>

        <Box sx={{ pt: "2em", display: "flex" }}>
          <Box sx={{ display:"grid", alignItems:"center", width: "80%" }}>
            <Divider />
          </Box>
          <Box>
            <img style={{ maxWidth:"300px", maxHeight:"300px", marginRight:"5vw"}} src="/images/googleai.png" alt="logo" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
