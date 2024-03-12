import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { MenuSection, MenuItem, ButtonIcon, UnloggedButton } from "./styles";
import { UserContext } from "../../../../contexts/userContext";
import { useNavigate } from "react-router-dom";

/* Images */
import Guest from "../../../../assets/Header/circle-user.png";

const inscriptions = [                    /* Just a channel to this section can be viseble */
    {
        name: 'Yung Lixo',
        img: 'https://yt3.googleusercontent.com/ytc/AOPolaTG6CMQ2icZVPaiVQV5fIkNehvAigKupLf6h5TGog=s176-c-k-c0x00ffffff-no-rj',
        link: '/'
    }
]

function ChannelSub() {
    const { isMenuOpen } = useContext(MenuContext);
    const { login } = useContext(UserContext);
    const navigate = useNavigate()

    return (
        <>
            {login ?
                <MenuSection openmenucheck={isMenuOpen}>
                    <h1>Incrições</h1>
                    {inscriptions.map((itens) => (
                        <MenuItem>
                            <ButtonIcon alt="" src={itens.img} height={'30px'} />
                            <span>{itens.name}</span>
                        </MenuItem>
                    ))}
                </MenuSection>
                :
                <MenuSection openmenucheck={isMenuOpen}>
                    <span>Faça login para curtir vídeos, comentar e se inscrever.</span>

                    <UnloggedButton onClick={() => navigate('/login')}>
                        <ButtonIcon alt="" src={Guest} height={'23px'} />
                        <span>Fazer login</span>
                    </UnloggedButton>
                </MenuSection>
            }
        </>
    )
}

export default ChannelSub;