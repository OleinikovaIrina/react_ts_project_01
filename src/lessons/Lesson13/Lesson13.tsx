import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Lesson13Container, FotosWrapper, Error, FotoImage } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";
import { v4 } from "uuid";

function Lesson13() {
    const [fotos, setFotos] = useState<string[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [inputRequest, setInputRequest] = useState<string>("");


    const deleteFotos = () => {
        setFotos([]);
        setInputRequest("");
    };


    const changeInputRequest = (event: ChangeEvent<HTMLInputElement>) => {
        setInputRequest(event.target.value);
    };

    const FOTO_DOG_URL: string = "https://dog.ceo/api/breeds/image/random";


    const getFotos = async () => {
        setError(undefined)
        try {
            setIsLoading(true);
            const response = await axios.get(FOTO_DOG_URL);
            setFotos((prev) => [...prev, response.data.message])
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        getFotos();
    }, []);

    useEffect(() => {
        if (inputRequest) {
            getFotos();
        }
    }, [inputRequest]);

    return (
        <Lesson13Container>
            <FotosWrapper>
                {isLoading ? (
                    <Spinner />
                ) : (
                    fotos.map((foto) => (
                        <FotoImage
                            key={v4()}
                            style={{
                                backgroundImage: `url(${foto})`,
                            }}
                        />
                    ))
                )}
            </FotosWrapper>

            <Input
                name="Inp"
                placeholder="Введите запрос"
                value={inputRequest}
                onChange={changeInputRequest}
            />

            <Button name="GET MORE IMAGES" onClick={getFotos} disabled={isLoading} />


            {fotos.length > 0 && (
                <Button name="DELETE ALL DATA" onClick={deleteFotos} disabled={isLoading} />
            )}

            <Error>{error}</Error>
        </Lesson13Container>
    );
}

export default Lesson13;
