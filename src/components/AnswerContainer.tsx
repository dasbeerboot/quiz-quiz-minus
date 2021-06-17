import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import clsx from 'clsx'

export interface AnswerContainerIProps {
  answers: string[]
  isSelected: { selected: boolean; index: number }
  onChangeAnswer: (index: number, answer: string) => void
}
function AnswerContainer({
  answers,
  isSelected,
  onChangeAnswer,
}: AnswerContainerIProps): JSX.Element {
  const match = useRouteMatch<{ index: string }>()
  return (
    <section className="answer-container">
      <ol className="answer-list">
        {answers.map((item, idx) => (
          <li
            className={clsx(
              'answer-item',
              isSelected.selected && isSelected.index === idx && 'selected',
            )}
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
