import { Box } from "@mui/material";
import OptionListItem from "./OptionListItem";

const OptionList = (props) => {
  const { careerOption } = { ...props };

  return (<Box>

    {careerOption.map((item,index)=>{
        return(
            <OptionListItem key={index} index={index} careerOptionItem = {item} />
        )
    })}
  </Box>);
};

export default OptionList;
