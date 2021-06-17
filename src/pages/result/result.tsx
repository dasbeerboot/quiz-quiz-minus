import React from 'react'

interface ResultPageIProps {
  result: boolean[]
}

function ResultPage({ result }: ResultPageIProps): JSX.Element {
  const numberOfCorrectAnswers = result.filter((item) => item === true).length
  const numberOfWrongAnswers = result.filter((item) => item === false).length
  return (
    <article>
      <div>
        your score is {numberOfCorrectAnswers * 20} ({numberOfCorrectAnswers}/5)
      </div>
      <div>correct: {numberOfCorrectAnswers}</div>
      <div>incorrect: {numberOfWrongAnswers}</div>
    </article>
  )
}

export default ResultPage
