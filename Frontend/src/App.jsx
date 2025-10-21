import React, {useState, useEffect} from 'react'
import Editor from 'react-simple-code-editor';
import Prism from "prismjs"
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import axios from "axios"
import "./App.css"

import { FaArrowRight } from "react-icons/fa";


function App() {
  let [code, setCode] = useState("")
  let [review, setReview] = useState("")
  let [loading, setLoading] = useState(false)

  const sendPrompt = async () => {
    try {
      if(code){
        if (!loading){
          setReview("")
          setLoading(true)
          console.log("first")
          let response = await axios.post("/ai/code-review/get-prompt", {code})
          setReview(response.data.review)
          setLoading(false)
        }
      } else {
        setReview("No code Found")
      }
      
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      <main>
        <div id="left">
          <div className="write_code">
            <Editor
              value={code}         
              onValueChange={(newCode) => setCode(newCode)} 
              highlight={(code) => Prism.highlight(code, Prism.languages.javascript, "javascript")}
              padding={12}
              style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              backgroundColor: "#1e1e1e",
              color: "#dcdcdc",
              borderRadius: "10px",
              minHeight: "100%"
            }}
          />
          </div>
          <div className ="review" onClick={sendPrompt}><p>Send</p><FaArrowRight className='arrow' /></div>
        </div>
        <div id="right">
          <Markdown
            rehypePlugins={rehypeHighlight}
          >
            {loading ? "Finding the best answer for you...🧐🔎🌐" : review || "no information"}
            
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App