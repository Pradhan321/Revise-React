import { useEffect, useCallback, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState(null);
  const [clicked, setClicked] = useState(false);

  const passwordref = useRef(null);
  const copytoclipboard = useCallback(() => {
    passwordref.current?.select();
    setClicked(true);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i <= length; i++) {
      if (numbers) str += "0123456789";
      if (characters) str += "!@#$%^&*(){}~[]";
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, setPassword]);
  useRef(() => {});
  return (
    <>
      <div className="bg-gray-500 h-screen flex justify-center ">
        <div className="bg-gray-900 flex flex-col items-center my-10 h-50 w-170 rounded-lg ">
          <h1 className="text-white my-2 text-lg font-bold p-4">
            Password Generator
          </h1>
          <div>
            <input
              type="text"
              value={password}
              ref={passwordref}
              readOnly
              className="bg-white h-10 w-100 rounded-tl-lg rounded-bl-lg font-bold"
            />
            <button
               className={`bg-blue-700 h-10 w-20 text-white text-center text-lg rounded-tr-lg rounded-br-lg cursor-pointer 
        ${clicked ? "bg-blue-500 scale-105 shadow-lg" : ""} transition duration-300`}
              onClick={copytoclipboard}
            >
              copy
            </button>
          </div>
          <div className="p-4">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-orange-500 ml-1"> Length: {length}</label>

            <input
              type="checkbox"
              defaultChecked={numbers}
              className="ml-4"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label className="text-orange-500 ml-1">Numbers</label>

            <input
              type="checkbox"
              defaultChecked={characters}
              className="ml-4"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label className="text-orange-500 ml-1">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
