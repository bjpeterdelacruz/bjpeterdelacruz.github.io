export default async () => {
    if (!('serviceWorker' in navigator)) {
        return;
    }
    const swRegistration = await navigator.serviceWorker.register('sw.js', {
        scope: '',
    });

    if (swRegistration.installing) {
        console.log("Resolved on installing: ", swRegistration);
    }
    else if (swRegistration.active) {
        console.log("Resolved on activated: ", swRegistration);
    }
}
