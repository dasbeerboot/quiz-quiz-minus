import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export interface AnswerContainerIProps {
  answers: string[]
  onChangeAnswer: (index: number, answer: string) => void
}
function AnswerContainer({ answers, onChangeAnswer }: AnswerContainerIProps): JSX.Element {
  const match = useRouteMatch<{ index: string }>()
  return (
    <section className="answer-container">
      <ol className="answer-list">
        {answers.map((item, idx) => (
          <li
            className="answer-item"
            key={idx}
            onClick={() => onChangeAnswer(parseInt(match.params.index), item)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
        ))}
      </ol>
    </section>
  )
}

export default AnswerContainer
