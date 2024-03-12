import Header from "../../components/header";
import Menu from "../../components/sidemenu";

function Uploads() {
    return (
        <div className="App">
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                Seu canar
            </div>
        </div>
    )
}

export default Uploads;