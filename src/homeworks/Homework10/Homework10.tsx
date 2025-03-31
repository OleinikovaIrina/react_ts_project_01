import { Homework10Container, MainButton } from "../../components/Button/styles";

function Homework10 (){
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return(
<Homework10Container>
        <MainButton  onClick={handleClick}
        disabled={false}
        type="submit">SEND</MainButton>

        <MainButton danger onClick={handleClick}
        disabled={false}
        type="submit">DELETE</MainButton>
</Homework10Container>
    )
}
export default Homework10