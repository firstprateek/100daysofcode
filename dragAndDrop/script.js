document.addEventListener("dragstart", (event) => {
  console.log("dragging", event.target);
  const dragged = event.target;
  dragged.classList.add("dragging");
})

document.addEventListener("dragend", (event) => {
  const dragged = event.target;
  console.log("dragend", dragged);
  dragged.classList.remove("dragging");
})


document.querySelectorAll('.list-container').forEach(item => {
  item.addEventListener("dragover", (event) => {
    event.preventDefault();
    const itemContainer = event.currentTarget;
    const dragging = document.querySelector('.dragging');
    const res = getAdjacentElement(itemContainer, event.clientY);
    console.log(res);
    if (!res.element) {
      itemContainer.appendChild(dragging);
    } else {
      itemContainer.insertBefore(dragging, res.element);
    }
  })
})

function getAdjacentElement(container, yPos) {
  const items = [...container.querySelectorAll(".list-item:not(.dragging)")]
  return items.reduce((res, child) => {
    const dimension = child.getBoundingClientRect();
    const offset = yPos - dimension.y - ( dimension.height / 2 );
    if (offset < 0 && offset > res.offset) {
      return { offset, element: child }
    } else {
      return res
    }
  }, { offset: Number.NEGATIVE_INFINITY })
}