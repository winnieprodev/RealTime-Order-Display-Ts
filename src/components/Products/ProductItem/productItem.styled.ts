import styled from "styled-components";
import { primaryColor } from "styles/colors";

export const Block = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: white;
  border-radius: 10px;
`;

export const Content = styled.div`
  position: relative;
  color: #808080;
  width: 100%;
  height: auto;
  background: #F4F4F4;
  border-radius: 10px;
  align-items: center;
  justify-content: center;

  &:hover img {
    opacity: 0.1;
    filter: blur(4px);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  mix-blend-mode: darken;
`;

export const InfoSection = styled.div`
  position: absolute;
  padding: 5px;
  border-radius: 10px;
  transition: .5s ease;
  opacity: 0;
  top: 0;
  left: 0;

  &:hover {
    background: rgba(244, 244, 244, 0.5);
    backdrop-filter: blur(4px);
  }
`;

export const Title = styled.p`
  padding: 5px;
  color: #000000;
  font-size: 14px;
  font-weight: bold;
`;

export const Detail = styled.span`
  padding: 5px;
  color: #000000;
  font-size: 12px;
  font-weight: bold;
`;

export const Icon = styled.div`
  position: absolute;
  padding: 5px;
  bottom: 10px;
  right: 10px;
  color: #000000;
  font-size: 20px;
`;
