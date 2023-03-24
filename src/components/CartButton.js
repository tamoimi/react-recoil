import { Box, Button, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useAddItem, useDecreaseItem, useRemoveItem } from "../store/hooks";

const CartButtons = ({ item }) => {
  const add = useAddItem();
  const remove = useRemoveItem();
  const decrease = useDecreaseItem();
  return (
    <>
      <Stack direction={"row"} gap={3}>
        <IconButton sx={{ color: "#7AA874" }} onClick={() => add(item)}>
          <AddCircleIcon />
        </IconButton>

        <IconButton sx={{ color: "#EA5455" }} onClick={() => remove(item)}>
          <RemoveCircleIcon />
        </IconButton>

        <IconButton sx={{ color: "#002B5B" }} onClick={() => decrease(item)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default CartButtons;
