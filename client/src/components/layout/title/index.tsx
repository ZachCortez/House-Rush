import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, yariga, SBLogoCircle, HRlogo } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={HRlogo} alt="HRLogo" width="65px" />
        ) : (
          <img src={HRlogo} alt="HRLogo" width="210px" />
        )}
      </Link>
    </Button>
  );
};
