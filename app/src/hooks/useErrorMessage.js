import { useState } from 'react'

export const useErrorMessage = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  return {
    errorMessage,
    setErrorMessage
  }
}
