<!-- .slide: class="transition bg-pink" -->

# Setup ADMIN SDK

##==##

# Install ADMIN SDK

<!-- .slide: class="with-code" -->
  
```bash
npm install firebase-admin
```
<!-- .element class="big-code" -->

##==##

# Generate a private key

Firebase console / Settings / Service accounts / Generate new private key

![center](./assets/images/send-messages/firebase-admin-sdk-key.png)

##==##

# Initialize the SDK

<!-- .slide: class="with-code" -->

main.ts
```typescript [1|2,9|3-8|1-9]
import * as admin from 'firebase-admin';
  admin.initializeApp({
    credential: admin.credential.cert({
        projectId: "...",
        privateKey: "...",
        clientEmail: "...",
      }),
    databaseURL: "...",
  });
```
<!-- .element class="big-code" -->

