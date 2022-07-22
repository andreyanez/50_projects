const container = document.querySelector('.container') 
const images = document.querySelectorAll('.panel') 
 
const handler = function (panelClicked) {
  images.forEach(panel => panel.classList.remove('active')) 
  panelClicked.classList.add('active')
}
 
container.addEventListener('click', function (e) {
  const panelClicked = e.target.closest('.panel')
  //this is when we click on anything outside the panels
  if(!panelClicked) return
  handler(panelClicked)
})