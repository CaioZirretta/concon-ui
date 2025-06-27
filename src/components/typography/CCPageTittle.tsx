import type { ReactNode } from "react";

type CCPageTitleProps = {
	children?: ReactNode
	props?: HTMLHeadingElement
}

export function CCPageTitle({ children, ...props }: CCPageTitleProps) {
	return <h1 className="font-bold text-2xl" {...props}>{children}</h1>;
}
