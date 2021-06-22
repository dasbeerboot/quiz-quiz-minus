import React from 'react'
import { render } from '@testing-library/react'
import { unmountComponentAtNode } from 'react-dom'
import Button, { ButtonIProps } from '../../components/Button'
import { BrowserRouter } from 'react-router-dom'

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

describe('<Button />', () => {
  const sampleButtonProps: ButtonIProps = {
    children: 'test',
    className: 'test-button',
    disabled: true,
    onClick: jest.fn(),
  }

  const setup = (buttonProps: ButtonIProps) => {
    const utils = render(
      <BrowserRouter>
        <Button
          className={buttonProps.className}
          onClick={buttonProps.onClick}
          disabled={buttonProps.disabled}
        >
          {buttonProps.children}
        </Button>
      </BrowserRouter>,
    )
    const { getByText } = utils

    const button = getByText('test')

    return {
      button,
    }
  }

  it('disabled 동작 확인/ disabled === true 일때', () => {
    const { button } = setup(sampleButtonProps)
    expect(button).toBeDisabled()
  })

  it('disabled 동작 확인/ disabled === false 일때', () => {
    const { button } = setup({ ...sampleButtonProps, disabled: false })
    expect(button).not.toBeDisabled()
  })
})
