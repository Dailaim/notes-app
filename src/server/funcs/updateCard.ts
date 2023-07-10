import { server$ } from "@builder.io/qwik-city";
import { sticky } from "~/types/sticky";
import { db } from "../db";

export const updateCart = server$(async (card: Partial<sticky>) => {
	const update = new Date();

	card.updated = update;

	const result = await db.merge(card.id, card);

	return result[0] as sticky;
});
