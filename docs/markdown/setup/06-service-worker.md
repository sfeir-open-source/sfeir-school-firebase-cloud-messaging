<!-- .slide: class="transition bg-pink" -->

# Service Worker

##==##

# Service worker option

<!-- .slide: class="with-code" -->

AppComponent
```typescript [9]
import {getToken, Messaging} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

async retrieveToken(): Promise<string> {
    await getToken(this.messaging, {
      // options
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: ...
    }));
  }
```

<!-- .element class="big-code" -->

##==##

# Service worker script

<!-- .slide: class="with-code" -->

```
firebase-messaging-sw.js
```
<!-- .element class="big-code" -->

<br><br>

angular.json (architect / build / options)

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/firebase-messaging-sw.js"
],
```

<!-- .element class="big-code" -->

##==##

# Service worker registration

<!-- .slide: class="with-code" -->

```typescript
const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js', {
        type: 'module',
        scope: '__'
      });
```

<!-- .element class="big-code" -->

##==##

# Service worker registration

<!-- .slide: class="with-code" -->

```typescript [1-4|5-9|1-9]
const registration = await navigator.serviceWorker.register('firebase-messaging-sw.js', {
        type: 'module',
        scope: '__'
      });
await getToken(this.messaging, {
      // options
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });
```

<!-- .element class="big-code" -->
