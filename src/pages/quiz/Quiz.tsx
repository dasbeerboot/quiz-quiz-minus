import React from 'react'
import { IQuiz } from '../../models/quiz'
import AnswerContainer from '../../components/AnswerContainer'

export interface QuizIProps {
  quiz: IQuiz | undefined
  onSelectAnswer: (answer: string) => void
}

function Quiz({ quiz, onSelectAnswer }: QuizIProps): JSX.Element {
  if (!quiz) return <div></div>
  return (
    <article>
      <div className="quiz-title">
        <h2>
          <div dangerouslySetInnerHTML={{ __html: quiz.question }}></div>
        </h2>
      </div>
      <div className="quiz-content">
        <AnswerContainer answers={quiz.answers} onChangeAnswer={onSelectAnswer} />
      </div>
    </article>
  )
}

export default Quiz
