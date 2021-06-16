import React from 'react'
import axios from 'axios'
import config from '../../configs/config'

function First(): JSX.Element {
  const getQuiz = () => {
    axios({
      method: 'get',
      url: config.url,
    })
      .then((response) => {
        const data = response.data.results[0]
        console.log(data)
        console.log('question', data.question)
        console.log('choices', data.correct_answer, data.incorrect_answers)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <article>
      first quiz
      <button onClick={getQuiz}>get quiz</button>
    </article>
  )
}

export default First
