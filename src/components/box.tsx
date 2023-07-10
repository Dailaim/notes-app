import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";
import type { sticky } from "~/types/sticky";

export const Box = component$<
	HTMLAttributes<HTMLDivElement> & {
		color: sticky["color"];
	}
>(({ color, ...props }) => {
	return (
		<div
			class={[
				{
					"bg-[#696CA3]": color === "#696CA3",
					"bg-[#D77AFF]": color === "#D77AFF",
					"bg-[#FC70AE]": color === "#FC70AE",
				},
				"w-10 h-10 flex items-center justify-center m-2 text-2xl font-bold rounded-lg shadow-lg text-white cursor-pointer hover:shadow-xl transition duration-300 ease-in-out",
			]}
			{...props}
		>
			<Slot />
		</div>
	);
});
