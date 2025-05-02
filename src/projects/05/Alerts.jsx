import React from 'react'
import Alert from '../components/Alert'

const Alerts = () => {
  return (
    <div>
      <Alert type={"bg-green-300"} message={"succesfull login"} delay={true} delayTome={1000} />
      <Alert type={"bg-green-500"} />
    </div>
  )
}

export default Alerts