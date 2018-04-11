import tweenString from 'string-tween'
import tweenNumber from './tween-number'
import tweenObject from './tween-object'
import tweenArray from './tween-array'

function tween(from, to){
	switch(typeof from){
		case 'number':
			return tweenNumber(from, to)
		case 'string':
			return tweenString(from, to)
	}
	if(!Array.isArray(from)){
		return tweenObject(from, to)
	}
	return tweenArray(from, to)
}

export {
	tween,
	tweenString,
	tweenNumber,
	tweenObject,
	tweenArray,
}