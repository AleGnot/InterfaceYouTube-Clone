import { Container, DescriptContainer, TextCard, TextContainer, Title, TumbNailImg } from "./styles";

interface ShortsProps {
    thumb: string,
    title: string,
    views: string,
}

function ShortsComponent({ thumb, title, views }: ShortsProps) {
    return (
        <Container>
            <TumbNailImg src={thumb} />
            <DescriptContainer>
                <TextContainer>
                    <Title>{title}</Title>
                    <TextCard>{views} de visualizações</TextCard>
                </TextContainer>
            </DescriptContainer>
        </Container>
    );
}

export default ShortsComponent;
