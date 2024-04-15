import { useContext } from "react";
import Header from "../../components/header";
import Menu from "../../components/sidemenu";
import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/userContext";
import { BigImage, ButtonIcon, Feed, HistoryContent, ButtonsContainer, UnloggedButton, ButtonCell } from "./style";
import { useNavigate } from "react-router-dom";

/* Images */
import History from "../../assets/Menu/history.png";
import Guest from "../../assets/Header/circle-user.png";

function Historic() {
    const { isMenuOpen } = useContext(MenuContext);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <Feed openmenucheck={isMenuOpen}>
                    {login ?
                        <HistoryContent logado={login} >
                            <h1> Histórico de Exibição </h1>
                            <span> Esta lista não tem vídeos. </span>
                        </HistoryContent>
                        :
                        <HistoryContent logado={login} >
                            <BigImage alt="" src={History} />
                            <h1> Controle o que você assiste </h1>
                            <span> O histórico de exibição não é visível quando você está desconectado. </span>

                            <UnloggedButton onClick={() => navigate('/login')}>
                                <ButtonIcon alt="" src={Guest} />
                                <h2> Fazer Login </h2>
                            </UnloggedButton>
                        </HistoryContent>
                    }

                    <ButtonsContainer>
                        <ButtonCell> 🗑️ Limpar todo o histórico de exibição </ButtonCell>
                        <ButtonCell> <a>||</a> Pausar o histórico de visualizações </ButtonCell>
                        <ButtonCell> 🗑️ Limpar todo o histórico de enquete </ButtonCell>
                        <ButtonCell> <a>||</a> Pausar o histórico de pesquisa </ButtonCell>
                    </ButtonsContainer>
                </Feed>
            </div>
        </div>
    )
}

export default Historic;