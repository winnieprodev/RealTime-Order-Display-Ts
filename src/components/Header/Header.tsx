import React from "react";

import * as Styled from "./header.styled";


const Header = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Header>{children}</Styled.Header>
);

const AlignLeft = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.AlignLeft>{children}</Styled.AlignLeft>
);

const AlignRight = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.AlignRight>{children}</Styled.AlignRight>
);

Header.AlignLeft = AlignLeft;
Header.AlignRight = AlignRight;

export default Header;
