import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { MenuContext } from "../../contexts/menuContext";

/* Components */
import Header from "../../components/header";
import Menu from "../../components/sidemenu";
import { ButtonContainer, ChContainer, CloseModal, Inputs, Invalidation, ModalContainer, ModalFrame, MyData, TitleInput } from "./styles";

function Uploads() {
    const { isMenuOpen } = useContext(MenuContext);
    const { user } = useContext(UserContext);

    /* Values and Validation */
    const [thumb, setThumb] = useState('');
    const [thumbEmpty, isThumbEmpty] = useState(false);

    const [title, setTitle] = useState('');
    const [titleEmpty, isTitleEmpty] = useState(false);

    const [valid, setValid] = useState(false);
    const strator: RegExp = /(https?:\/\/[^\s]+)/;

    const thumbVerify = () => {
        const match: RegExpMatchArray | null = thumb.match(strator);

        if (!match) {
            isThumbEmpty(true);
        } else {
            setValid(true);
            setThumb('');
            setTitle('');

            return (isUpload(false))
        }
    }

    const veracity = () => {
        isThumbEmpty(false);
        isTitleEmpty(false);

        if (thumb.trim() === '') {
            isThumbEmpty(true);
        }
        if (title.trim() === '') {
            isTitleEmpty(true);
        } else {
            thumbVerify();
        }
    }

    /* Modal */
    const [upload, isUpload] = useState(false);

    return (
        <div className="App">
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />

                <ChContainer openmenucheck={isMenuOpen}>
                    <MyData>
                        <h1> {user.name} </h1>
                        <span> @{user.name} ‧ 0 inscritos </span>
                        <h2> Saiba mais sobre este canal ⮞ </h2>
                        <ButtonContainer onClick={() => { isUpload(true); setValid(false) }} >
                            <span> Cadastrar vídeo </span>
                        </ButtonContainer>
                    </MyData>

                    <ModalFrame uploading={upload}>
                        <ModalContainer>
                            <TitleInput> Url da Thumbnail </TitleInput>
                            <Inputs >
                                <input
                                    type="text"
                                    placeholder="Ex: https://thumbs.dreamstime.com/b/selo-do-exemplo-28420393.jpg"
                                    value={thumb}
                                    onChange={(e) => setThumb(e.target.value)}
                                />
                            </Inputs>
                            <Invalidation valid={thumbEmpty}> Por favor adicione uma thumbnail válida </Invalidation>

                            <TitleInput> Título </TitleInput>
                            <Inputs>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Inputs>
                            <Invalidation valid={titleEmpty}> Por favor adicione um título </Invalidation>

                            <TitleInput> Descrição </TitleInput>
                            <Inputs>
                                <input type="text" />
                            </Inputs>

                            <ButtonContainer onClick={
                                () => {
                                    veracity()
                                }
                            }>
                                <span> Cadastrar vídeo </span>
                            </ButtonContainer>

                        </ModalContainer>

                        <CloseModal onClick={() => isUpload(false)}> <span> x </span> </CloseModal>
                    </ModalFrame>
                    {valid ?
                        <div>
                            <span> A funcionalidade de cadastro de vídeos será implementado em breve! </span>
                        </div>
                        :
                        <></>
                    }

                </ChContainer>
            </div>
        </div>
    )
}

export default Uploads;