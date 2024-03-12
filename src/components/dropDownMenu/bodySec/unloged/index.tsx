import { ButtonDrop, Section, ButtonIcon, EndSection } from "./style";

/* Images */
import Cog from "../../../../assets/Menu/Sections/sec-config/settings.png";
import Help from "../../../../assets/Menu/Sections/sec-config/interrogation.png";
import Exclamation from "../../../../assets/Menu/Sections/sec-config/square-exclamation.png";
import Shield from "../../../../assets/DropDownMenu/user-protection.png";
import Moon from "../../../../assets/DropDownMenu/moon.png";
import Language from "../../../../assets/DropDownMenu/language.png";
import UserShield from "../../../../assets/DropDownMenu/user-shield.png";
import Local from "../../../../assets/DropDownMenu/globe.png";
import Keyboard from "../../../../assets/DropDownMenu/keyboard.png";


const buttons = [
    { name: "Aparência: Tema Claro", img: Moon, mg: "60px" },
    { name: "Idioma: Português", img: Language, mg: "87px" },
    { name: "Modo restrito: desativado", img: UserShield, mg: "37px" },
    { name: "Local: Brasil", img: Local, mg: "130px" },
    { name: "Ajuda", img: Help, mg: "" },
    { name: "Enviar feedback", img: Exclamation, mg: "" },
]

const FirstGP = buttons.slice(0, 4);
const SeccondGP = buttons.slice(4);

function Unloged() {
    return (
        <>
            <Section>
                <ButtonDrop>
                    <ButtonIcon alt="" src={Shield} />
                    <span>Seus dados no YouTube</span>
                </ButtonDrop>

                {FirstGP.map((itens) => (
                    <ButtonDrop>
                        <ButtonIcon alt="" src={itens.img} />
                        <span>{itens.name}</span>
                        <span style={{ marginLeft: itens.mg }}> ⮞ </span>
                    </ButtonDrop>
                ))}

                <ButtonDrop>
                    <ButtonIcon alt="" src={Keyboard} />
                    <span>Atalhos do teclado</span>
                </ButtonDrop>
            </Section>

            <Section>
                <ButtonDrop>
                    <ButtonIcon alt="" src={Cog} />
                    <span>Configurações</span>
                </ButtonDrop>
            </Section>

            <EndSection>
                {SeccondGP.map((itens) => (
                    <ButtonDrop>
                        <ButtonIcon alt="" src={itens.img} />
                        <span>{itens.name}</span>
                    </ButtonDrop>
                ))}
            </EndSection>
        </>
    )
}

export default Unloged;