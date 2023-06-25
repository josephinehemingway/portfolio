// @ts-ignore
import styled from "styled-components";

export const StyledTitle = styled.h1`
    && {
        margin-top: ${(props: { margintop: any; }) =>
              props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: any; }) =>
              props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins-SemiBold, sans-serif;
        color: #fff;
        font-weight: 600;
        font-size: calc(45px + 1.5vw);
        line-height: calc(45px + 1.5vw);
    }
`;

export const StyledText = styled.p`
    && {
        margin-top: ${(props: { margintop: any; }) =>
              props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: any; }) =>
              props.marginbottom ? props.marginbottom : "0"};
        font-family: Poppins-SemiBold, sans-serif;
        color: #fff;
        font-size: calc(20px + 1vw);
        line-height: calc(25px + 1vw);
    }
`;
