import { useRef } from "preact/hooks";

interface CopyCodeProps {}

const CopyCode = ({}: CopyCodeProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const copyCode = () => {
    const targetDom: HTMLParagraphElement = ref.current?.nextSibling
      ?.nextSibling as HTMLParagraphElement;
    console.log(targetDom.innerText);
  };
  return (
    <div ref={ref} class="relative">
      <code onClick={copyCode} class="code-copy-btn absolute top-0 right-0">
        여기는 코드 복사 버튼
      </code>
    </div>
  );
};

export default CopyCode;
