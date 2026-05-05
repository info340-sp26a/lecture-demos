export function HeaderComponent(props) {
  const subtitle = "Playing with React";

  return (
    <header>
      <h1>Hello React!!</h1>
      <p>a.k.a {subtitle.toUpperCase()}</p>
    </header>
  )
}
