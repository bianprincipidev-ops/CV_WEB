function initPastelBackground() {
    const container = document.createElement('div');
    container.id = 'bg-canvas';
    document.body.prepend(container);

    const colors = ['#f4dada', '#d5e2d4', '#e2e0ff', '#fef3c7'];
    
    for (let i = 0; i < 5; i++) {
        const blob = document.createElement('div');
        blob.className = 'blob';
        
        const size = Math.random() * 300 + 200;
        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        
        blob.style.backgroundColor = colors[i % colors.length];
        blob.style.top = `${Math.random() * 100}%`;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(blob);
    }
}

window.addEventListener('load', initPastelBackground);