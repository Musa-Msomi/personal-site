// components/FlipTimer.tsx
import { useState, useEffect } from 'react'

type TimeUnit = {
  value: number;
  label: string;
  color: string;
  prevValue?: number;
}

const cardStyle = 'bg-gray-800' 

function TimeCard({ unit }: { unit: TimeUnit }) {
    const [isFlipping, setIsFlipping] = useState(false)
  
    useEffect(() => {
      if (unit.prevValue !== undefined && unit.prevValue !== unit.value) {
        setIsFlipping(true)
        const timer = setTimeout(() => setIsFlipping(false), 500)
        return () => clearTimeout(timer)
      }
    }, [unit.value, unit.prevValue])
  
    return (
      <div className="flex flex-col items-center mx-2">
        <div className={`${cardStyle} text-white rounded-lg p-4 min-w-[80px] text-center shadow-lg relative overflow-hidden`}>
          <div 
            className={`text-3xl font-mono font-bold transition-transform duration-500 ${
              isFlipping ? 'animate-flip-down' : ''
            }`}
          >
            {unit.value.toString().padStart(2, '0')}
          </div>
          
          {isFlipping && (
            <div 
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-mono font-bold animate-flip-up"
            >
              {unit.prevValue?.toString().padStart(2, '0')}
            </div>
          )}
        </div>
        <div className="text-sm text-gray-600 mt-2 font-medium">
          {unit.label}
        </div>
      </div>
    )
  }

  function FlipTimer() {
    const [timeElapsed, setTimeElapsed] = useState({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0
    })
  
    useEffect(() => {
      const calculateTime = () => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Johannesburg',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        });
    
        const saTime = new Date(formatter.format(new Date()))
        const startDate = new Date('2022-02-01T00:00:00+02:00')
    
        let totalMonths = 
          (saTime.getFullYear() - startDate.getFullYear()) * 12 + 
          saTime.getMonth() - startDate.getMonth()
    
        if (saTime.getDate() >= startDate.getDate()) {
          totalMonths += 1
        }
    
        const years = Math.floor(totalMonths / 12)
        const remainingMonths = totalMonths % 12
    
        // Calculate days based on current date (19th)
        const days = saTime.getDate() - 1  // -1 since we started on the 1st
        const hours = saTime.getHours()
        const minutes = saTime.getMinutes()
    
        setTimeElapsed({
          years,
          months: remainingMonths,
          days,
          hours,
          minutes
        })
      }
    
      calculateTime()
      const timer = setInterval(calculateTime, 60000)
      return () => clearInterval(timer)
    }, [])
  
    // Rest of your component remains the same
    return (
      <div className="text-center">
      <p className="text-lg mb-4">I have been a professional software engineer for:</p>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {[
          { value: timeElapsed.years, label: 'Years', color: cardStyle },
          { value: timeElapsed.months, label: 'Months', color: cardStyle },
          { value: timeElapsed.days, label: 'Days', color: cardStyle },
          { value: timeElapsed.hours, label: 'Hours', color: cardStyle },
          { value: timeElapsed.minutes, label: 'Minutes', color: cardStyle }
        ].map((unit, index) => (
          <TimeCard key={index} unit={unit} />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-4">Time shown in SAST (GMT+2)</p>
    </div>
    )
  }

export default FlipTimer