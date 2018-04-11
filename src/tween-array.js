import clone from 'clone'
import createArrayTweens from './create-array-tweens'

function tweenArray(from, to) {
	const state = clone(from)
	let tweens = createArrayTweens(from, to, state)
	return t => {
		for(let i = 0; i < tweens.length; i++){
			tweens[i](t)
		}
		return state
	}
}

export default tweenArray