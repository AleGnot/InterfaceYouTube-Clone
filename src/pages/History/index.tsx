import Header from "../../components/header";
import Menu from "../../components/sidemenu";

function Historic() {
    return (
        <div className="App">
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                Historico de vidieo vidoes
            </div>
        </div>
    )
}

export default Historic;