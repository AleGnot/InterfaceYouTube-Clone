import { useContext } from "react";
import Header from "../../components/header";
import Menu from "../../components/sidemenu";
import { UserContext } from "../../contexts/userContext";
import { MenuContext } from "../../contexts/menuContext";
import { BigImage, ButtonIcon, Feed, Subtitle, Title, UnloggedButton } from "./style";
import { useNavigate } from "react-router-dom";

/* Images */
import subImg from "../../assets/Menu/subscribe.png";
import Guest from "../../assets/Header/circle-user.png";

function Subscriptions() {
    const { login } = useContext(UserContext);
    const { isMenuOpen } = useContext(MenuContext);
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <Feed openmenucheck={isMenuOpen}>
                    {login ?
                        <>
                            <BigImage alt="" src={subImg} />
                            <Title> Novos vídeos recomendados </Title>
                            <Subtitle> Inscreva-se para ver os vídeos mais recentes dos canais que você adora </Subtitle>
                        </>
                        :
                        <>
                            <BigImage alt="" src={subImg} />
                            <Title> Não perca os novos vídeos </Title>
                            <Subtitle> Faça login para ver as atualizações dos seus canais favoritos do YouTube </Subtitle>
                            <UnloggedButton onClick={() => navigate('/login')}>
                                <ButtonIcon alt="" src={Guest} />
                                <span> Fazer Login </span>
                            </UnloggedButton>
                        </>
                    }
                </Feed>
            </div>
        </div>
    )
}

export default Subscriptions;