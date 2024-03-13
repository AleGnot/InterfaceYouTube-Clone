import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuStore } from "./contexts/menuContext";
import { UserStorage } from "./contexts/userContext";
import { DropDownStore } from "./contexts/dropDownContext";
import { CategoryStore } from "./contexts/categoryContext";

import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/Subscriptions";
import Uploads from "./pages/channelvids";
import Historic from "./pages/History";
import Login from "./pages/login";
import SignIn from "./pages/signIn";
import Search from "./pages/search";
import { SearchStore } from "./contexts/searchContext";

function App() {

  return (
    <UserStorage>
      <MenuStore>
        <CategoryStore>
          <SearchStore>
            <DropDownStore>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/shorts' element={<Shorts />} />
                  <Route path='/subscriptions' element={<Subscriptions />} />
                  <Route path='/channel' element={<Uploads />} />
                  <Route path='/history' element={<Historic />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/sign-in' element={<SignIn />} />
                  <Route path='/search' element={<Search />} />
                </Routes>
              </BrowserRouter>
            </DropDownStore>
          </SearchStore>
        </CategoryStore>
      </MenuStore>
    </UserStorage>
  )
}

export default App
