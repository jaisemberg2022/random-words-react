import { type CSSProperties } from 'react';
import type { LinkIconProps } from '../interfaces';
import { Icon } from '@iconify/react/dist/iconify.js';

export const LinkIcon = (props: LinkIconProps) => {
	const { route, icon, color, text, type = 'anchor', Onclick } = props;
	return type == 'anchor' ? (
		<a
			style={
				{
					'--hover-border-color': color,
					'--bg-input-color': '#1a1a1a',
				} as CSSProperties
			}
			className="[background-color:var(--bg-input-color)] hover:[border-color:var(--hover-border-color)] hover:[color:var(--hover-border-color)] rounded-lg border-2 border-transparent decoration-0 text-white p-2 w-full flex justify-center gap-2 cursor-pointer"
			href={route && route.length > 0 ? route : ''}
			target="_blank"
		>
			<Icon icon={icon} width="24" height="24" />
			{text && text.length > 0 && text}
		</a>
	) : (
		<button
            style={
				{
					'--hover-border-color': color,
					'--bg-input-color': '#1a1a1a',
				} as CSSProperties
			}
			className="[background-color:var(--bg-input-color)] hover:[border-color:var(--hover-border-color)] hover:[color:var(--hover-border-color)] rounded-lg border-2 border-transparent decoration-0 text-white p-2 w-full flex justify-center gap-2 cursor-pointer"
            onClick={Onclick}
        >
            <Icon icon={icon} width="24" height="24" />
			{text && text.length > 0 && text}
        </button>
	);
};

