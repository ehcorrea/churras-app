import styled, { css } from 'styled-components/native';

type ContainerProps = {
  bottom?: number;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, bottom }) => css`
    align-items: center;
    align-self: center;
    background-color: ${theme.colors.white.main};
    bottom: 0;
    elevation: 3;
    flex-direction: row;
    height: ${theme.rhvalue(65 + (bottom ? 5 : 0))}px;
    justify-content: space-around;
    padding: ${theme.rhvalue(20)}px;
    shadow-color: ${theme.colors.black.main};
    shadow-offset: 0px 1px;
    shadow-opacity: 0.2;
    shadow-radius: 3px;
    width: 100%;
  `}
`;
