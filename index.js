import { IntersectingCirclesSpinner } from 'epic-spinners'

window.onload = function(){
  const intersecting-circles-spinner = document.getElementById('loading');
  intersecting-circles-spinner.classList.add('loaded');
}

<intersecting-circles-spinner
  :animation-duration="1200"
  :size="70"
  color="#ff1d5e"
/>
