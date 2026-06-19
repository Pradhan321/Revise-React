import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(12);
  const [numberAllowed, setnumber] = useState(false);
  const [charAllowed, setchar] = useState(false);
  const [password, setpassword] = useState(null);

  const passwordref = useRef(null);
  const copytoclipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i <= length; i++) {
      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*(){}~[]";
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed]);

  useRef(() => {});
  return (
    <>
      <div className="flex justify-center text-white mt-4 text-4xl">
        Password Generator
      </div>
      <div className="flex justify-center my-5 ">
        <input
          type="text"
          value={password}
          ref={passwordref}
          readOnly
          className="bg-amber-50 h-10 w-100"
        />
        <button
          className="bg-amber-50 pr-4 pl-4 border-2"
          onClick={copytoclipboard}
        >
          copy
        </button>
      </div>
      <div className="flex justify-center">
        <input
          type="range"
          className="mx-2"
          min={0}
          max={100}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />
        <label>length : {length}</label>
        <input
          type="checkbox"
          className="mx-2"
          defaultChecked={numberAllowed}
          onChange={() => {
            setnumber((prev) => !prev);
          }}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          className="mx-2"
          defaultChecked={charAllowed}
          onChange={() => {
            setchar((prev) => !prev);
          }}
        />
        <label>Characters</label>
      </div>
    </>
  );
}

export default App;
