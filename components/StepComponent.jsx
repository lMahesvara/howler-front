import React, { useState } from 'react'
import ModalSignUp from './ModalSignUp'
import ModalPassword from './ModalPassword'

const StepComponent = ({handleCloseModal}) => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  switch (step) {
    case 1:
      return <ModalSignUp 
      handleNextStep={handleNextStep} 
      handleCloseModal={handleCloseModal}
      />
    case 2:
      return <ModalPassword 
      handlePrevStep={handlePrevStep}
      handleCloseModal={handleCloseModal} />
    default:
      return null
  }
}

export default StepComponent
