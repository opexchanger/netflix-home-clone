import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 2rem;
    flex-wrap: wrap;

    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: 0;
    border-right: 1px solid darkgray;
    padding: 1rem;
    height: 6rem;
    box-sizing: border-box;
    font-size: 1.8rem;

    @media (min-width: 1000px) {
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 3.2rem;
    border: 0;
    cursor: pointer;
    height: 5rem;
    margin-top: 2rem;
    font-weight: bold;

    @media (min-width: 1000px) {
        height: 6rem;
        font-size: 2.2rem;
        margin-top: 0;
        font-weight: normal;
        border-radius: 3px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    img {
        margin-left: 1rem;
        filter: brightness(0) invert(1);
        width: 1.4rem;

        @media (min-width: 1000px) {
            width: 2rem;
        }
    }

    &:hover {
        background: #f40612;
    }
`;

export const Text = styled.p`
    line-height: 2.2rem;
    color: white;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 1.9rem;
    }
`;
