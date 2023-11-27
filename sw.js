self.addEventListener('push', (event) => {
    console.log("data :", event.data.json());
    console.log('pushing');
    const notification = event.data.json();
    event.waitUntil(self.registration.showNotification(notification.title,{
        body : notification.body,
        data : {
            url : notification.url,
        }
    }));
    console.log('pushed');
});

self.addEventListener('notificationclick',(event) => {
    event.waitUntil(clients.openWindow(event.notification.data.url));
})