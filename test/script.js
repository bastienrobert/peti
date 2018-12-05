const Title = <h1>Hi</h1>

const Test = <div>Hello</div>

class Hello {
  constructor() {
    return <h1>Hello</h1>
  }
}

const hello = (
  <div id="test">
    <Title />
    <Test hello="test">
      <div>
        <h1>hello</h1>
        <h1>hello</h1>
      </div>
    </Test>
    <h1 className="hola">
      Bye
      <span>hi</span>
    </h1>
    <h2>Plop</h2>
    <Hello />
  </div>
)

document.body.appendChild(hello)
