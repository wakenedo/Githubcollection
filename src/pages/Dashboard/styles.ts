import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 48px;
    color: #04d361;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
` 
export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0,24px;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 160px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            //Uma das vantages do Styled-Components é poder usar variáveis no 'css', no caso aqui utilizaremos a
            //biblioteca polished que disponibiliza vários efeitos entre eles escurecer uma cor que sera 
            //utilizado no hover do botão.
            background-color: ${shade(0.2,'#04d361')};
        }
    }
` 