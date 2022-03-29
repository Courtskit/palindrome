import './App.css';
import WordInput from './components/WordInput';
import Header from './components/Header';
import { useMemo, useState } from 'react'

function App() {

  const [word, newWord] = useState('');

  const isPalindrome = useMemo(() => {
    return word === word.split("").reverse().join("");
  }, [word]);

  return (
    <div className="App">
      <Header />
      <WordInput word={word} newWord={newWord}/>
      <div>Is Palindrome:{isPalindrome ? "Yes" : "No"}</div>
    </div>
  );
}

export default App;

