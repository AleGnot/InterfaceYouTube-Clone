import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { MenuSection, MenuItem, ButtonIcon } from "./styles";

/* Images */
import HotTopic from "../../../../assets/Menu/Sections/sec-explo/trending-topic.png";
import Bag from "../../../../assets/Menu/Sections/sec-explo/bag.png";
import Music from "../../../../assets/Menu/Sections/sec-explo/music.png";
import Movie from "../../../../assets/Menu/Sections/sec-explo/clapperboard.png";
import Live from "../../../../assets/Menu/Sections/sec-explo/live.png";
import Gamer from "../../../../assets/Menu/Sections/sec-explo/game.png";
import News from "../../../../assets/Menu/Sections/sec-explo/newspaper-folded.png";
import Sport from "../../../../assets/Menu/Sections/sec-explo/trophy.png";
import Learn from "../../../../assets/Menu/Sections/sec-explo/bulb.png";

const categories = [
    {name: 'Em alta', img: HotTopic, link: '/'},
    {name: 'Shopping', img: Bag, link: '/'},
    {name: 'Música', img: Music, link: '/'},
    {name: 'Filmes', img: Movie, link: '/'},
    {name: 'Ao vivo', img: Live, link: '/'},
    {name: 'Jogos', img: Gamer, link: '/'},
    {name: 'Notícias', img: News, link: '/'},
    {name: 'Esportes', img: Sport, link: '/'},
    {name: 'Aprender', img: Learn, link: '/'},
]

function Explorer() {
    const {isMenuOpen} = useContext(MenuContext);

    return(
        <MenuSection openmenucheck={isMenuOpen}>
            <h1>Explorar</h1>
            {categories.map((itens) => (
                <MenuItem>
                    <ButtonIcon alt="" src={itens.img} />
                    <span>{itens.name}</span>
                </MenuItem>
            ))}
        </MenuSection>
    )
}

export default Explorer;