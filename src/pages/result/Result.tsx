import React from 'react'
import moment from 'moment'
import './Result.scss'
import Button from '../../components/Button'
import { useHistory } from 'react-router-dom'

interface ResultPageIProps {
  result: boolean[]
  startTime: moment.Moment
}

function ResultPage({ result,startTime }: ResultPageIProps): JSX.Element {
  const history = useHistory()
  const currentTime = moment()
  const duration = moment.duration(currentTime.diff(startTime)).asMinutes().toFixed(0)

  const numberOfCorrectAnswers = result.filter((item) => item === true).length
  return (
    <article className="result-container">
      <div className="well-done">
        수고하셨습니다!
      </div>
      <div className="score">
        당신의 점수는 <span className="value">{numberOfCorrectAnswers * 20}</span>({numberOfCorrectAnswers}/5) 점이며
      </div>
      <div className="duration">
        총 소요시간은 <span className="value">{duration}</span>분, 
      </div>
      <div className="answers">맞은 문제는  
      <span className="value">
      {numberOfCorrectAnswers}</span>개, 틀린 문제는 <span className="value">{5 - numberOfCorrectAnswers}</span>개 입니다.</div>
      

      {
        numberOfCorrectAnswers === 5 && 
        <div className="show-me-the-money">
          당신의 손에 쥐어지는 합격목걸이
        </div>
      }
      <Button onClick={() => history.push('/')}>재도전!</Button>
    </article>
  )
}

export default ResultPage
