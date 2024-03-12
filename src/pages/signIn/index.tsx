import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { BodyDiv, ButtonsContainer, ContainerMain, Disclaymer, FormContainer, Inputs, LogButton, LogoContainer, LogoG, TitleInput } from "./style";

function SignIn() {
    const { handleSignIn } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [criado, setCriado] = useState(false);

    const switchPages = (name: string, email: string, senha: string) => {
        handleSignIn(name, email, senha).then(() => {
            setCriado(true);
        }).catch((error: string) => {
            console.error('Erro ao realizar o cadastro:', error);
            alert(error);
        })
    }

    return (
        <BodyDiv>
            <ContainerMain>
                <LogoContainer>
                    <LogoG alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />

                    {criado ?
                        <>
                            <h1> Conta criada com sucesso </h1>
                            <span> Realize o login para poder acessar o YouTube </span>
                        </>
                        :
                        <>
                            <h1> Criar uma conta do Google </h1>
                            <span> Insira seu nome, email e senha </span>
                        </>
                    }
                </LogoContainer>

                <FormContainer>
                    {criado ?
                        <>
                            <span onClick={() => navigate('/login')}> Clique aqui para realizar o login </span>
                        </>
                        :
                        <>
                            <TitleInput> Nome </TitleInput>
                            <Inputs>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                            </Inputs>

                            <TitleInput> Email </TitleInput>
                            <Inputs>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Inputs>

                            <TitleInput> Senha </TitleInput>
                            <Inputs>
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Inputs>

                            <ButtonsContainer>
                                <span onClick={() => navigate('/login')}> Já possuo uma conta </span>

                                <LogButton onClick={() => switchPages(name, email, password)}> Criar conta </LogButton>
                            </ButtonsContainer>
                        </>
                    }
                </FormContainer>
            </ContainerMain>

            <Disclaymer>
                *O login é realizado em uma api de login desenvolvida por mim.
                Pode a conferir
                <a href="https://github.com/AleGnot/Yt-prismaAPI" target="_blank"> clicando aqui </a>
            </Disclaymer>
        </BodyDiv>
    );
}

export default SignIn;
