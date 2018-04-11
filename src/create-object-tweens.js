import tweenProperty from './tween-property'

function createObjectTweens(from, to, state, tweens = []) {
	for (let i in from) {
		tweenProperty(from, to, state, tweens, i)
	}
	return tweens
}

export default createObjectTweens