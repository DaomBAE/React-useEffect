import { useState } from "react";
import Counter from "./components/Counter";
import { useEffect } from "react";

function App() {
  const[toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {}, []);

  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center">
      {/*{ toggle && <Counter /> : "카운터"}*/ }
      {toggle && <Counter />} 
      <button 
      onClick={onClickToggle}
      className="bg-purple-400 px-4 py-2 rounded-xl text-purple-1000 font-bold mt-4"
      >
        버튼
        </button>
    </div>
  );
}

export default App;