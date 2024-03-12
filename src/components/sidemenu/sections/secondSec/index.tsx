import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { SecondSection, MenuItem, ButtonIcon } from "./styles";
import { useNavigate } from "react-router-dom";

/* Images */
import YourVideo from "../../../../assets/Menu/Sections/sec-dois/userVideos.png";
import Clock from "../../../../assets/Menu/Sections/sec-dois/clock.png";
import Cuts from "../../../../assets/Menu/Sections/sec-dois/cut-out.png";
import Liked from "../../../../assets/Menu/Sections/sec-dois/like.png";
import Playlist from "../../../../assets/Menu/Sections/sec-dois/playlist.png";

const itens = [
    { name: 'Seus vídeos', img: YourVideo, link: '/channel' },
    { name: 'Assistir mais tarde', img: Clock, link: '/' },
    { name: 'Seus Clipes', img: Cuts, link: '/' },
    { name: 'Vídeos marcados com gostei', img: Liked, link: '/' },
    { name: 'Playlist 1', img: Playlist, link: '/' },
]

function LogUserSec() {
    const { isMenuOpen } = useContext(MenuContext);
    const navigate = useNavigate()

    return (
        <SecondSection openmenucheck={isMenuOpen}>
            {itens.map((itens) => (
                <MenuItem onClick={() => navigate(itens.link)}>
                    <ButtonIcon alt="" src={itens.img} />
                    <span>{itens.name}</span>
                </MenuItem>
            ))}
        </SecondSection>
    )
}

export default LogUserSec;