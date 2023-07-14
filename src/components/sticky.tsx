import type { HTMLAttributes, QRL } from "@builder.io/qwik";
import { component$, useTask$ } from "@builder.io/qwik";

import type { sticky } from "~/types/sticky";

const colors: Record<sticky["color"], string> = {
	"#696CA3": "bg-[#696CA3]",
	"#D77AFF": "bg-[#D77AFF]",
	"#FC70AE": "bg-[#FC70AE]",
};

export const Sticker = component$<
	HTMLAttributes<HTMLDivElement> & {
		card: Partial<sticky>;
		delete$?: QRL<() => void>;
		saveText$?: QRL<() => void>;
	}
>(({ card, delete$, saveText$, ...props }) => {
	useTask$(({ track, cleanup }) => {
		track(() => card.content);
		const changeText = setTimeout(() => {
			saveText$ && saveText$();
		}, 500);
		cleanup(() => {
			clearTimeout(changeText);
		});
	});

	useTask$(({ track, cleanup }) => {
		track(() => {
			card.height;
			card.width;
		});
		const changeText = setTimeout(() => {
			saveText$ && saveText$();
		}, 500);
		cleanup(() => {
			clearTimeout(changeText);
		});
	});

	return (
		<div
			class={[
				colors[card.color ?? "#696CA3"],
				"flex flex-col justify-center items-center  m-1 rounded-lg text-white relative  ",
				" min-w-[100px]",
			]}
			{...props}
		>
			<textarea
				style={{
					height: `${card.height ?? 200}px`,
					width: `${card.width ?? 200}px`,
				}}
				title="card"
				class="px-4 pb-4 pt-5 bg-transparent outline-none min-h-[100px] min-w-[100px] resize"
				value={card.content}
				onInput$={(_, element) => {
					card.draggable = false;
					card.content = element.value;

					element.style.height = `${element.scrollHeight}px`;
					element.style.width = `${element.scrollWidth}px`;

					card.height = element.offsetHeight;
					card.width = element.offsetWidth;
				}}
				onBlur$={() => {
					card.draggable = true;
				}}
			/>

			<button
				title="delete"
				onClick$={delete$}
				class="absolute top-0 right-0 mx-2 inline-flex"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					class="bi bi-x"
					viewBox="0 0 16 16"
				>
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
				</svg>
			</button>
		</div>
	);
});
