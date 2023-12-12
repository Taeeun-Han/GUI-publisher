
const draggableHandle = document.getElementById('draggableHandle');
let isDragging = false;

draggableHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    draggableHandle.style.cursor = 'grabbing';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isDragging = false;
        draggableHandle.style.cursor = 'grab';
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (isDragging) {
        const containerRect = draggableHandle.parentElement.getBoundingClientRect();
        const newX = e.clientX - containerRect.left;

        // Limit the handle's movement within the container
        const maxX = containerRect.width - draggableHandle.offsetWidth;
        const clampedX = Math.min(Math.max(newX, 0), maxX);

        draggableHandle.style.left = `${clampedX}px`;

        // Calculate and use the clampedX value for adjusting volume or any other parameter
        const percentage = (clampedX / maxX) * 100;
        console.log(`Adjusted Value: ${percentage.toFixed(2)}%`);
    }
}