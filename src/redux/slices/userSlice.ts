import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { sendQuery, registerUserMutation } from '../../graphqlHelper';

type FetchUserRegistrationError = {
  message: string
}

interface UserData {
  username: string
}

interface UserRegister {
  username: string
  password: string
  email: string
  confirmPassword: string
  role: string
}

interface FormPayload {
  register: UserRegister
}

export const fetchUserRegistration = createAsyncThunk<
  FormPayload,
  UserRegister,
  {
    dispatch: AppDispatch
    state: RootState
    rejectValue: FetchUserRegistrationError
  }
>(
  'user/fetchUserRegistration',
  async (userToRegister, thunkApi) => {
    const { username, password, email, confirmPassword, role } = userToRegister
    const response = await sendQuery(registerUserMutation(username, password, email, confirmPassword, role))
    const user = response?.data?.data
    
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch user.',
      })
    }
    const errorMessage = response?.data?.errors
    if (errorMessage) {
      return thunkApi.rejectWithValue({
        message: errorMessage?.[0].message,
      })
    }
    return user
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { username: '', password: '', confirmPassword: '', email: '', role: ''} as UserData,
    status: '',
    userFregistrationError: null as FetchUserRegistrationError | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserRegistration.pending, (state) => {
      state.status = 'loading'
      state.userFregistrationError = null
    })

    builder.addCase(fetchUserRegistration.fulfilled, (state, { payload }) => {
      state.user = payload?.register
      state.status = 'idle'
    })

    builder.addCase(fetchUserRegistration.rejected, (state, { payload }) => {
      if (payload) state.userFregistrationError = payload
      state.status = 'idle'
    })
  },
})

export const selectUser = (state: RootState) => state.user.user
export const selectUserRegistrationError = (state: RootState) => state?.user?.userFregistrationError
export const userSelector = createSelector<RootState, any, any>(
  selectUser,
  (user) => user
)

export const userRegistrationError = createSelector<RootState, any, any>(
  selectUserRegistrationError,
  (userFregistrationError) => userFregistrationError
)

export const selectStatus = (state: RootState) => state.user.status
export const statusSelector = createSelector<RootState, string, string>(
  selectStatus,
  (status) => status
)

export default userSlice.reducer
