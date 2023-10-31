function App() {
  return (
    <Routes>
      <Route push="/" element={<h1>Home</h1>} />
      <Route push="/about" element={<h1>About</h1>} />
    </Routes>
  )
}

export default App
