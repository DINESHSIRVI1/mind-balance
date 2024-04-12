document.querySelectorAll('.mood').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.mood').forEach(item => {
            item.style.transform = 'scale(1)';
        });
        event.target.style.transform = 'scale(1.2)';
    });
});
