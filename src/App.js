import React from 'react'
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" component={Home} />
    </Routes>
    </BrowserRouter>
  )
}

export default App