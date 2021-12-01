
const init = async () => {
  const response = await fetch('/.netlify/functions/signs')
  const data = await response.json()

  document.querySelector('.container').innerHTML = `
  <figure>
    <img src="${data.url}" alt="Photo from instagram"
    <figcaption>${data.caption}</figcaption>
  </figure>
  `
}
init()