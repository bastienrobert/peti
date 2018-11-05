const title = <h1>Hi</h1>

const hello = (
  <div id="test">
    {title}
    <h1 className="hola" ref="title">
      Bye
      <span ref="span">hi</span>
    </h1>
    <h2>Plop</h2>
  </div>
)

document.body.appendChild(hello)
