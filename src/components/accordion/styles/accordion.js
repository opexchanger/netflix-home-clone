import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 0.8rem solid #222;
    padding: 7rem 4.5rem;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 1rem;

    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 0.8rem;
    color: white;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 5rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    user-select: none;
    margin-bottom: 0.1rem;
    background: #303030;
    padding: 0 1.2em;

    h3 {
        font-size: 2.2rem;
        font-weight: normal;
    }

    img {
        filter: brightness(0) invert(1);
        width: 16px;

        @media (min-width: 600px) {
            width: 24px;
        }
    }

    @media (min-width: 600px) {
        h3 {
            font-size: 2.4rem;
        }
    }
`;

export const Body = styled.div`
    max-width: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.4em 1.2em;
    user-select: none;
    align-items: center;

    p {
        font-size: 1.8rem;
    }

    @media (min-width: 600px) {
        font-size: 1.8rem;
        line-height: 2.2rem;

        p {
            font-size: 1.6rem;
        }
    }
`;
