setInterval(function () {
  let theHour = new Date().getHours()
  let theMinute = new Date().getMinutes()
  let theSeconds = new Date().getSeconds()
  let theMilliseconds = new Date().getMilliseconds()

  const hourHand = document.querySelector('#hour')
  const minuteHand = document.querySelector('#minute')
  const secondHand = document.querySelector('#second')
  const millisecondHand = document.querySelector('#millisecond')

  const amPM1 = document.querySelector('.amPM1')
  const amPM2 = document.querySelector('.amPM2')
  const amPM3 = document.querySelector('.amPM3')
  const amPM4 = document.querySelector('.amPM4')
  const amPM5 = document.querySelector('.amPM5')
  const amPM6 = document.querySelector('.amPM6')
  const amPM7 = document.querySelector('.amPM7')
  const amPM8 = document.querySelector('.amPM8')
  const amPM9 = document.querySelector('.amPM9')
  const amPM10 = document.querySelector('.amPM10')
  const amPM11 = document.querySelector('.amPM11')
  const amPM12 = document.querySelector('.amPM12')

  let hour = (theHour * 3600 + theMinute * 60 + theSeconds) * 1000000
  let minute = (theMinute * 60 + theSeconds) * 1000000
  let second = (theSeconds * 1000 + theMilliseconds) * 1000000
  let milliseconds = theMilliseconds * 1000000

  hourHand.style.animation = `43200000000s infinite linear -${hour}s rotateHourHand`
  minuteHand.style.animation = `3600000000s infinite linear -${minute}s rotateMinuteHand`
  secondHand.style.animation = `60000000000s infinite linear -${second}s rotateSecondHand`
  millisecondHand.style.animation = `1000000000s infinite linear -${milliseconds}s moveMillisecond`

  theHour < 12 ? (amPM1.innerText = "AM", amPM1.style.color = 'rgb(199, 199, 199') : amPM1.innerText = "PM"
  theHour < 12 ? (amPM2.innerText = "AM", amPM2.style.color = 'rgb(199, 199, 199') : amPM2.innerText = "PM"
  theHour < 12 ? (amPM3.innerText = "AM", amPM3.style.color = 'rgb(199, 199, 199') : amPM3.innerText = "PM"
  theHour < 12 ? (amPM4.innerText = "AM", amPM4.style.color = 'rgb(199, 199, 199') : amPM4.innerText = "PM"
  theHour < 12 ? (amPM5.innerText = "AM", amPM5.style.color = 'rgb(199, 199, 199') : amPM5.innerText = "PM"
  theHour < 12 ? (amPM6.innerText = "AM", amPM6.style.color = 'rgb(199, 199, 199') : amPM6.innerText = "PM"
  theHour < 12 ? (amPM7.innerText = "AM", amPM7.style.color = 'rgb(199, 199, 199') : amPM7.innerText = "PM"
  theHour < 12 ? (amPM8.innerText = "AM", amPM8.style.color = 'rgb(199, 199, 199') : amPM8.innerText = "PM"
  theHour < 12 ? (amPM9.innerText = "AM", amPM9.style.color = 'rgb(199, 199, 199') : amPM9.innerText = "PM"
  theHour < 12 ? (amPM10.innerText = "AM", amPM10.style.color = 'rgb(199, 199, 199') : amPM10.innerText = "PM"
  theHour < 12 ? (amPM11.innerText = "AM", amPM11.style.color = 'rgb(199, 199, 199') : amPM11.innerText = "PM"
  theHour < 12 ? (amPM12.innerText = "AM", amPM12.style.color = 'rgb(199, 199, 199') : amPM12.innerText = "PM"
}, 1)