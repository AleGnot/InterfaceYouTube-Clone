import FeedComponent from "../../components/feed";
import Header from "../../components/header";
import Menu from "../../components/sidemenu";

function Home() {
  return (
    <div>
        <Header />
        <div style={{ width: '100%', display: 'flex'}}>
          <Menu />
          <FeedComponent />
        </div>
    </div>
  );
}

export default Home;
