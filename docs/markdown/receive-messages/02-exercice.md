<!-- .slide: class="exercice" -->

# Add message listeners

## Lab

- to **the service worker** to receive messages in the background
- to **the application** to receive messages in the foreground

##==##

# Foreground

<!-- .slide: class="with-code" -->

```typescript [1|3|5,9|5-9]
import {Messaging, onMessage} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

ngOnInit(): void {
  onMessage(this.messaging, (payload) => {
    console.log("Message received. ", payload);
  });
}
```
<!-- .element class="big-code" -->

##==##

# Foreground

<!-- .slide: class="with-code" -->

```typescript [7]
import {Messaging, onMessage} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

ngOnInit(): void {
  onMessage(this.messaging, (payload) => {
    displayCustomNotification(payload);
  });
}
```
<!-- .element class="big-code" -->

##==##

# Foreground

<!-- .slide: class="with-code" -->

```typescript [7]
import {Messaging, onMessage} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

ngOnInit(): void {
  onMessage(this.messaging, (payload) => {
    new Notification(payload);
  });
}
```
<!-- .element class="big-code" -->

[Link](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification)

##==##

# Background

![](./assets/images/notification-mobile.webp)

##==##

# Background

<!-- .slide: class="with-code" -->

firebase-messaging-sw.js
```typescript [1,2|4-8]
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import { getMessaging, onBackgroundMessage, isSupported } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-messaging-sw.js';

const app = initializeApp({
  projectId: '...',
  appId: '...',
  messagingSenderId: '...'
});
```
<!-- .element class="big-code" -->

##==##

# Background

<!-- .slide: class="with-code" -->

firebase-messaging-sw.js
```typescript [1,8|2,7|3|4-6|1-8]
isSupported().then(isSupported => {
  if (isSupported) {
    const messaging = getMessaging(app);
    onBackgroundMessage(messaging, ({ notification: { title, body, image } }) => {
      self.registration.showNotification(title, { body, icon: image });
    });
  }
});
```
<!-- .element class="big-code" -->

##==##

# Notifications patterns

- listen to close event
- open a specific window
- merge multiple notifications

[Link](https://web.dev/push-notifications-common-notification-patterns/)
