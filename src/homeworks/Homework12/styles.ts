import styled from "@emotion/styled";
import backImage from '../../assets/backgraundimage.jpg'

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-color: rgb(241, 231, 83);
  background-image: url(${backImage});
  background-position:  center;
  background-size: cover;
`;

export const FactWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 min-width: 500px;
 min-height: 400px;
 padding: 30px;
 background-color: white;
 border-radius: 10px;
 font-size: 24px;
 color:rgb(66, 113, 20);
 font-weight: bold;
 text-align: justify; 
`;
export const Error =styled.div`
 font-size: 28px;
 color: red;
 font-weight: bold;
`;

