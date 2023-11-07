function handleStaffFun(image, isHovering) {
    const normalSrc = image.getAttribute('data-normal-src');
    const funSrc = image.getAttribute('data-fun-src');
  
    if (isHovering) {
      image.src = funSrc;
    } else {
      image.src = normalSrc;
    }
}