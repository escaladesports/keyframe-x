import { expect } from 'chai'
import { tween } from '../dist'

describe('Object tween', () => {
	it('Should start tween at "from"', () => {
		expect(
			tween(100, 200)(0)
		).to.equal(100)
	})
	it('Should stop at middle', () => {
		expect(
			tween(100, 200)(.5)
		).to.equal(150)
	})
	it('Should end tween at "to"', () => {
		expect(
			tween(100, 200)(1)
		).to.equal(200)
	})
	it('Should start tween at "from" backwards', () => {
		expect(
			tween(200, 100)(0)
		).to.equal(200)
	})
	it('Should stop at middle backwards', () => {
		expect(
			tween(200, 100)(.5)
		).to.equal(150)
	})
	it('Should end tween at "to" backwards', () => {
		expect(
			tween(200, 100)(1)
		).to.equal(100)
	})
	it('Should tween a number', () => {
		const tests = [
			[0, 100, 50],
			[100, 0, 50],
			[100, 200, 150],
			[200, 100, 150],
			[-50, 50, 0],
			[50, -50, 0],
		]
		tests.forEach(nums => {
			expect(
				tween(nums[0], nums[1])(.5)
			).to.equal(nums[2])
		})
	})

	it('Should tween a string', () => {
		const state = tween('test(0)string', 'test(100)string')(.5)
		expect(state).to.equal('test(50)string')
	})

	it('Should deep tween an object', () => {
		const state = tween({
			a: 0,
			hundred: {
				c: 100,
			}
		}, {
			a: 100,
			hundred: {
				c: 200,
			}
		})(.5)
		expect(state.a).to.equal(50)
		expect(state.hundred.c).to.equal(150)
	})

	it('Should deep tween an array', () => {
		const state = tween([
			[0],
			100
		], [
			[100],
			0
		])(.5)
		expect(state[0][0]).to.equal(50)
		expect(state[1]).to.equal(50)
	})
})