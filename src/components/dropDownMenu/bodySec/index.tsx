import { AccSec, ButtonDrop, ButtonIcon } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import Unloged from "./unloged";

/* Images */
import Google from "../../../assets/DropDownMenu/google.png";
import Accounts from "../../../assets/DropDownMenu/users.png";
import Exit from "../../../assets/DropDownMenu/exit.png";
import { DropDownContext } from "../../../contexts/dropDownContext";

function BodySection() {
    const { login, logOut } = useContext(UserContext);
    const { isDropOpen, setIsDropOpen } = useContext(DropDownContext)

    return (
        <>
            {login ?
                <>
                    <AccSec>
                        <ButtonDrop>
                            <ButtonIcon alt="" src={Google} />
                            <span>Conta google</span>
                        </ButtonDrop>

                        <ButtonDrop>
                            <ButtonIcon alt="" src={Accounts} />
                            <span>Mudar de conta</span>
                            <span style={{ marginLeft: "100px" }}> ⮞ </span>
                        </ButtonDrop>

                        <ButtonDrop onClick={() => {
                            logOut()
                            setIsDropOpen(!isDropOpen)
                        }}>
                            <ButtonIcon alt="" src={Exit} />
                            <span>Sair</span>
                        </ButtonDrop>
                    </AccSec>

                    <Unloged />
                </>
                :
                <>
                    <Unloged />
                </>
            }
        </>
    )
}

export default BodySection