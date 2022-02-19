import React from "react";
import { Typography } from "@material-ui/core";
import * as S from "./style";

const Text = ({ size = "14px", children, bold, className }) => {
  return (
    <Typography component={'span'} className={className}>
      <S.Text size={size} bold={bold}>
        {children}
      </S.Text>
    </Typography>
  );
};

export default Text;
