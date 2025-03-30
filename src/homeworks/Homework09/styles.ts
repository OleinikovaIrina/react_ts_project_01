import styled from "@emotion/styled";

interface CardInfoStyledProps {
    vipTitle?: boolean

}

export const CardInfo = styled.div<CardInfoStyledProps>`
display: flex;
flex-direction: column;
border: 3px solid #00667D;
border-radius: 10px ;
align-items: center;
justify-content: center;
margin: 20px;
padding: 20px;
width:${({ vipTitle }) => vipTitle ? '400px' : '350px'};
height: ${({ vipTitle }) => vipTitle ? '320px' : '270px'};
background-color:${({ vipTitle }) => vipTitle ? '#1CEB89' : '#88EBC6'};
font-size: 24px;
margin-bottom: 20px;

`;
export const TitleCard = styled.h2`
color: #00667D;
padding: 30px;
text-align: center;
font-size: 40px;
font-weight:bold;
`

export const DescriptionCard = styled.h3`
font-size: 20px;
text-align: center;
`
