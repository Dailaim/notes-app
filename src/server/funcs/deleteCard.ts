import { server$ } from "@builder.io/qwik-city";
import { sticky } from "~/types/sticky";
import { db } from "../db";

export const deleteCards = server$(async (id: string) => {
	const result = await db.delete(id);
	return result[0] as sticky;
});
