import { server$ } from "@builder.io/qwik-city";
import { sticky } from "~/types/sticky";
import { db } from "../db";

export const getCards = server$(async () => {
	const result = await db.query("SELECT * FROM sticky ORDER BY update DESC");

	return (result[0]?.result ?? []) as sticky[];
});
