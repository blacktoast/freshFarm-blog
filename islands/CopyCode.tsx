import { useRef } from 'preact/hooks';
import { CompleteIcon } from '../components/CompleteIcon.tsx';
import { CopyIcon } from '../components/CopyIcon.tsx';

interface CopyCodeProps {}

const CopyCode = ({}: CopyCodeProps) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const onClick = () => {};
  const copyCode = () => {
    const targetDom: HTMLParagraphElement = ref.current?.nextSibling
      ?.nextSibling as HTMLParagraphElement;
    console.log(targetDom.innerText);
  };

  return (
    <div ref={ref} class='relative'>
      <code onClick={copyCode} class='absolute top-2 right-1 text-blue-100'>
        <CopyIcon />
        <CompleteIcon></CompleteIcon>
      </code>
    </div>
  );
};

export default CopyCode;
