import tweenProperty from './tween-property'

function createArrayTweens(from, to, state, tweens = []) {
	for (let i = 0; i <= from.length; i++) {
		tweenProperty(from, to, state, tweens, i)
	}
	return tweens
}

export default createArrayTweens