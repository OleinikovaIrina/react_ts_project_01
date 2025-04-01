import { ChangeEvent, useEffect, useState } from "react"
import Input from "../../components/Input/Input"

import { Counter, Homework11Container } from "./styles";

function Homework11() {
    const [count, setCount] = useState<number>(-1);

    const [exampleValueFirst, setExampleValueFirst] = useState<string>('')
    const changeExampleValueFirst = (event: ChangeEvent<HTMLInputElement>) => {
        setExampleValueFirst(event.target.value)}

    const [exampleValueSecond, setExampleValueSecond] = useState<string>('')
    const changeExampleValueSecond = (event: ChangeEvent<HTMLInputElement>) => {
            setExampleValueSecond(event.target.value)
        }
        useEffect(() => {

            setCount((prevValue) => prevValue + 1);
        }, [exampleValueFirst]);

        return (
            <Homework11Container>

                <Input name='example1' value={exampleValueFirst} onChange={changeExampleValueFirst} />
                <Input name='example2' value={exampleValueSecond} onChange={changeExampleValueSecond} />
                <Counter>Количество изменений: {count}</Counter>

            </Homework11Container>
        )
    }
    export default Homework11