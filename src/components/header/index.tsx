import { MenuContext } from "../../contexts/menuContext";
import { UserContext } from "../../contexts/userContext";
import { DropDownContext } from "../../contexts/dropDownContext";
import { SearchContext } from "../../contexts/searchContext";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* Components */
import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    UnloggedButton,
} from "./style";
import DropDownMenu from "../dropDownMenu";

/* Images */
import hamburguerIcon from "../../assets/Header/hamburger.png";
import Logo from "../../assets/Header/YouTube-Logo.png";
import SearchIcon from "../../assets/Header/search.png";
import MicIcon from "../../assets/Header/microfone-gravador.png";
import VideoIcon from "../../assets/Header/video.png";
import NotifyIcon from "../../assets/Header/sino.png";
import Guest from "../../assets/Header/circle-user.png";
import ThreeDots from "../../assets/Header/dots.png";
import Close from "../../assets/Header/cross.png";

function Header() {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const navigate = useNavigate();

    const { login, user } = useContext(UserContext);
    const characterPic = user.email[0];

    const { isDropOpen, setIsDropOpen } = useContext(DropDownContext);

    /* Search Relateds */
    const { setSearchQ } = useContext(SearchContext);

    const [input, setInput] = useState('');
    const refInput = useRef<HTMLInputElement>(null);

    function handleInput(inputValue: string) {
        setInput(inputValue)
    }

    function handleClear() {
        setInput('')
    }

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setIsMenuOpen(!isMenuOpen)} margin="0 10px 0 0" >
                    <ButtonIcon alt="" src={hamburguerIcon} margin="10px 0" />
                </ButtonContainer>

                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt=""
                    src={Logo}
                    onClick={() => navigate('/')}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput
                        ref={refInput}
                        value={input}
                        placeholder='Pesquisar'
                        onChange={(e) => { handleInput(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setSearchQ(input)
                                navigate('/search')
                            }
                        }}
                    />
                    {input.trim() !== '' && (
                        <ButtonContainer margin="0" onClick={() => handleClear()}>
                            <ButtonIcon alt="" src={Close} margin="10px 0" />
                        </ButtonContainer>
                    )}
                </SearchInputContainer>

                <SearchButton
                    onClick={() => {
                        if (input.trim() === '') {
                            return alert('Digite uma palavra para pesquisar')
                        }
                        setSearchQ(input);
                        navigate('/search')
                    }}
                >
                    <ButtonIcon alt="" src={SearchIcon} margin="8px 0" />
                    <span> Pesquisar </span>
                </SearchButton>

                <ButtonContainer margin="0 0 0 10px" >
                    <ButtonIcon alt="" src={MicIcon} margin="10px 0" />
                    <span> Pesquisa de Voz </span>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                {login ?
                    <>
                        <ButtonContainer margin="0 0 0 10px" >
                            <ButtonIcon alt="" src={VideoIcon} margin="10px 0" />
                            <span> Enviar </span>
                        </ButtonContainer>

                        <ButtonContainer margin="0 10px 0 10px" >
                            <ButtonIcon alt="" src={NotifyIcon} margin="10px 0" />
                            <span> Notificações </span>
                        </ButtonContainer>

                        <ButtonContainer margin="0" userBG={true} onClick={() => setIsDropOpen(!isDropOpen)} >
                            {characterPic.toUpperCase()}
                        </ButtonContainer>

                        <DropDownMenu open={isDropOpen} logged="height: 95vh; top: 7px; right: 65px" />
                    </>
                    :
                    <>
                        <ButtonContainer margin="0 10px 0 0" onClick={() => setIsDropOpen(!isDropOpen)} >
                            <ButtonIcon alt="" src={ThreeDots} margin="10px 0" />
                        </ButtonContainer>

                        <UnloggedButton onClick={() => navigate('/login')} >
                            <ButtonIcon alt="" src={Guest} />
                            <span>Fazer login</span>
                        </UnloggedButton>

                        <DropDownMenu open={isDropOpen} logged="top: 55px; right: 165px" />
                    </>
                }
            </HeaderButtons>

        </Container>
    )
}

export default Header;