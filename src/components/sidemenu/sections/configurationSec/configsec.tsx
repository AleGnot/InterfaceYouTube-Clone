import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { MenuSection, MenuItem, ButtonIcon } from "./styles";

/* Images */
import Cog from "../../../../assets/Menu/Sections/sec-config/settings.png";
import Flag from "../../../../assets/Menu/Sections/sec-config/flag.png";
import Question from "../../../../assets/Menu/Sections/sec-config/interrogation.png";
import Exclamation from "../../../../assets/Menu/Sections/sec-config/square-exclamation.png";

const itens = [
    {name: 'Configurações', img: Cog, link: '/'},
    {name: 'Histórico de denúncias', img: Flag, link: '/'},
    {name: 'Ajuda', img: Question, link: '/'},
    {name: 'Enviar feedback', img: Exclamation, link: '/'},
]

function ConfigSec() {
    const {isMenuOpen} = useContext(MenuContext);

    return(
        <MenuSection openmenucheck={isMenuOpen}>
            {itens.map((itens) => (
                <MenuItem>
                    <ButtonIcon alt="" src={itens.img} />
                    <span>{itens.name}</span>
                </MenuItem>
            ))}
        </MenuSection>
    )
}

export default ConfigSec;