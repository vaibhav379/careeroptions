import { Box, Card, Stack, Typography } from "@mui/material";

const OptionListItem = (props) => {
  const { careerOptionItem, index } = { ...props };

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
        <Typography >Relevance score {careerOptionItem.relevance}%</Typography>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="body">{careerOptionItem.description}</Typography>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h6">Why this option?</Typography>
        <Typography>{careerOptionItem.why}</Typography>
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
      <Box sx={{ display: "flex" }}>
        {careerOptionItem && careerOptionItem.talents && careerOptionItem.talents instanceof Array && (
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
    </Card>
  );
};

export default OptionListItem;
