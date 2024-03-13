import Header from "../../components/header";
import Pesquisa from "../../components/searchComponent";
import Menu from "../../components/sidemenu";

function Search() {
    return (
        <div>
            <Header />
            <div style={{ width: '100%', display: 'flex' }}>
                <Menu />
                <Pesquisa />
            </div>
        </div>
    );
}

export default Search;
