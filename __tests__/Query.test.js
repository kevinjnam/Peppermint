import { render, fireEvent, cleanup } from '@testing-library/vue'
import Query from  '../src/renderer/containers/MainLoader/MainPanel/Query.vue'

afterEach(cleanup)

test('it should have a Query label', async () => {
	const { getByText } = render(Query)

	const selectorName = getByText('Query:')
})