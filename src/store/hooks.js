import { useRecoilState } from "recoil"

export const useAddItem = () => {
    const [items, setItems] = useRecoilState(cart)
}