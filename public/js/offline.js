// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => {
            console.log('Service Worker registered successfully.');
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
