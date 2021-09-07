import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { sendQuery, getOffersQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchOffersError = {
	message: string
}

export const fetchOffers = createAsyncThunk<
	any[],
	string[],
	{ rejectValue: FetchOffersError }
>('offers/fetch', async (limit: string[], thunkApi) => {
	const response = await sendQuery(getOffersQuery())
	const offers = response?.data?.data?.ads

	if (response.status !== 200) {
		return thunkApi.rejectWithValue({
			message: 'Failed to fetch offers.',
		})
	}
	return offers
})

export const offersSlice = createSlice({
	name: 'offers',
	initialState: {
		offers: [] as any[],
		status: '',
		error: null as FetchOffersError | null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchOffers.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})

		builder.addCase(fetchOffers.fulfilled, (state, { payload }) => {
			state.offers = payload
			state.status = 'idle'
		})

		builder.addCase(fetchOffers.rejected, (state, { payload }) => {
			if (payload) state.error = payload
			state.status = 'idle'
		})
	},
})

export const selectOffers = (state: RootState) => state.offers.offers

export const offersSelector = createSelector<RootState, any[], any[]>(
	selectOffers,
	(offers) => offers
)

export default offersSlice.reducer
