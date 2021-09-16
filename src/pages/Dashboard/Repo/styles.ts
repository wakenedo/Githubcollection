import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: end;
    transition: color 0.2s;
    color: #a8a8b3;
        &:hover {
            color: #666666;
            }

   //Como o Link do React-router-dom na hora do build vira uma anchor
   //estilizamos com o 'a'
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        
        svg {
            margin-right: 2px;
        }
    }
`;

export const RepoInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50px;
        }

        div {
            margin-left: 24px;
            strong {
                font-size: 36px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #737380;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;
    }

    li {
        & + li {
           margin-left: 80px;
        }
        
        strong {
            display: block;
            font-size: 36px;
            color: #3d3d4d;
        }

        span {
            display: block;
            margin-top: 4px;
            color: #737380;
        }
    }
`;

export const Issues = styled.section``;