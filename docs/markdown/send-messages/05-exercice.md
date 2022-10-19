<!-- .slide: class="exercice" -->

# Send a message

## Lab

- save the registration token in database
- send a message to a device

##==##

# Data model

<!-- .slide: class="with-code" -->
```typescript
export interface User {
  token: string;
}
```
<!-- .element class="big-code" -->

##==##

# Save the token

<!-- .slide: class="with-code" -->

```typescript
await this.prisma.user.create({
      data: {
        token: data.token
      }
    });
```
<!-- .element class="big-code" -->

##==##

# Send the message

<!-- .slide: class="with-code" -->

```typescript [1|3-8|1-8]
import * as admin from 'firebase-admin';

await admin.messaging().sendToDevice(data.token, {
      notification: {
        title: 'Permission accepted!',
        body: 'You will receive further notifications'
      },
    });
```
<!-- .element class="big-code" -->

##==##

# Solution

<!-- .slide: class="with-code" -->

```typescript [1|3, 16|4-8|10-15|1-16]
import * as admin from 'firebase-admin';

async saveToken(data: UserPayload): Promise<void> {
    await this.prisma.user.create({
      data: {
        token: data.token
      }
    });

    await admin.messaging().sendToDevice(data.token, {
      notification: {
        title: 'Permission accepted!',
        body: 'You will receive further notifications'
      },
    });
  }
```

##==##

# Angular

<!-- .slide: class="with-code" -->

```typescript [1|10,15|11,14|11,14,3-8|11,12,14|11-14|1-15]
constructor(private readonly apiService: ApiService) {}

getToken(): Observable<string> {
  return from(getToken(this.messaging, {
    serviceWorkerRegistration: this.registration,
    vapidKey: '...'
  }));
}
  
requestPermission(): void {
  this.getToken().pipe(
    switchMap(token => this.apiService.saveToken(token)),
    takeUntil(this.destroy$)
  ).subscribe();
}
```
