import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { MenuSection, MenuItem, ButtonIcon } from "./styles";

/* Images */
import YTkids from "../../../../assets/Menu/Sections/sec-more/ytKids.png";
import YTstudio from "../../../../assets/Menu/Sections/sec-more/YTStudio.png";
import YTmusic from "../../../../assets/Menu/Sections/sec-more/YTMusic.png";
import YTpremium from "../../../../assets/Menu/Sections/sec-more/YtPremium.png";

const itens = [
    {name: 'YouTube Premium', img: YTpremium, link: '/'},
    {name: 'YouTube Studio', img: YTstudio, link: '/'},
    {name: 'YouTube Music', img: YTmusic, link: '/'},
    {name: 'YouTube Kids', img: YTkids, link: '/'},
]

function YoutubeMore() {
    const {isMenuOpen} = useContext(MenuContext);

    return(
        <MenuSection openmenucheck={isMenuOpen}>
            <h1>Mais do Youtube</h1>
            {itens.map((itens) => (
                <MenuItem>
                    <ButtonIcon alt="" src={itens.img} />
                    <span>{itens.name}</span>
                </MenuItem>
            ))}
        </MenuSection>
    )
}

export default YoutubeMore;