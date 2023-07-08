import React, { useState } from 'react'
import ModalSignUp from './ModalSignUp'
import ModalPassword from './ModalPassword'

const StepComponent = ({ handleCloseModal }) => {
  const [step, setStep] = useState(1)
  const [user, setUser] = useState({})

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const updateUser = userObject => {
    setUser(prev => {
      return { ...prev, ...userObject }
    })
  }

  switch (step) {
    case 1:
      return (
        <ModalSignUp
          handleNextStep={handleNextStep}
          handleCloseModal={handleCloseModal}
          updateUser={updateUser}
          user={user}
        />
      )
    case 2:
      return (
        <ModalPassword
          handlePrevStep={handlePrevStep}
          handleCloseModal={handleCloseModal}
          updateUser={updateUser}
          user={user}
        />
      )
    default:
      return null
  }
}

export default StepComponent
