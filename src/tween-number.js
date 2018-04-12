function numberTween(from, to){
	const diff = to - from
	return function(t){
		return from + (t * diff)
	}
}

export default numberTween