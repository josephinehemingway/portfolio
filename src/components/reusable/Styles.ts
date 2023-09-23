// @ts-ignore
import styled from "styled-components";

export const StyledTitle = styled.h1`
    && {
        margin-top: ${(props: { margintop: any; }) =>
              props.margintop ? props.margintop : "0"};
        margin-bottom: ${(props: { marginbottom: any; }) =>
              props.marginbottom ? props.marginbottom : "0"};
        margin-left: ${(props: { marginleft: any; }) =>
              props.marginleft ? props.marginleft : "0"};
        margin-right: ${(props: { marginright: any; }) =>
              props.marginright ? props.marginright : "2rem"};
        font-family: PlayfairDisplay-Italic, sans-serif;
        color: #fff;
        font-weight: 500;
        font-size: calc(35px + 5vw);
        line-height: calc(35px + 5vw);
    }
`;

export const StyledText = styled.p`
    && {
        margin-top: ${(props: { margintop: any; }) =>
              props.margintop ? props.margintop : "1 rem"};
        margin-bottom: ${(props: { marginbottom: any; }) =>
              props.marginbottom ? props.marginbottom : "0"};
        font-family: SaolDisplay-Regular, sans-serif;
        color: #fff;
        font-size: calc(20px + 1vw);
        line-height: calc(25px + 1vw);
    }
`;

export const StyledPara = styled.p`
    && {
        margin-top: ${(props: { margintop: any; }) =>
              props.margintop ? props.margintop : "1 rem"};
        margin-bottom: ${(props: { marginbottom: any; }) =>
              props.marginbottom ? props.marginbottom : "0"};
      //   font-family: SaolDisplay-Regular, sans-serif;
        color: #000;
        font-size: calc(25px + 0.2vw);
        line-height: calc(25px + 0.2vw);
    }
`;
