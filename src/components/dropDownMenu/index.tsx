import { useNavigate } from "react-router-dom";
import { Container, ProfileImg, UserSec } from "./style";
import BodySection from "./bodySec";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

interface DropDownMenuProps {
    open: boolean,
    logged: string
}

function DropDownMenu({ open, logged }: DropDownMenuProps) {
    const navigate = useNavigate();
    const { login, user } = useContext(UserContext);

    const characterPic = user.email[0];
    const userTag = user && user.name ? user.name.replace(/\s+/g, "") : "";
    const userName = userTag.toLowerCase();

    return (
        <Container isLogged={logged} isOpen={open}>
            {login ?
                <>
                    <UserSec>
                        <ProfileImg>{characterPic.toUpperCase()}</ProfileImg>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span>{user.name}</span>
                            <span>@{userName}</span>
                            <span style={{ marginTop: "10px" }}><a onClick={() => navigate('/channel')}>
                                Acessar seu canal
                            </a></span>
                        </div>
                    </UserSec>

                    <BodySection />
                </>
                :
                <BodySection />
            }

        </Container>
    );
}

export default DropDownMenu;