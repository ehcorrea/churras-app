import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.white.main};
    border-radius: ${theme.rfvalue(0)}px;
    bottom: 0;
    elevation: 3;
    flex-direction: row;
    justify-content: space-around;
    padding: ${theme.rhvalue(20)}px;
    shadow-color: ${theme.colors.black.main};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    width: 100%;
  `}
`;
