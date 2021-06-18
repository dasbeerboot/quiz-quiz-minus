import React from 'react'
import './Intro.scss'
import Button from '../../components/Button'

interface IntroIProps {
    goNextPage: () => void
    isLoading: boolean
}

function Intro({goNextPage, isLoading}: IntroIProps):JSX.Element {
    return (
        <article className="intro-container">
          <div className="intro">
            다섯개의 랜덤 퀴즈를 풀어보세요.<br />
            아래의 '퀴즈 풀기' 버튼을 누르면 퀴즈가 시작됩니다.
          </div>
          <Button className="start-button" onClick={goNextPage} disabled={isLoading}>
            퀴즈 풀기
          </Button>
        </article>
    )
}

export default Intro