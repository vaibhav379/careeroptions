import styled from "@emotion/styled";
import { ExpandMoreOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  Collapse,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const OptionListItem = (props) => {
  const { careerOptionItem, index } = { ...props };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant="elevation"
      sx={{
        p: "20px 20px 20px 50px",
        marginBottom: "20px",
        minWidth: "800px",
        maxWidth: "900px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ width: "75%" }} variant="h5">
          {" "}
          {index + 1}. {careerOptionItem.name}
        </Typography>
        <Typography>Relevance score {careerOptionItem.relevance}%</Typography>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="body">{careerOptionItem.description}</Typography>
      </Box>

      <Box sx={{ display: "ruby" }}>
        <Typography>{expanded ? "Show Less" : "Show More"}</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreOutlined />
        </ExpandMore>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6">Why this option?</Typography>
          <Typography>{careerOptionItem.why}</Typography>
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6">How to gain necessary education?</Typography>
          <Typography>{careerOptionItem.education}</Typography>
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6">How to build necessary skills?</Typography>
          <Typography>{careerOptionItem.skillbuild}</Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "10px" }}>
          <Typography
            sx={{ width: "fit-content", marginRight: "10px", minWidth: "80px" }}
            variant="h6"
          >
            Skills :
          </Typography>
          <Stack direction="row" spacing={2}>
            {careerOptionItem.skills.map((item, tindex) => {
              return (
                <Card sx={{ padding: "5px" }} key={tindex}>
                  <Typography>{item}</Typography>
                </Card>
              );
            })}
          </Stack>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "10px" }}>
          {careerOptionItem &&
            careerOptionItem.talents &&
            careerOptionItem.talents instanceof Array && (
              <>
                <Typography
                  sx={{
                    width: "fit-content",
                    marginRight: "10px",
                    minWidth: "80px",
                  }}
                  variant="h6"
                >
                  Talents :
                </Typography>
                <Stack direction="row" spacing={2}>
                  {careerOptionItem.talents.map((item, tindex) => {
                    return (
                      <Card sx={{ padding: "5px" }} key={tindex}>
                        <Typography>{item}</Typography>
                      </Card>
                    );
                  })}
                </Stack>
              </>
            )}
        </Box>

        <Box sx={{ display: "flex", marginBottom: "10px" }}>
          {careerOptionItem &&
            careerOptionItem.notable &&
            careerOptionItem.notable instanceof Array && (
              <>
                <Typography
                  sx={{
                    width: "fit-content",
                    marginRight: "10px",
                    minWidth: "80px",
                  }}
                  variant="h6"
                >
                  Notable People :
                </Typography>
                <Stack direction="row" spacing={2}>
                  {careerOptionItem.notable.map((item, tindex) => {
                    return (
                      <Card sx={{ padding: "5px" }} key={tindex}>
                        <Typography>
                          <a
                            href={`https://www.google.com/search?q=${item}`}
                            target="_blank"
                          >
                            {item}{" "}
                          </a>
                        </Typography>
                      </Card>
                    );
                  })}
                </Stack>
              </>
            )}
        </Box>
      </Collapse>
    </Card>
  );
};

export default OptionListItem;
