import { useState, type CSSProperties } from 'react';
import phrases from '../data/phrases.json';
import { getRandomItem } from '../lib/utils';
import type { CardProps } from '../interfaces';
import { LinkIcon, Phrase } from '../components';

export const Card = (props: CardProps) => {
	const { colors, setColor, currentColor } = props;
	const [phrase, setPhrase] = useState(getRandomItem(phrases));
	return (
		<div
			style={{ 
				backgroundColor: '#222a', 
				borderColor: currentColor,
			}}
			className="border-3 shadow-xl rounded-lg px-5 py-6 max-w-xl min-w-sm"
		>
			<Phrase {...phrase} />
			<div className="mb-8 flex w-full justify-center">
				<button
					type="button"
					style={{
						backgroundColor: '#1a1a1a',
						'--hover-border-color': currentColor,
					} as CSSProperties}
					className="text-white border-transparent border-2 shadow rounded-lg py-2 px-4 cursor-pointer transition-colors duration-300 ease-in-out hover:[border-color:var(--hover-border-color)] hover:[color:var(--hover-border-color)]"
					onClick={() => {
						setPhrase(getRandomItem(phrases));
						setColor(getRandomItem(colors));
					}}
				>
					ver otra frase
				</button>
			</div>
			<div className="flex w-full justify-between gap-6">
				<LinkIcon icon='mdi:linkedin' color={currentColor} route='https://www.linkedin.com/in/jaider%20toro2003/'/>
				<LinkIcon icon='mdi:github' color={currentColor} route=''/>
				<LinkIcon icon='teenyicons:tailwind-solid' color={currentColor} route='https://v3.tailwindcss.com/'/>
				<LinkIcon icon='akar-icons:copy' color={currentColor} text='copiar' type='button'/>
			</div>
		</div>
	);
};
