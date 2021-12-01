
const init = async () => {
  const response = await fetch('/.netlify/functions/signs')
  const data = await response.json()

  const neon = data.find((item) => item.caption.includes('#signsofneon'))

  document.querySelector('.container').innerHTML = `
  <figure>
    <img src="${neon.url}" alt="Photo from instagram"
    <figcaption>${neon.caption}</figcaption>
  </figure>
  `
}
init()