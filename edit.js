
const editor = document.querySelector('textarea')
const button = document.querySelector('button')

button.onclick = e => {
  const code = `(function(){${editor.value}})()`
  executeRawCode(code)
}
