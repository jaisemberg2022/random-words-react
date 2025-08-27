import { useState, type CSSProperties } from 'react';
import phrases from '../data/phrases.json';
import { getRandomItem } from '../lib/utils';
import type { CardProps, PhraseProps } from '../interfaces';
import { LinkIcon, Phrase } from '../components';

export const Card = (props: CardProps) => {
	const { colors, setColor, currentColor } = props;
	const [phrase, setPhrase] = useState<PhraseProps>(getRandomItem(phrases));
	const [clicked, setClicked] = useState<boolean>(false);
	const handdleCopy = (text: string) => navigator.clipboard.writeText(text);
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
					style={
						{
							backgroundColor: '#1a1a1a',
							'--hover-border-color': currentColor,
						} as CSSProperties
					}
					className="text-white border-transparent border-2 shadow rounded-lg py-2 px-4 cursor-pointer transition-colors duration-300 ease-in-out hover:[border-color:var(--hover-border-color)] hover:[color:var(--hover-border-color)]"
					onClick={() => {
						setPhrase(getRandomItem(phrases));
						setColor(getRandomItem(colors));
						setClicked(false);
					}}
				>
					ver otra frase
				</button>
			</div>
			<div className="flex w-full justify-between gap-2">
				<LinkIcon
					icon="mdi:linkedin"
					color={currentColor}
					route="https://www.linkedin.com/in/jaidertoro2003/"
				/>
				<LinkIcon
					icon="mdi:github"
					color={currentColor}
					route="https://github.com/jaisemberg2022/random-words-react.git"
				/>
				<LinkIcon
					icon="teenyicons:tailwind-solid"
					color={currentColor}
					route="https://v3.tailwindcss.com/"
				/>
				<LinkIcon
					Onclick={() => {
						handdleCopy(phrase.phrase);
						setClicked(true)
					}}
					icon={clicked ? "simple-line-icons:check" : "akar-icons:copy"}
					color={currentColor}
					text={clicked ? "copiado" : "copiar"} 
					type="button"
				/>
			</div>
		</div>
	);
};
