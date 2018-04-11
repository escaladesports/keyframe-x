import stringTween from 'string-tween'
import numberTween from './number-tween'

export default function(){
	const def = {
		test: '123'
	}
	const obj = {
		anotherTest: 'abc',
		...def,
	}
	return obj
}