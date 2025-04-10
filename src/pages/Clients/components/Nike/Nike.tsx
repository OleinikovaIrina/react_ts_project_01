import { CompanyContainer, CompanyTitle, NikeWrapper, Image } from "./styles"

function Nike() {

    return (
        <NikeWrapper>
            <CompanyTitle>Nike</CompanyTitle>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxseXCmTCy5w2keH1YpmdhQ5xGGSc2wqCsg&s' />
            <CompanyContainer>
                Nike Inc. (englisch offiziell [ˈnaɪki],[2] angelehnt an altgriechisch νίκη níkē [níːkɛː], deutsch ‚Sieg‘, bzw. Nike, die griechische Siegesgöttin) ist ein 1964 bzw. 1971 gegründeter, international tätiger, US-amerikanischer Sportartikelhersteller. Sein Firmensitz ist Beaverton im US-Bundesstaat Oregon. Nike ist seit 1989 weltweit führender Sportartikelanbieter.[3] Nike kam Anfang 2024 auf eine Marktkapitalisierung von 160,5 Milliarden US-Dollar, womit es zu den 100 wertvollsten Unternehmen weltweit zählt.
            </CompanyContainer>
        </NikeWrapper>

    )
}
export default Nike