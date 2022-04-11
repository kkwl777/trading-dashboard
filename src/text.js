
import * as React from 'react'

function useLocalStorageState(
  key,
  defaultValue = '',
  // the = {} fixes the error we would get from destructuring when no argument was passed
  // Check https://jacobparis.com/blog/destructure-arguments for a detailed explanation
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        window.localStorage.removeItem(key)
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  // Check the example at src/examples/local-state-key-change.js to visualize a key change
  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

function Notes({initialName = ''}) {
  const [note, setNote] = useLocalStorageState('note', initialName)

  function handleChange(event) {
    setNote(event.target.value)
  }

  return (
    <div style={{width:'20%'}}>
<textarea style={{width:'100%' ,height:'100%'}} class="textarea textarea-ghost text-zinc-200/100" placeholder="Notes"  value={note} onChange={handleChange} id="note"></textarea>

      {/* <form>
     
        <input style={{width:'50%'}} value={name} onChange={handleChange} id="name" />
      </form> */}
      {/* {name ? <strong>Hello {name}</strong> : 'Please type your name'} */}
    </div>
  )
}

function App() {
  return <Notes />
}

export default App
