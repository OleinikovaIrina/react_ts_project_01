import styled from "@emotion/styled";

interface MainButtonStyledProps {
  danger?: boolean
}


export const Homework10Container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items:center;
  gap: 40px;
  flex: 1;
  padding: 50px;
  background-color: #D4E9ED;
`



export const MainButton = styled.button<MainButtonStyledProps>`
  width: 300px;
  height: fit-content;
  padding: 20px;
  background: ${({ danger }) => danger ? 'red' : 'rgb(17, 48, 127)'};
  border: none;
  border-radius: 10px;
  font-size: 26px;
  color: white;
  cursor: pointer;
`

