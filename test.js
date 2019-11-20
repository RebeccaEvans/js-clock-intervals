
const getDegrees = () => {
	let now = new Date()
	let secondDeg = now.getSeconds()
	let minuteDeg = now.getMinutes()
	let hourDeg = now.getHours()
	
	if (secondDeg > 0) {
		secondDeg = secondDeg * 6
	}
	if (minuteDeg > 0) {
		minuteDeg = (minuteDeg * 6) + ((secondDeg/60) * 6)
	}  
	if (hourDeg >= 13) {
		hourDeg = ((hourDeg - 12) * 30) + ((minuteDeg/60)*30)
	}
	if (hourDeg > 0) {
		hourDeg = (minuteDeg/60)*30
	}
	return [hourDeg, minuteDeg, secondDeg]
}

let degrees = getDegrees()

