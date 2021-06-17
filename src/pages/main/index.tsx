import React, { useState, useEffect, useMemo } from 'react'
import './index.scss'
import Quiz from '../quiz/Quiz'
import axios from 'axios'
import config from '../../configs/config'
import { IQuiz } from '../../models/quiz'
import { useHistory } from 'react-router'
import { useRouteMatch } from 'react-router-dom'
import ResultPage from '../result/result'
import NicknameModal from '../../components/NicknameModal'
import { Backdrop, CircularProgress, Dialog } from '@material-ui/core'

function MainPage(): JSX.Element {
  const match = useRouteMatch<{ index: string }>()
  const history = useHistory()
  const search = window.location.search
  const urlParams = useMemo(() => {
    return new URLSearchParams(search)
  }, [search])
  const [isOnResultPage, setIsOnResultPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [quiz, setQuiz] = useState<IQuiz>()
  const [quizIndex, setQuizIndex] = useState(0)
  const [result, setResult] = useState<boolean[]>([])
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [isSelected, setIsSelected] = useState({ selected: false, index: 0 })

  // const renderLoading = useMemo(() => {
  //   if (isLoading)
  //     return (
  //       <Dialog open={isLoading} onClose={() => console.log('for loading')}>
  //         <CircularProgress />
  //       </Dialog>
  //     )
  // }, [isLoading])

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

  const handleChangeAnswer = (index: number, selectedAnswer: string) => {
    console.log(index)
    const arr = result
    if (result === []) {
      arr.push(correctAnswer === selectedAnswer)
    } else {
      arr[index] = correctAnswer === selectedAnswer
    }
    setResult(arr)
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
        <ResultPage result={result} />
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
        <button className="start-button" onClick={goNextPage} disabled={isLoading}>
          Start
        </button>
      )}
    </div>
  )
}

export default MainPage
