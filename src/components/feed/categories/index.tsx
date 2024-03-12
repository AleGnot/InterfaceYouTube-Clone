import { useState, useRef, useContext } from "react";
import { ButtonContainer, CategoryItem, CategorySection, Container } from "./style";
import { MenuContext } from "../../../contexts/menuContext";
import { CategoryContext } from "../../../contexts/categoryContext";

const categoriesList = [
  { name: 'Tudo', link: '0' },
  { name: 'Entreterimento', link: '24' },
  { name: 'Jogos', link: '20' },
  { name: 'Música', link: '10' },
  { name: 'Notícias', link: '25' },
  { name: 'Esportes', link: '17' },
  { name: 'Animação', link: '1' },
  { name: 'Comédia', link: '23' },
  { name: 'Animais', link: '15' },
  { name: 'Veículos', link: '2' },
  { name: 'Shows', link: '10' },
  { name: 'Ciência e Tecnologia', link: '28' },
  { name: 'Fantasia/ Sci-fi', link: '40' },
  { name: 'Documentários', link: '35' },
  { name: 'Educação', link: '27' },
  { name: 'Horror', link: '39' },
  { name: 'Destinos turísticos', link: '42' },
  { name: 'Clássicos', link: '33' },
  { name: 'Trailers', link: '44' },
  { name: 'Filmes', link: '30' },
  { name: 'Família', link: '37' },
];

function CategoriesComponent() {
  const { isMenuOpen } = useContext(MenuContext);
  const { setCategoryId } = useContext(CategoryContext)

  /* Horizontal Scroll */
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset: number) => {
    const container = containerRef.current;

    if (container) {
      const newScrollPosition = scrollPosition + scrollOffset;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  }

  /* Individual Button Estilization */
  const [buttonSelect, setButtonSelect] = useState<number | null>(null);

  const handleSelectButton = (index: number) => {
    setButtonSelect(index);
  }

  return (
    <Container >
      <ButtonContainer onClick={() => handleScroll(-450)}> ⮜ </ButtonContainer>

      <CategorySection openmenucheck={isMenuOpen} ref={containerRef}>
        {categoriesList.map((categoriesList, index) => (
          <CategoryItem margin="5px" selected={buttonSelect === index} key={index}
            onClick={() => {
              setCategoryId(categoriesList.link);
              handleSelectButton(index)
            }}
          >
            {categoriesList.name}
          </CategoryItem>
        ))}
      </CategorySection>

      <ButtonContainer onClick={() => handleScroll(450)}> ⮞ </ButtonContainer>
    </Container>
  );
}

export default CategoriesComponent;
