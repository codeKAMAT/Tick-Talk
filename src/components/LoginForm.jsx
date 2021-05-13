import { useState } from 'react'
import axios from 'axios'
import logo from '../images/logo.png'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      'Project-ID': 'c85af4d0-6b09-4f88-b229-a3a28a41df25',
      'User-Name': username,
      'User-Secret': password,
    }
    try {
      // username | password => chatengine -> give message
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (e) {
      // error -> try with new username
      setError('Oops, incorrect credentials.')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='title'>Tick Talk</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Username'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            required
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
