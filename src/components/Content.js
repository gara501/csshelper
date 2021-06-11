import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import closeImage from '../images/cancel.png'


const Content = ({data, selected, close}) => {
  const [showPopup, setShowPopup] = useState('');

  useEffect(() => {
    setShowPopup(selected);
  }, [selected])

  const closePopup = () => {
    close()
  }

  return (
    <div className={`content ${showPopup}`}>
      <button className="close" onClick={closePopup}>
        <img src={closeImage} alt="close" />
      </button>
      <div className="content__header">
        <h2>{data && data.title}</h2>
        <p>{data && data.description}</p>
        <div className="content__body">
          <ReactMarkdown>{data.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Content;