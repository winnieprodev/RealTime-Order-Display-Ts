import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  secondaryColorLighter,
} from "styles/colors";

export const SearchBar = styled.div`
  border-radius: 10px;
  height: 30px;
  display: flex;
  align-items: center;
  background: ${secondaryColor};
  padding: 6px 12px;
  position: relative;
  transition: background ease 0.2s;

  &:hover,
  &:active {
    background: ${secondaryColorLighter};
  }
`;

export const Icon = styled.div`
  font-size: 22px;
  padding-right: 12px;
  border-right: 2px solid #212529;
  margin-right: 12px;
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-left: 60px;
  width: calc(100% - 60px);
  outline: none;
  border: none;
  background: none;
`;
