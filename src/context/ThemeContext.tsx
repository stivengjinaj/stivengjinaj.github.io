import {createContext} from "react";
import type {ThemeContextType} from "../types/types.ts";

export const ThemeContext = createContext<ThemeContextType | null>(null)
