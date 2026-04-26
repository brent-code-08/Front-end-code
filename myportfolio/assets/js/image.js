
function openModal(img) 
{
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.add("show");
  modalImg.src = img.src;
}

function closeModal() 
{
  document.getElementById("imageModal").classList.remove("show");
}
