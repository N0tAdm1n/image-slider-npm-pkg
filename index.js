function createImageSlider(images) {
  const container = document.querySelector(".img-slider-container");

  let currentIndex = 0;

  //contains all the images
  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("images-container");
  container.append(imagesContainer);

  let imgCounter = 0;
  images.forEach((image) => {
    const img = document.createElement("img");
    const imgStyle = `
    height: 70vh;
    width: 80vw;
    object-fit: contain;
    position: absolute;
    opacity: 0;
    `;

    img.style.cssText = imgStyle;

    img.src = image;

    img.dataset.index = imgCounter;

    imagesContainer.append(img);

    imgCounter++;
  });

  //buttons fo moving left and right
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("img-slider-btn-container");

  const leftBtn = document.createElement("button");
  leftBtn.classList.add("img-slider-left-btn", "img-slider-btn");
  leftBtn.textContent = "<";

  const rightBtn = document.createElement("button");
  rightBtn.classList.add("img-slider-right-btn", "img-slider-btn");
  rightBtn.textContent = ">";

  btnContainer.append(leftBtn);
  btnContainer.append(rightBtn);

  container.append(btnContainer);

  document.querySelector('[data-index="0"]').style.opacity = 1;

  const moveLeft = () => {
    if (currentIndex > 0) {
      document.querySelector(
        `[data-index="${currentIndex}"]`
      ).style.opacity = 0;
      currentIndex--;
      document.querySelector(
        `[data-index="${currentIndex}"]`
      ).style.opacity = 1;
    }
  };

  const moveRight = () => {
    if (currentIndex < images.length - 1) {
      document.querySelector(
        `[data-index="${currentIndex}"]`
      ).style.opacity = 0;
      currentIndex++;
      document.querySelector(
        `[data-index="${currentIndex}"]`
      ).style.opacity = 1;
      console.log(currentIndex);
    }
    console.log("hi");
  };

  leftBtn.addEventListener("click", moveLeft);
  rightBtn.addEventListener("click", moveRight);

  const imagesContainerStyle = `
  display: flex;
  position: relative;
  height: 70vh;
  justify-content: center;
  `;
  imagesContainer.style.cssText = imagesContainerStyle;

  const containerStyle = `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  `;
  container.style.cssText = containerStyle;

  const btnContainerStyle = `
    display: flex;
    gap: 2rem;
    margin-top: 20px;
  `;
  btnContainer.style.cssText = btnContainerStyle;

  //style for button
  const buttonStyle = `
    height: 30px;
    width: 40px;
    border: none;
    border-radius: 7px;
    background-color: #363537;
    color: #EBFBFE;
  `;
  leftBtn.style.cssText = buttonStyle;
  rightBtn.style.cssText = buttonStyle;
}

export default createImageSlider;
