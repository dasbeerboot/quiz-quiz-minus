import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import AnswerContainer, { AnswerContainerIProps } from '../../components/AnswerContainer'
import { BrowserRouter, } from 'react-router-dom'

let container: any = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('<AnswerContainer />', () => {
    const isSelected = {selected: true, index: 2}

    const sampleAnswerContainerProps: AnswerContainerIProps = {
        answers: ['one', 'two', 'three', 'four'],
        isSelected: isSelected,
        onChangeAnswer: jest.fn()
    }
  
    const setup = (answerContainerProps: AnswerContainerIProps) => {
      const utils = render(
        <BrowserRouter>
            <AnswerContainer
                answers={answerContainerProps.answers}
                isSelected={answerContainerProps.isSelected}
                onChangeAnswer={answerContainerProps.onChangeAnswer}
            />
        </BrowserRouter>,
      )
      const { getByText } = utils
  
      const listItem = getByText('three')
  
      return {
          listItem
      }
    }
  
    it('클릭시 slected 클래스 네임을 가지고 background-color 변경', () => {
      const { listItem } = setup(sampleAnswerContainerProps)
      fireEvent.click(listItem)
      expect(listItem).toHaveClass('selected')
    })
  })
  
