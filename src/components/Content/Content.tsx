import React from "react";
import { Container } from 'reactstrap';
import * as Styled from "./content.styled";

const Content = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Content>
    <Container fluid>{children}</Container>
  </Styled.Content>
);

export default React.memo(Content);
