import { ChatEngine } from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID='c85af4d0-6b09-4f88-b229-a3a28a41df25'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
