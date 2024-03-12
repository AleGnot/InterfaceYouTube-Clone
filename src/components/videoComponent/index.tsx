import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";
import {
    ChannelImg,
    Container,
    DescriptContainer,
    TextCard,
    TextContainer,
    Title,
    TumbNailImg
} from "./styles";

interface VideoProps {
    thumb: string,
    cImg: string,
    title: string,
    cName: string,
    views: string,
    date: string
}

function VideoComponent({ thumb, cImg, title, cName, views, date }: VideoProps) {
    const { isMenuOpen } = useContext(MenuContext);

    return (
        <Container openmenucheck={isMenuOpen}>
            <TumbNailImg src={thumb} alt="thumbnail" openmenucheck={isMenuOpen} />
            <DescriptContainer>
                <ChannelImg>
                    {cImg.charAt(0).toUpperCase()}
                </ChannelImg>
                <TextContainer>
                    <Title>{title}</Title>
                    <TextCard>{cName}</TextCard>
                    <TextCard>{views} visualizações • há {date}</TextCard>
                </TextContainer>
            </DescriptContainer>
        </Container>
    )
}

export default VideoComponent;