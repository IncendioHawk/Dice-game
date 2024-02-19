export default function Home() {
  return (
    <main>
      <form action="https://ubiquitous-broccoli-wpxvrvgrjg62569x-3000.app.github.dev/login" method="post" className="login-form">
        <label htmlFor="username">Username:</label>
        <input required type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input required type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </main>
  )
}
