import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useRecoilValue } from "recoil";
import { cart } from "../store/atoms";
import cartState from "../store/selectors";

const Cart = () => {
  const cartItems = useRecoilValue(cart);
  const { totalCost } = useRecoilValue(cartState);
  return (
  <>
  <Table>
    <TableHead>
        <TableRow>
            <TableCell></TableCell>
            <TableCell>item</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Total</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {cartItems.map((item) => (
            <TableRow key={item.id}>
                <TableCell>Button</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.qty}</TableCell>
                <TableCell>{item.qty * item.price}</TableCell>
            </TableRow>
        ))}
        <TableRow>
            <TableCell colSpan={4} sx={{textAlign: "right"}}>
                Total: 
            </TableCell>
            <TableCell>${totalCost}</TableCell>
        </TableRow>
    </TableBody>
  </Table>
  </>
    )
};
export default Cart;
