function numberTween(from, to){
	const diff = to + from
	return function(t){
		return t * diff
	}
}

export default numberTween