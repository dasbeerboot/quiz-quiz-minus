import React, { useState, useEffect, useMemo } from 'react'
import './index.scss'
import Quiz from '../quiz/Quiz'
import axios from 'axios'
import config from '../../configs/config'
import { IQuiz } from '../../models/quiz'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@material-ui/core'
import ResultPage from '../result/Result'
import Button from '../../components/Button'
import moment from 'moment'

function MainPage(): JSX.Element {
  const match = useRouteMatch<{ index: string }>()
  const history = useHistory()
  const search = window.location.search
  const urlParams = useMemo(() => {
    return new URLSearchParams(search)
  }, [search])

  const startTime = moment()

  const [isOnResultPage, setIsOnResultPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [quizIndex, setQuizIndex] = useState(0)
  const [quiz, setQuiz] = useState<IQuiz>()
  const [result, setResult] = useState<boolean[]>([])
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [isSelected, setIsSelected] = useState({ selected: false, index: 0 })

  const getQuiz = () => {
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

  const handleChangeAnswer = (index: number, selectedAnswer: string) => {
    const arr = result
    if (result === []) {
      arr.push(correctAnswer === selectedAnswer)
    } else {
      arr[index] = correctAnswer === selectedAnswer
    }
    setResult(arr)
    setIsSelected({ selected: true, index: index })
  }

  const goNextPage = () => {
    if (match.params.index === '4') {
      history.push(`${history.location.pathname}?finished=${true}`)
    } else {
      history.push(`/${quizIndex}`)
    }
    setIsLoading(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    setIsSelected({selected: false, index: 0})
    if (match.params.index) {
      getQuiz()
      setQuizIndex(quizIndex + 1)
    }
    setIsOnResultPage(urlParams.get('finished') === 'true')
    return () => {
      clearTimeout(timeout)
    }
  }, [match])

  return (
    <div className="main-page-container">
      <Backdrop open={isLoading} onClick={() => console.log('loading')}>
        <CircularProgress />
      </Backdrop>
      {isOnResultPage ? (
        <ResultPage result={result} startTime={startTime} />
      ) : match.params.index ? (
        <Quiz
          quiz={quiz}
          onSelectAnswer={(index: number, selectedAnswer: string) =>
            handleChangeAnswer(index, selectedAnswer)
          }
          onGoNextPage={goNextPage}
          isSelected={isSelected}
          isLoading={isLoading}
        />
      ) : (
        <div className="username-container">
          <div className="intro">
            다섯개의 랜덤 퀴즈를 풀어보세요.<br />
            아래의 '퀴즈 풀기' 버튼을 누르면 퀴즈가 시작됩니다.
          <Button className="start-button" onClick={goNextPage} disabled={isLoading}>
            퀴즈 풀기
          </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainPage
