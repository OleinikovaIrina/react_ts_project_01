import { CardInfo, DescriptionCard, TitleCard } from "./styles";

function Homework09() {
    return (
        <div>
            <CardInfo vipTitle  >
                <TitleCard>VIP Пользователь</TitleCard>
                <DescriptionCard>
                    Премиум-доступ, расширенные функции и приоритетная поддержка.
                </DescriptionCard>
            </CardInfo>

            <CardInfo   >
                <TitleCard>Обычный Пользователь</TitleCard>
                <DescriptionCard>
                    Стандартный доступ, базовые функции и поддержка в порядке очереди.
                </DescriptionCard>
            </CardInfo>
        </div>
    );
}

export default Homework09;