import styled from 'styled-components';

export const Container = styled.section`
    background-color: #000;
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: #fff;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (min-width: 1000px) {
        flex-direction: ${({ direction }) => direction};
        justify-content: space-between;
    }
`;

export const Pane = styled.div`
    width: 100%;
    text-align: center;

    @media (min-width: 1000px) {
        width: 50%;
    }
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: 0.8rem;
    text-align: center;
    margin-bottom: 2.5rem;

    @media (min-width: 1000px) {
        text-align: initial;
        font-size: 5rem;
    }
`;

export const SubTitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    text-align: center;

    @media (min-width: 1000px) {
        font-size: 2.6rem;
        text-align: initial;
    }
`;

export const Image = styled.img`
    max-width: 100%;
`;
