import React, { useState } from 'react'
import ModalSignUp from './ModalSignUp'
import ModalPassword from './ModalPassword'

const StepComponent = ({ compra, handleCompra }) => {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = (steps = 1) => {
    setStep(step - steps)
  }

  switch (step) {
    case 1:
      return (
        <ModalSignUp
          handleNextStep={handleNextStep}
          compra={compra}
          handleCompra={handleCompra}
        />
      )
    case 2:
      return (
        <ModalPassword
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          compra={compra}
          handleCompra={handleCompra}
        />
      )
    default:
      return (
        <ModalSignUp
          handleNextStep={handleNextStep}
          compra={compra}
          handleCompra={handleCompra}
        />
      )
  }
}

export default StepComponent
