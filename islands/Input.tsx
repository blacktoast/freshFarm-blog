import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface InputProps {}

const Input = ({}: InputProps) => {
  const [state, setState] = useState("");
  const update = (e: any) => {
    console.log(e.target.value);
    setState("test");
    console.log("2");
  };

  const click = (e: any) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  return (
    <div>
      <input
        onInput={update}
        onClick={click}
        value={state}
        placeholder="test"
        disabled={!IS_BROWSER}
      >
      </input>
      <div>{state}</div>
    </div>
  );
};

export default Input;
