import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [sum, setSum] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleAdd(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const params = new URLSearchParams({ a: A, b: B });
      const response = await fetch(
        `https://b0upvso9xk.execute-api.us-east-1.amazonaws.com/live?${params}`
      );

      if (!response.ok) {
        throw new Error('The API request failed.');
      }

      const data = await response.json();
      setSum(data.sum);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Add A and B</h1>
          <form className="addition-form" onSubmit={handleAdd}>
            <label>
              A
              <input
                type="number"
                value={A}
                onChange={(event) => setA(event.target.value)}
                required
              />
            </label>
            <label>
              B
              <input
                type="number"
                value={B}
                onChange={(event) => setB(event.target.value)}
                required
              />
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add'}
            </button>
          </form>
          {sum !== null && <p role="status">A + B = {sum}</p>}
          {error && <p role="alert">{error}</p>}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
