import { useNavigate } from "react-router-dom";
import { AdidasWrapper, Image, CompanyTitle, CompanyContainer, ButtonContainer } from "./styles"
import Button from "../../../../components/Button/Button";

function Adidas() {
    const navigate = useNavigate();
   

    const goToNikePage = ()=>{
        navigate('/clients/nike')
      }

    return (
        <AdidasWrapper>
            <CompanyTitle>Adidas</CompanyTitle>
            <Image src='https://pngimg.com/d/adidas_PNG12.png' />
            <CompanyContainer>
                Die Adidas AG (Eigenschreibweise: adidas) ist ein international tätiger deutscher Sportartikelhersteller mit Sitz in Herzogenaurach bei Nürnberg.
                Das Unternehmen bietet weltweit über eigene Ladengeschäfte und den Einzelhandel Bekleidung, Schuhe, Sportausrüstung, Accessoires sowie Lizenzprodukte wie Uhren, Kosmetik und Brillen an. Der Konzern gilt nach Nike als der zweitgrößte Sportartikelhersteller der Welt[3] und ist als bedeutender Ausstatter von berühmten Sportlern, Sportmannschaften und internationalen Sportveranstaltungen bekannt.
            </CompanyContainer>
           <ButtonContainer>
            <Button name="About Nike" onClick={goToNikePage}/>
           </ButtonContainer>
        </AdidasWrapper>

    )
}
export default Adidas