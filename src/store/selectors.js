import { selector } from "recoil";
import { cart } from "./atoms";

const cartState = selector({
  key: "cartState",
  get: ({ get }) => {
    const totalCost = get(cart).reduce((a, b) => a + b.price * b.qty, 0);
    const totalQty = get(cart).reduce((a, b) => a + b.qty, 0);
    return {
      totalCost,
      totalQty,
    };
  },
});

export default cartState;
