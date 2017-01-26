export const patch = (sim, data) => {
	return Promise.resolve({
		...sim,
		...data
	})
}
