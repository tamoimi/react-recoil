import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cart from "./components/Cart";
import Catalog from "./components/Catalog";
import Header from "./components/Header";

function App() {
  return (
    <>
      <RecoilRoot>
      <Header/>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
