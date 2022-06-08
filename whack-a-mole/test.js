

const firstMole = document.querySelector('.wgs__mole-head');

console.dir(firstMole);


function removeWGClicked () {
  const firstWGClicked = document.querySelectorAll('.wg__clicked');
  for (wgDiv of firstWGClicked) {
    wgDiv.remove();
  }
}

firstMole.addEventListener('click', (_evt) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add('wg__clicked');

  console.dir(newDiv);
  firstMole.parentElement.append(newDiv);

  setTimeout(removeWGClicked, 300);
});
