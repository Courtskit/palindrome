function WordInput({ word, newWord}) {
  return (
    <input 
    value={word} 
    onChange={(e) => newWord(e.target.value)} 
    />
  )
}

export default WordInput