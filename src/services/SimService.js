class SimService {
	patch(sim, data) {
		return Promise.resolve({
			...sim,
			...data
		})
	}
}

export default new SimService()
