import { $, component$, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Box } from "~/components/box";
import { Sticker } from "~/components/sticky";
import { addCart, deleteCards, updateCart, getCards } from "~/server/funcs";

import type { sticky } from "~/types/sticky";

export const useGetCardsInitRoute = routeLoader$(async () => {
	return getCards();
});

interface values {
	cards: sticky[];
	mouse: {
		Y: number;
		X: number;
	};
}

export default component$(() => {
	const cardInit = useGetCardsInitRoute();

	const { cards, mouse } = useStore<values>({
		cards: cardInit.value,
		mouse: {
			Y: 0,
			X: 0,
		},
	});

	const create = $(async (color: sticky["color"]) => {
		const cart = await addCart({
			color,
			axisX: 100,
			axisY: 100,
			content: "",
			draggable: true,
		});
		cards.push(cart);
	});

	const colors: sticky["color"][] = ["#696CA3", "#D77AFF", "#FC70AE"];

	return (
		<div class="flex flex-col items-center ">
			<div class="flex justify-end w-full">
				{colors.map((color) => (
					<Box color={color} key={color} onClick$={() => create(color)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							fill="currentColor"
							class="bi bi-plus"
							viewBox="0 0 16 16"
						>
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
						</svg>
					</Box>
				))}
			</div>

			<div>
				{cards.map((card, key) => {
					return (
						<span
							style={{
								cursor: "move",
								position: "absolute",
								top: `${card.axisY}px`,
								left: `${card.axisX}px`,
							}}
							class="relative"
							key={card.id}
							draggable={card.draggable}
							preventdefault:dragover
							preventdefault:drop
							onDragStart$={(event) => {
								mouse.X = event.clientX - card.axisX;
								mouse.Y = event.clientY - card.axisY;
							}}
							onDrag$={(event) => {
								if (!(event.clientX !== 0 && event.clientY !== 0)) return;
								card.axisX = event.clientX - mouse.X;
								card.axisY = event.clientY - mouse.Y;
							}}
							onDragEnd$={async () => {
								await updateCart({
									id: card.id,
									axisX: card.axisX,
									axisY: card.axisY,
								});
							}}
						>
							<button
								onClick$={async () => {
									await updateCart({
										id: card.id,
										draggable: !card.draggable,
									});

									card.draggable = !card.draggable;
								}}
								title="draggable"
							>
								{card.draggable ? "🔥" : "📛"}
							</button>
							<Sticker
								card={card}
								delete$={$(async () => {
									await deleteCards(card.id);
									cards.splice(key, 1);
								})}
								saveText$={$(() => {
									updateCart({
										id: card.id,
										content: card.content,
										height: card.height,
										width: card.width,
									});
								})}
							/>
						</span>
					);
				})}
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
