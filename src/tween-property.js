import tweenString from 'string-tween'
import tweenNumber from './tween-number'
import createObjectTweens from './create-object-tweens'
import createArrayTweens from './create-array-tweens'

function tweenProperty(from, to, state, tweens, i) {
	const type = typeof from[i]
	if(type === 'number'){
		let tween = tweenNumber(from[i], to[i])
		tweens.push(t => {
			state[i] = tween(t)
		})
		return
	}
	if(type === 'string'){
		let tween = tweenString(from[i], to[i])
		tweens.push(t => {
			state[i] = tween(t)
		})
		return
	}
	if(!Array.isArray(from[i])){
		return createObjectTweens(from[i], to[i], state[i], tweens)
	}
	return createArrayTweens(from[i], to[i], state[i], tweens)
}

export default tweenProperty