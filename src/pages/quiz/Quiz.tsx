import React from 'react'
import { IQuiz } from '../../models/quiz'
import AnswerContainer from '../../components/AnswerContainer'
import { useRouteMatch } from 'react-router-dom'

export interface QuizIProps {
  quiz: IQuiz | undefined
  isSelected: { selected: boolean; index: number }
  isLoading: boolean
  onSelectAnswer: (index: number, answer: string) => void
  onGoNextPage: () => void
}

function Quiz({ quiz, isLoading, onSelectAnswer, onGoNextPage }: QuizIProps): JSX.Element {
  const match = useRouteMatch<{ index: string }>()

  if (!quiz) return <div></div>
  return (
    <article>
      <div className="quiz-title">
        <h2>
          <div dangerouslySetInnerHTML={{ __html: quiz.question }}></div>
        </h2>
      </div>
      <div className="quiz-content">
        <AnswerContainer
          answers={quiz.answers}
          onChangeAnswer={(index: number, answer: string) => onSelectAnswer(index, answer)}
        />
        <button onClick={onGoNextPage} disabled={isLoading}>
          {match.params.index !== '4' ? 'next' : 'view result'}
        </button>
      </div>
    </article>
  )
}

export default Quiz
