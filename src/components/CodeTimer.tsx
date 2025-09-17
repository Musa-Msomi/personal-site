// components/CodeTimer.tsx
import { useState, useEffect } from 'react'

function CodeTimer() {
  const startDate = new Date('2022-02-01')
  const [timeElapsed, setTimeElapsed] = useState('')

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime()

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44))
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

      setTimeElapsed(
        `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes`
      )
    }

    calculateTime()
    const timer = setInterval(calculateTime, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-gray-700 text-lg">
      <span className="font-medium">Professional coding time: </span>
      {timeElapsed}
    </div>
  )
}

export default CodeTimer