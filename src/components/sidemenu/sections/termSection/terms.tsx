import { MenuContext } from "../../../../contexts/menuContext";
import { useContext } from "react";
import { AboutSection, AboutItem, WaterMark } from "./style";

const firstHalf = [
    {name: 'Sobre', link: '/'},
    {name: 'Imprensa', link: '/'},
    {name: 'Direitos Autorais', link: '/'},
    {name: 'Entre em contato', link: '/'},
    {name: 'Criadores de Conteúdo', link: '/'},
    {name: 'Publicidade', link: '/'},
    {name: 'Desenvolvedores', link: '/'},
];

const secondHalf = [
    {name: 'Termos', link: '/'},
    {name: 'Privacidade', link: '/'},
    {name: 'Política e segurança', link: '/'},
    {name: 'Como funciona o Youtube', link: '/'},
    {name: 'Testar novos recursos', link: '/'},
];

function SectionTerms(){
    const {isMenuOpen} = useContext(MenuContext);

    return (
        <AboutSection openmenucheck={isMenuOpen}>
            {firstHalf.map((item1) => (
                <AboutItem>{item1.name}</AboutItem>
            ))}

            <WaterMark></WaterMark>
            
            {secondHalf.map((item2) => (
                <AboutItem>{item2.name}</AboutItem>
            ))}

            <WaterMark>© 2023 Google LLC</WaterMark>
        </AboutSection>
    )
} 

export default SectionTerms;
