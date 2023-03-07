import Backend from '@/app/Skill/Backend'
import FrontEnd from '@/app/Skill/FrontEnd'
import React from 'react'

type Props = {}
// remeber all component must start capital lattter other wise typescript will not import by auto
const skills = (props: Props) => {
  return (
    <div>
      <FrontEnd/>
      <Backend/>
    </div>
  )
}

export default skills