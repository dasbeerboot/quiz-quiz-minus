import React from 'react'
import { IQuiz } from '../../models/quiz'
import AnswerContainer from '../../components/AnswerContainer'
import { useRouteMatch } from 'react-router-dom'
import Button from '../../components/Button'

export interface QuizIProps {
  quiz: IQuiz | undefined
  isSelected: { selected: boolean; index: number }
  isLoading: boolean
  onSelectAnswer: (index: number, answer: string) => void
  onGoNextPage: () => void
}

function Quiz({
  quiz,
  isSelected,
  isLoading,
  onSelectAnswer,
  onGoNextPage,
}: QuizIProps): JSX.Element {
  const match = useRouteMatch<{ index: string }>()

  if (!quiz) return <div></div>
  return (
    <article className="quiz-container">
      <div className="quiz-title">
        <h2>
          <div dangerouslySetInnerHTML={{ __html: quiz.question }}></div>
        </h2>
      </div>
      <div className="quiz-content">
        <AnswerContainer
          answers={quiz.answers}
          isSelected={isSelected}
          onChangeAnswer={(index: number, answer: string) => onSelectAnswer(index, answer)}
        />
        <Button onClick={onGoNextPage} disabled={isLoading}>
          {match.params.index !== '4' ? 'next' : 'view result'}
        </Button>
      </div>
    </article>
  )
}

export default Quiz
