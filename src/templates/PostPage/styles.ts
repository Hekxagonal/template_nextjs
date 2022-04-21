import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ColumnRight = styled.div`
  max-width: 50%;
`;

export const Header = styled.div`
  margin-top: 40px;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ShortDescription = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
`;

export const Category = styled.div`
  font-family: 'Source Code Pro', monospace;
`;

export const Level = styled.div`
  align-self: flex-end;
`;

export const ToolsWrapper = styled.div``;

export const Tool = styled.div`
  font-family: 'Source Code Pro', monospace;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const README = styled.div``;

export const TagWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid gray;
  margin-top: 10px;
  padding-top: 10px;
`;

export const Tag = styled.div`
  margin-right: 10px;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 11px;
  padding: 5px;
  border-radius: 10px;
  font-family: 'Source Code Pro', monospace;
`;

export const Team = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`;

export const TeamIcon = styled(BsPeopleFill)`
  margin-right: 5px;
`;

export const Button = styled.button`
  margin-top: 30px;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const Description = styled.div`
  color: gray;
  font-size: 12px;
`;

export const Extra = styled.div`
  max-width: 300px;
  color: gray;
  font-size: 12px;
  margin-top: 15px;
`;
