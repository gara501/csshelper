import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'


const Content = ({data}) => {
  const [markupData, setMarkupData] = useState(null);

  useEffect(() => {
    const dataFormatted = data.body;
    setMarkupData(dataFormatted);
  }, [markupData])

  return (
    <div className="content">
      <div className="content__header">
        <h2>{data && data.title}</h2>
        <p>{data && data.description}</p>
        <div className="content__body">
          <ReactMarkdown>{markupData}</ReactMarkdown>
        </div>
        
      </div>
      <div className="content__items">
      
      </div>
    </div>
  )
}

export default Content;