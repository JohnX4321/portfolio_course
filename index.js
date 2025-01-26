console.log('Happy developing ✨');

document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
    });

    // Toggle dark mode
    const toggleDarkModeButton = document.createElement('button');
    toggleDarkModeButton.textContent = 'Toggle Dark Mode';
    document.body.prepend(toggleDarkModeButton);

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Project detail modal
    const projectSections = document.querySelectorAll('#projects .project');
    projectSections.forEach(section => {
        section.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Project details go here.</p>
                </div>
            `;
            document.body.appendChild(modal);

            const closeModalButton = modal.querySelector('.close');
            closeModalButton.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
});
