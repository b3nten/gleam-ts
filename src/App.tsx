import { say_hello, add, multiply } from "./hello.gleam"

say_hello()

function App() {
  return (
    <main>
      {multiply(add(1, 2), 2)}
    </main>
  )
}

export default App
