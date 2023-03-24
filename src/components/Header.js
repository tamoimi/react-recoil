import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import cartState from "../store/selectors";

const Header = () => {
  const { totalQty } = useRecoilValue(cartState);
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ background: "white" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to={"/"}>
              <Button>Tami's store</Button>
            </Link>
            <Link to={"/cart"}>
              <Button>Cart: {totalQty}</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
