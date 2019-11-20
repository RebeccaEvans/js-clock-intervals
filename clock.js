let secondHand = document.getElementById('second');
let minuteHand = document.getElementById('minute');
let hourHand = document.getElementById('hour');
let now = new Date()
let secondDeg = now.getSeconds()
let minuteDeg = now.getMinutes()
let hourDeg = now.getHours()

const getDegrees = () => {
	let second, hour, minute
	if (secondDeg > 0) {
		second = secondDeg * 6
	}
	else {
		second = secondDeg
	}
	if (minuteDeg > 0) {
		minute = (minuteDeg * 6) + ((secondDeg/60) * 6)
	}
	else {
		minute = minuteDeg
	}
	if (hourDeg >= 13) {
		hour = ((hourDeg - 12) * 30) + ((minuteDeg/60)*30)
	}
	else if (hourDeg > 0) {
		hour = (minuteDeg/60)*30
	}
	else {
		hour = hourDeg
	}
	return [hour, minute, second]
}

let degrees = getDegrees()

secondDegUpdated = degrees[2]
minuteDegUpdated = degrees[1]
hourDegUpdated = degrees[0]

secondHand.style.transform = "rotate(" + secondDegUpdated + "deg)"
minuteHand.style.transform = "rotate(" + minuteDegUpdated + "deg)"
hourHand.style.transform = "rotate(" + hourDegUpdated + "deg)"

setInterval(function(){
	secondHand.style.transform = "rotate(" + secondDegUpdated + "deg)"
	minuteHand.style.transform = "rotate(" + minuteDegUpdated + "deg)"
	hourHand.style.transform = "rotate(" + hourDegUpdated + "deg)"
	secondDegUpdated += 1
	minuteDegUpdated += .1
	hourDegUpdated += 1/120
 }, 1000);