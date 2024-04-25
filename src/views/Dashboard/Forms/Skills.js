import { Box, FormHelperText, Grid, TextField } from "@mui/material";

const Skills = (props) => {
  const { formik } = { ...props };

  return (
    <Box>
      <TextField
        name="skill"
        label="Skill"
        variant="outlined"
        error={Boolean(formik.touched.skill && formik.errors.skill)}
        onChange={formik.handleChange}
        value={formik.values.skill}
        helperText={formik.touched.skill && formik.errors.skill}
      />
       
    </Box>
  );
};

export default Skills;
