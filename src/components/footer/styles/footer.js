import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 7rem 3rem;
    margin: auto;

    @media (min-width: 1000px) {
        padding: 7rem 5.6rem;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 1.5rem;

    @media (min-width: 1000px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Break = styled.div``;

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
    margin-bottom: 2rem;
    font-size: 1.5rem;

    @media (min-width: 600px) {
        font-size: 1.3rem;
    }
`;

export const Title = styled.p`
    margin-bottom: 4rem;
    font-size: 1.6rem;
`;

export const Text = styled.p`
    margin-bottom: 4rem;
    font-size: 1.5rem;

    @media (min-width: 600px) {
        font-size: 1.3rem;
    }
`;
