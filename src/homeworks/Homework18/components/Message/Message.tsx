import { useContext } from "react";
import { ButtonContainer, MessageText, MessageWrapper } from "./styles";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import Button from "../../../../components/Button/Button";

function Message() {
  const { message, setMessage  } = useContext(BlogManagementContext); 
  const handleDelete = () => {
    setMessage(""); // Очистка сообщения
  };

  return (
    <MessageWrapper>
      {message && <MessageText>{message}</MessageText>}

      {message && (
        <ButtonContainer>
          <Button onClick={handleDelete} name="Delete Post" danger />
        </ButtonContainer>
      )}
    </MessageWrapper>
  );
}

export default Message;