import { useRef, useState } from 'preact/hooks';
import { CompleteIcon } from '../components/CompleteIcon.tsx';
import { CopyIcon } from '../components/CopyIcon.tsx';

interface CopyCodeProps {}

const CopyCode = ({}: CopyCodeProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const timer = useRef(0);
  const [isCopy, setIsCopy] = useState(false);

  const onClickCopy = () => {
    setIsCopy(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsCopy((prev) => !prev);
    }, 1000);

    copyCode();
  };

  const copyCode = () => {
    const targetDom: HTMLParagraphElement = ref.current?.nextSibling
      ?.nextSibling as HTMLParagraphElement;
    console.log(targetDom.innerText);
  };

  return (
    <div ref={ref} class='relative'>
      <code onClick={onClickCopy} class='absolute top-2 right-1 text-blue-100'>
        {isCopy ? <CompleteIcon /> : <CopyIcon />}
      </code>
    </div>
  );
};

export default CopyCode;
