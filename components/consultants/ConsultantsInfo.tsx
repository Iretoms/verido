import React from 'react'
import { useParams } from 'next/navigation'

const ConsultantsInfo = () => {
    const params = useParams()
  return (
    <div>ConsultantsInfo {params.id} </div>
  )
}

export default ConsultantsInfo