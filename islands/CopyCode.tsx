/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useRef } from "preact/hooks";

interface CopyCodeProps {}

const CopyCode = ({}: CopyCodeProps) => {
  const testRef = useRef(null);
  const copyCode = () => {
    alert(testRef.current);
    console.log(testRef.current.nextSibling.nextSibling.innerText);
  };
  return (
    <div ref={testRef} class={tw`relative`}>
      <code onClick={copyCode} class={tw`absolute top-0 right-0`}>
        여기는 코드 복사 버튼
      </code>
    </div>
  );
};

export default CopyCode;
