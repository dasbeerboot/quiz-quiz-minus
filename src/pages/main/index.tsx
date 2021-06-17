import React, { useState, useEffect, useMemo } from 'react'
import './index.scss'
import Quiz from '../quiz/Quiz'
import axios from 'axios'
import config from '../../configs/config'
import { IQuiz } from '../../models/quiz'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'

function MainPage(): JSX.Element {
  const match = useRouteMatch<{ index: string }>()
  const history = useHistory()
  let quizIndex = 0

  const [quiz, setQuiz] = useState<IQuiz>()
  const [result, setResult] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  })
  const [correctAnswer, setCorrectAnswer] = useState('')

  const getQuiz = async () => {
    axios({
      method: 'get',
      url: config.url,
    })
      .then((response) => {
        const data = response.data.results[0]
        const answerList = data.incorrect_answers
        answerList.push(data.correct_answer)

        setQuiz({
          question: data.question,
          correctAnswer: data.correct_answer,
          answers: shuffleAnswers(answerList),
        })
        setCorrectAnswer(data.correct_answer)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const shuffleAnswers = (answers: string[]) => {
    return answers.sort(() => Math.random() - 0.5)
  }

  const handleChangeAnswer = (selectedAnswer: string) => {
    setResult((prev) => ({
      ...prev,
      [match.params.index]: correctAnswer === selectedAnswer ? true : false,
    }))
    console.log(correctAnswer === selectedAnswer)
  }

  useEffect(() => {
    if (match.params.index) {
      getQuiz()
    }
  }, [match])
  console.log(quiz)
  return (
    <div className="main-page-container">
      {match.params.index ? (
        <Quiz
          quiz={quiz}
          onSelectAnswer={(selectedAnswer: string) => handleChangeAnswer(selectedAnswer)}
        />
      ) : (
        <button
          onClick={() => {
            history.push(`/${++quizIndex}`)
          }}
        >
          {'>'} Start
        </button>
      )}
    </div>
  )
}

export default MainPage
