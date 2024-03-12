import { MenuContext } from "../../contexts/menuContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import {
    Container, MenuItem, ButtonIcon, FirstSection
} from "./styles";

/* Section components */
import LogUserSec from "./sections/secondSec";
import SectionTerms from "./sections/termSection/terms";
import ConfigSec from "./sections/configurationSec/configsec";
import YoutubeMore from "./sections/morefromyt";
import Explorer from "./sections/ExplorerSection";
import ChannelSub from "./sections/SubChannelSec";

/* Images */
import Home from "../../assets/Menu/home.png";
import Shorts from "../../assets/Menu/ShortsIcon.png";
import Incriptions from "../../assets/Menu/subscribe.png";
import Library from "../../assets/Menu/library.png";
import History from "../../assets/Menu/history.png";

function Menu() {
    const { isMenuOpen } = useContext(MenuContext);
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    return (
        <Container openmenucheck={isMenuOpen}>
            <FirstSection openmenucheck={isMenuOpen}>                                           {/* initial section */}
                <MenuItem openmenucheck={isMenuOpen} onClick={() => navigate('/')}>
                    <ButtonIcon alt="" src={Home} />
                    <span>Início</span>
                </MenuItem>

                <MenuItem openmenucheck={isMenuOpen} onClick={() => navigate('/shorts')}>
                    <ButtonIcon alt="" src={Shorts} />
                    <span>Shorts</span>
                </MenuItem>

                <MenuItem openmenucheck={isMenuOpen} onClick={() => navigate('/subscriptions')}>
                    <ButtonIcon alt="" src={Incriptions} />
                    <span>Inscrições</span>
                </MenuItem>
            </FirstSection>

            {login ?
                <FirstSection openmenucheck={isMenuOpen}>                                           {/* second section  with login */}
                    <MenuItem openmenucheck={isMenuOpen}>
                        <ButtonIcon alt="" src={Library} />
                        <span>Biblioteca</span>
                    </MenuItem>

                    <MenuItem openmenucheck={isMenuOpen} onClick={() => navigate('/history')}>
                        <ButtonIcon alt="" src={History} />
                        <span>Histórico</span>
                    </MenuItem>

                    <LogUserSec />           {/* logged itens */}
                </FirstSection>
                :
                <FirstSection openmenucheck={isMenuOpen}>                                           {/* second section without login */}
                    <MenuItem openmenucheck={isMenuOpen}>
                        <ButtonIcon alt="" src={Library} />
                        <span>Biblioteca</span>
                    </MenuItem>

                    <MenuItem openmenucheck={isMenuOpen} onClick={() => navigate('/history')}>
                        <ButtonIcon alt="" src={History} />
                        <span>Histórico</span>
                    </MenuItem>
                </FirstSection>
            }

            <ChannelSub />

            <Explorer />

            <YoutubeMore />

            <ConfigSec />

            <SectionTerms />
        </Container>
    )
}

export default Menu;