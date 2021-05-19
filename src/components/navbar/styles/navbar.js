import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    margin: 0 30px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1000px) {
        margin: 0 56px;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const MenuItem = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;

export const Button = styled.a`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }
`;

export const Search = styled.div``;

export const Profile = styled.div``;
