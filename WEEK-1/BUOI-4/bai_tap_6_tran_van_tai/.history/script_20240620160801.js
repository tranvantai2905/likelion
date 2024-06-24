let draggedItem = null;

document.addEventListener('dragstart', (event) => {
    if (event.target.classList.contains('item')) {
        draggedItem = event.target;
        setTimeout(() => {
            event.target.style.opacity = '0.5';
        }, 0);
    }
});

document.addEventListener('dragend', (event) => {
    if (event.target.classList.contains('item')) {
        setTimeout(() => {
            event.target.style.opacity = '1';
            draggedItem = null;
        }, 0);
    }
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('dragenter', (event) => {
    if (event.target.classList.contains('item')) {
        event.target.style.border = '2px dashed #000';

        let target = event.target;
        let parent = target.parentNode;

        let draggedIndex = Array.from(parent.children).indexOf(draggedItem);
        let targetIndex = Array.from(parent.children).indexOf(target);

        if (draggedIndex < targetIndex) {
            parent.insertBefore(target, draggedItem);
        } else {
            parent.insertBefore(draggedItem, target);
        }
    }
});

document.addEventListener('dragleave', (event) => {
    if (event.target.classList.contains('item')) {
        event.target.style.border = 'none';
    }
});

document.addEventListener('drop', (event) => {
    if (event.target.classList.contains('item') && draggedItem) {
        event.preventDefault();
        
        draggedItem.style.border="2px solid ##999"
        // Swap the positions of the dragged item and the drop target
        let target = event.target;
        let parent = target.parentNode;

        let draggedIndex = Array.from(parent.children).indexOf(draggedItem);
        let targetIndex = Array.from(parent.children).indexOf(target);

        console.log(targetIndex)

        if (draggedIndex < targetIndex) {
            parent.insertBefore(target, draggedItem);
        } else {
            parent.insertBefore(draggedItem, target);
        }

        event.target.style.border = 'none';

        checkSuccessRow(targetIndex, parent);
    }
});

const checkSuccessRow = (targetIndex, node) => {
    let beginIdx = Math.floor((targetIndex + 1) / 12);

    const rowArray = getRow(targetIndex, node);

    console.log(rowArray[0].children[0].alt)

    for(cell in rowArray){

    }
}

const getRow = (index, node) => {
    return Array.from(node.children).slice(index, index + 12);
};

const getTitle = (node) => {
    return node.children[0].alt
}