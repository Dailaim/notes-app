import { server$ } from "@builder.io/qwik-city";
import { sticky } from "~/types/sticky";
import { db } from "../db";

export const addCart = server$(async (card: Partial<sticky>) => {
	const created = new Date();

	card.updated = created;
	card.created = created;

	const result = await db.create("sticky", card);

	return result[0] as sticky;
});
