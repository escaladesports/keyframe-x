import { expect } from 'chai'
import objectTween from '../src'

describe('Object tween', () => {
	it('Should deep tween an object', () => {
		const from = {
			a: 0,
			b: 100,
			hundred: {
				c: 100,
				d: 200,
			},
			negative: {
				e: -50,
				f: 50,
			},
		}
		const to = {
			a: 100,
			b: 0,
			hundred: {
				c: 200,
				d: 100,
			},
			negative: {
				e: 50,
				f: -50,
			}
		}
		const tween = objectTween(from, to)
		const state = tween(.5)
		expect(state.a).to.equal(50)
		expect(state.b).to.equal(50)
		expect(state.hundred.c).to.equal(150)
		expect(state.hundred.d).to.equal(150)
		expect(state.negative.e).to.equal(0)
		expect(state.negative.f).to.equal(0)
	})

	it('Should deep tween an array', () => {
		const from = [
			[ 0 ],
			100
		]
		const to = [
			[ 100 ],
			0
		]
		const tween = objectTween(from, to)
		const state = tween(.5)
		expect(state[0][0]).to.equal(50)
		expect(state[1]).to.equal(50)
	})
})