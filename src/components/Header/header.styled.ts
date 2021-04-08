import styled from "styled-components";

export const Header = styled.div`
  display: grid;
  grid-template-columns: [left] 1fr [right];
  border-bottom: 1px solid #FFFFFF;
`;

export const AlignLeft = styled.div`
  grid-area: left;
  align-self: center;
`;

export const AlignRight = styled.div`
  grid-area: right;
  align-self: center;
`;