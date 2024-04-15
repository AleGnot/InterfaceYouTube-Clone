import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { BodyDiv, ButtonsContainer, CheckBox, ContainerMain, Disclaymer, FormContainer, Inputs, Invalidation, LogButton, LogoContainer, LogoG, TitleInput } from "./style";

/* Images */
import CheckBoxIcon from "../../assets/Login-Signin/checkbox.png";
import UncheckedBox from "../../assets/Login-Signin/unchecked.png";

function SignIn() {
    const { handleSignIn } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [criado, setCriado] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword)
    }

    /* Validations */
    const [emptyName, setEmptyName] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);

    const resetValidation = () => {
        setEmptyEmail(false);
        setEmptyPassword(false);
        setEmptyName(false);
    }

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
                            <Invalidation valid={emptyName} > Por favor digite um nome! </Invalidation>

                            <TitleInput> Email </TitleInput>
                            <Inputs>
                                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Inputs>
                            <Invalidation valid={emptyEmail} > Por favor digite um email válido! </Invalidation>

                            <TitleInput> Senha </TitleInput>
                            <Inputs>
                                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Inputs>
                            <Invalidation valid={emptyPassword} > Por favor digite uma senha válida! </Invalidation>

                            <CheckBox onClick={handlePassword}>
                                <img alt="" src={showPassword ? CheckBoxIcon : UncheckedBox} />
                                <span> Mostrar senha </span>
                            </CheckBox>

                            <ButtonsContainer>
                                <span onClick={() => navigate('/login')}> Já possuo uma conta </span>

                                <LogButton
                                    onClick={() => {
                                        if (email.trim() === '') {
                                            setEmptyEmail(true)
                                        } else if (!email.includes('@')) {
                                            setEmptyEmail(true)
                                        }
                                        if (password.trim() === '') {
                                            setEmptyPassword(true)
                                        }
                                        if (name.trim() === '') {
                                            setEmptyName(true)
                                        }
                                        else if (email.trim() !== '' && password.trim() !== '' && email.includes('@')) {
                                            resetValidation();
                                            switchPages(name, email, password);
                                        }
                                    }}>
                                    Criar conta
                                </LogButton>
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
