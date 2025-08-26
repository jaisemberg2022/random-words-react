import { useState } from 'react';
import { Card } from './index';
import { getRandomItem } from '../lib/utils';
import { colors } from '../data/constants';

export function App() {
	const [color, setColor] = useState<string>(getRandomItem(colors));
	
	return (
		<div style={{backgroundColor:"#1a1a1a"}} className="px-4 grid place-content-center min-h-dvh" >
			<Card
				setColor={setColor}
				colors={colors}
				currentColor={color}
			/>
		</div>
	);
}
