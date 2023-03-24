import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

const fruits = [
  "apple",
  "orange",
  "pear",
  "tomato",
  "watermelon",
  "guava",
  "mango",
  "avacado",
  "lime",
  "lemon",
  "kiwi",
];

const products = fruits.map((id, index) => ({ id, price: index + 1 }));

const Catalog = () => {
  return (
    <>
      <Box sx={{ p: 3, display: "flex", flexWrap: "wrap", gap: 3 }}>
        {products.map((p) => (
          <Stack key={p.id} direction={"row"} gap={2}>
            <Card sx={{ minWidth: 200 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {p.id} / ${p.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Add
                </Button>
              </CardActions>
            </Card>
          </Stack>
        ))}
      </Box>
    </>
  );
};
export default Catalog;
