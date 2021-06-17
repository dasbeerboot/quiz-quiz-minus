import { Dialog, Modal } from '@material-ui/core'
import React from 'react'

function NicknameModal(): JSX.Element {
  return (
    <Dialog open={true} onClose={() => console.log('close')}>
      <div>modal test</div>
    </Dialog>
  )
}

export default NicknameModal
