import {CopyToClipboard} from 'react-copy-to-clipboard'
import { CopyIcon, PasteIcon } from '@/assets/icons/icons';
import { useEffect, useState } from 'react';


const Code:React.FC<any> = ({children}) => {
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1000)
    return () => clearTimeout(timer)
  }, [copied])
  return (
    <div className="article-code">
        <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
          <button className='article-code-copy'>
            {copied ? <PasteIcon /> : <CopyIcon />}
          </button>
        </CopyToClipboard>
        {children}
    </div>
  )
}

export default Code