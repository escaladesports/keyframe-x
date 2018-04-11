import clone from 'clone'
import createObjectTweens from './create-object-tweens'

function tweenObject(from, to) {
	const state = clone(from)
	let tweens = createObjectTweens(from, to, state)
	return t => {
		for(let i = 0; i < tweens.length; i++){
			tweens[i](t)
		}
		return state
	}
}

export default tweenObject