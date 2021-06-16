import React, { useState } from 'react'
import axios from 'axios'
import config from '../../configs/config'

export interface FirstIProps {
  question: string
  answer: string[]
}
function First(): JSX.Element {
  const [qna, setQna] = useState<FirstIProps>()
  const getQuiz = () => {
    axios({
      method: 'get',
      url: config.url,
    })
      .then((response) => {
        // const data = response.data.results[0]
        // setQna((prev) => ({...prev, question: data.question}))
        // answerList = data.incorrect_answers
        // answerList.push(data.correct_answer)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <article>
      first quiz
      <button onClick={getQuiz}>get quiz</button>
      {/* <div>{question}</div> */}
      <div>
        <ul>
          {/* {answerList.map((answer) => (<li>{answer}</li>))} */}
        </ul>
      </div>
    </article>
  )
}

export default First
