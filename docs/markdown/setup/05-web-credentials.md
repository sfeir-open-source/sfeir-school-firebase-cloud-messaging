<!-- .slide: class="transition bg-pink" -->

# Web Credentials

##==##

# VAPID

> Voluntary Application Server Identification

##==##

# Generate VAPID key

Firebase console / Settings / Cloud Messaging

![center](./assets/images/setup/web-credentials.png)

##==##

# Add VAPID key

AppComponent
<!-- .slide: class="with-code" -->

```typescript [8]
import {getToken, Messaging} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

async retrieveToken(): Promise<string> {
    await getToken(this.messaging, {
      // options
      vapidKey: VAPID_KEY
    }));
  }
```
<!-- .element class="big-code" -->
