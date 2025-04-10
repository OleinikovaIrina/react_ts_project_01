import { useState, createContext } from "react"
import Button from "../../../../components/Button/Button"
import Input from "../../../../components/Input/Input"
import Card from "../Card/Card"
import { BlogManagementTitle, BlogManagementWrapper } from "./styles"
import { BlogContextInterface } from "./types"

export const BlogManagementContext = createContext<BlogContextInterface>({
    message: "",
    setMessage: () => { },
})

function BlogManagement() {

    const [inputMessage, setInputMessage] = useState<string>('')
    const [savedMessage, setSavedMessage] = useState<string>('')



    const handlePost = () => {
        setSavedMessage(inputMessage);
        setInputMessage("");
    };

    return (
        <BlogManagementContext.Provider value={{ message: savedMessage, setMessage: setSavedMessage }}>

            <BlogManagementWrapper>
                <BlogManagementTitle>Blog Management</BlogManagementTitle>

                <Input name="messageInput" placeholder="Введите сообщение" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                <Button name="Post" onClick={handlePost} />
                <Card />
            </BlogManagementWrapper>
        </BlogManagementContext.Provider>
    )
}
export default BlogManagement

