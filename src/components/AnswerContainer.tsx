import React from 'react'

export interface AnswerContainerIProps {
  answers: string[]
  onChangeAnswer: (answer: string) => void
}
function AnswerContainer({ answers, onChangeAnswer }: AnswerContainerIProps): JSX.Element {
  return (
    <section>
      <ul>
        {answers.map((item, idx) => (
          <li key={idx} onClick={() => onChangeAnswer(item)}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AnswerContainer
