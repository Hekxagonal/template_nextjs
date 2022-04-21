import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';

export const Container = styled.div`
  border: 1px solid black;
  max-width: 500px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  margin-bottom: 7px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  text-align: right;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Type = styled.div`
  align-self: flex-end;
  margin-bottom: 5px;
  color: gray;
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
`;

export const shortDescription = styled.div``;

export const ToolsWrapper = styled.div``;

export const Tool = styled.div`
  font-family: 'Source Code Pro', monospace;
  font-style: italic;
`;

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
