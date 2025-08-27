import type { PhraseProps } from "../interfaces"

export const Phrase = (props: PhraseProps) => {
  const {author, phrase} = props;
  return (
    <div className="mb-6">
      <h2 className='text-white text-center relative md:text-xl mb-2 before:content-["❝"] before:text-xl before:text-gray-300 after:content-["❞"] after:text-xl md:after:text3x1 after:text-gray-300 select-none'>{phrase}</h2>
      <p className="text-white text-center md:text-lg font-semibold">-{author}</p>
    </div>
  )
}

