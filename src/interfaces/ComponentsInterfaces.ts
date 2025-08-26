export interface CardProps {
	setColor: (index: string) => void;
	colors: string[];
	currentColor: string;
}


export interface PhraseProps {
    phrase: string;
    author: string;
}

export interface LinkIconProps{
    route?: string;
    icon: string;
    color: string;
    text? :string
    type?: TypesLinkIcon;
};
export type TypesLinkIcon = 'button' | 'anchor';
