describe('Test sum', () => {
	it('1+1', () => {
		expect(1+1).toBe(2);
	})

	it('1+2', () => {
		expect(1+2).toMatchSnapshot();
	})
})
