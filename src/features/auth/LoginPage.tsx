import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectAllUsers } from '../users/usersSlice'
import { userLoggedIn } from './authSlice'
import { useNavigate } from 'react-router-dom'

interface LoginPageFormFields extends HTMLFormControlsCollection {
  username: HTMLSelectElement
}

interface LoginFormElements extends HTMLFormElement {
  readonly elements: LoginPageFormFields
}

export function LoginPage() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectAllUsers)
  const navigate = useNavigate()

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  function handleSubmit(e: React.FormEvent<LoginFormElements>) {
    e.preventDefault()

    const username = e.currentTarget.elements.username.value
    dispatch(userLoggedIn(username))
    navigate('/posts')
  }

  return (
    <section className='login-page'>
      <h2 className='title'>Welcome to Commentive!</h2>
      <form onSubmit={handleSubmit} className='login-card'>
        <h3>Please Log in:</h3>
        <div>
        <label htmlFor="username">User:</label>
        <select id="username" name="username" required>
          <option value="">Select a user</option>
          {usersOptions}
        </select>
        </div>
        <button>Log In</button>
      </form>
    </section>
  )
}
