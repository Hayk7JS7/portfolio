import React, { useEffect, useState } from 'react'
import jslogo from '../../assets/logos/javascript.svg'
import reactlogo from '../../assets/logos/react.svg'

const Typeanimation = () => {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopCount, setLoopCount] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)
    const words = ["JavaScript", "React"]
  
    useEffect(() => {
      const handleType = () => {
        const currentWord = loopCount % words.length
        const currentText = words[currentWord]
        setIsDeleting(false)
        setText((prevText) =>
          currentText.substring(0, prevText.length + 1)
        )
        setTypingSpeed(150)
      }
      const handleDelete = () => {
        setIsDeleting(true)
  
        setText((prevText) => prevText.substring(0, prevText.length - 1))
  
        setTypingSpeed(75)
      }
  
      const interval = setTimeout(() => {
        if (!isDeleting && text === words[loopCount % words.length]) {
          setTypingSpeed(2000)
          setTimeout(handleDelete, 1000)
        } else if (isDeleting && text === "") {
          setIsDeleting(false)
          setLoopCount((prevCount) => prevCount + 1)
        } else if (isDeleting) {
          handleDelete()
        } else {
          handleType()
        }
      }, typingSpeed)
  
      return () => clearTimeout(interval)
    }, [text, isDeleting, typingSpeed, loopCount])
  
  return (
    <> 
        <div>
            <p>i love {text}</p>
        </div>
        <div>{text.match("J") ? <img src={jslogo} style={{borderRadius: "50%"}}/> : <img src={reactlogo} style={{borderRadius: "50%"}}/>}</div>        
    </>
  )
}

export default Typeanimation
