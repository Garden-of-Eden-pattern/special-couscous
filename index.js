import { IntersectingCirclesSpinner } from 'epic-spinners'

window.onload = function(){
  const spinnerBlock = document.getElementByClassName('intersecting-circles-spinner');
  spinnerBlock.classList.add('loaded');
}

<intersecting-circles-spinner
  :animation-duration="1200"
  :size="70"
  color="#ff1d5e"
/>
