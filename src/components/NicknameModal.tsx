import React from 'react'
import { Dialog } from '@material-ui/core'

function NicknameModal(): JSX.Element {
  return (
    <Dialog open={true} onClose={() => console.log('close')}>
      <div className="nickname-modal-container">
        닉네임을 입력해주세요
        <input type="text" />
      </div>
    </Dialog>
  )
}

export default NicknameModal
