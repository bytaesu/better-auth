import Link from "next/link";
import Section from "@/components/landing/section";
import { Logo } from "@/components/logo";
export default function NotFound() {
	return (
		<div className="h-full relative overflow-hidden">
			<Section
				className="mb-1 h-[92.3vh] overflow-y-hidden"
				crosses
				crossesOffset="lg:translate-y-[5.25rem]"
				customPaddings
				id="404"
			>
				<div className="relative flex flex-col h-full items-center justify-center dark:bg-black bg-white text-black dark:text-white">
					<div className="relative mb-8">
						<Logo className="w-10 h-10" />
					</div>
					<h1 className="text-8xl font-normal">404</h1>
					<p className="text-sm mb-8">Need help? Visit the docs</p>
					<div className="flex flex-col items-center gap-6">
						<Link
							href="/docs"
							className="text-black bg-white border-black dark:border-stone-400 border-2 hover:shadow-sm active:shadow-sm dark:active:shadow-sm dark:hover:shadow-sm px-4 py-1.5 text-sm uppercase transition duration-200 md:px-8 shadow-[1px_1px_#000000,2px_2px_#000000,3px_3px_#000000,4px_4px_#000000,5px_5px_0px_0px_#000000] dark:shadow-[1px_1px_#a6a09b,2px_2px_#a6a09b,3px_3px_#a6a09b,4px_4px_#a6a09b,5px_5px_0px_0px_#a6a09b]"
						>
							Go to docs
						</Link>
					</div>
				</div>
			</Section>
		</div>
	);
}
