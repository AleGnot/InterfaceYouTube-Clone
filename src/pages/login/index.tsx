import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { BodyDiv, ButtonsContainer, ContainerMain, Disclaymer, FormContainer, Inputs, LogButton, LogoContainer, LogoG, TitleInput } from "./style";

function Login() {
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const switchPages = (email: string, senha: string) => {
    handleLogin(email, senha).then(() => {
      navigate('/');
    }).catch((error: string) => {
      console.error('Erro ao realizar o login:', error);
      alert(error);
    })
  }

  return (
    <BodyDiv>
      <ContainerMain>
        <LogoContainer>
          <LogoG alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" />
          <h1> Fazer Login </h1>
          <span> Prosseguir no YouTube </span>
        </LogoContainer>

        <FormContainer>
          <TitleInput> Email </TitleInput>
          <Inputs>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Inputs>

          <TitleInput> Senha </TitleInput>
          <Inputs>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </Inputs>

          <ButtonsContainer>
            <LogButton newAcc={true} onClick={() => navigate('/sign-in')}> Criar conta </LogButton>

            <LogButton newAcc={false} onClick={() => switchPages(email, password)}> LogIn </LogButton>
          </ButtonsContainer>
        </FormContainer>
      </ContainerMain>

      <Disclaymer>
        *O login é realizado em uma api de login desenvolvida por mim.
        Pode a conferir
        <a href="https://github.com/AleGnot/Yt-prismaAPI" target="_blank"> clicando aqui</a>
      </Disclaymer>
    </BodyDiv>
  );
}

export default Login;
