function App() {

  console.log("RUNTIME CONFIG:", window.RUNTIME_CONFIG);
  const text = window.RUNTIME_CONFIG?.CUSTOM_HEADER;
  return (
    <div style={{ padding: "2rem", fontfamily: "Arial" }}>
      <h1>Hello from CI/CD 🚀</h1>
      <p>This react app will be deployed automatically.</p>
    </div>
 );
}
export default App
