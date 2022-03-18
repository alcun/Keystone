import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? '#12b886' : '#000')};
white-space: nowrap;
outline: none;
border: 2px #fff solid;
border-radius: 5px;
min-width: 100px;
max-width: 200px;
cursor:pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: ${({primary}) => (primary ? '#fff' : '#fff')};
font-size: ${({big}) => (big ? '20px' : '14px')};
font-weight: 550;
&:hover {
     transform: translateY(-2px);
    background: white;
    color: #12b886;
    border: 2px #12b886 solid;

}
`;