import Header from "../../components/header";
import Menu from "../../components/sidemenu";

function Shorts() {
  return (
    <div className="App">
      <Header />
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu />
        Shorts em Construção
      </div>
    </div>
  );
}

export default Shorts;
