import clone from 'clone'
import stringTween from 'string-tween'
import numberTween from './number-tween'

function objectTween(from, to){
	const state = clone(from)
	const tweens = createTweens(from, to, state)
	return t => {
		for(let i = 0; i < tweens.length; i++){
			tweens[i](t)
		}
		return state
	}
}

function createTweens(from, to, state, arr = []){
	if(Array.isArray(from)){
		for(let i = 0; i <= from.length; i++){
			addTween(from, to, state, arr, i)
		}
		return arr
	}
	for (let i in from) {
		addTween(from, to, state, arr, i)
	}
	return arr
}

function addTween(from, to, state, arr, i) {
	const type = typeof from[i]

	if (type === 'string') {
		let tween = stringTween(from[i], to[i])
		arr.push(t => {
			state[i] = tween(t)
		})
		return
	}

	if (type === 'number') {
		let tween = numberTween(from[i], to[i])
		arr.push(t => {
			state[i] = tween(t)
		})
		return
	}

	createTweens(from[i], to[i], state[i], arr)

}

export default objectTween