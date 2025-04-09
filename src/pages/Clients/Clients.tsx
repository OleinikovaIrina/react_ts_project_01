import { ClientsWrapper, Title, StyledLink } from "./styles"

function Clients() {

    return (
        <ClientsWrapper>
            <Title>Clients pages</Title>

            <StyledLink to='adidas'>Adidas</StyledLink>
            <StyledLink to='nike'>Nike</StyledLink>
            <StyledLink to='puma'>Puma</StyledLink>

        </ClientsWrapper>

    )
}

export default Clients