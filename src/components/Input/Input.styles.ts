import { FormControl, FormHelperText, Input } from "@mui/material";
import { styled } from "@mui/system";

export const Form = styled(FormControl)({
  width: "100%",
  "& label": {
    fontWeight: 600,
    color: "#555555",
  },
  "& label.Mui-focused": {
    color: "#FF002F",
    fontWeight: 600,
  },
  "& div": {
    borderRadius: "10px",
    background: "#EEEEEE",
    border: "0px",
    "& input":{
      border: "0px",
      textAlign: "center",
    },
  },
});
export const HelpText = styled(FormHelperText)({
  fontWeight: 600,
  fontSize: "0.65em",
  "&.red": {
    color: "#C71D1D",
  },
  "&.green": {
    color: "#5D9D3E",
  },
});
export const InputForm = styled(Input)({

});