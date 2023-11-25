import { atom } from "jotai";
import { findObject } from "../utils/findObject";

export const apiDataAtom = atom([]);

export const inputAtom = atom("");
export const regionAtom = atom("");

// Atom for filtered data
export const filteredDataAtom = atom([]);
