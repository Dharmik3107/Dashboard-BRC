import { useSelector, useDispatch } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux"
import type { RootState, AppDispatch } from "./store";

//Create Type Checked Hooks to avoid unneccesory error on state 
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 