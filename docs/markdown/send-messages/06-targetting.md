<!-- .slide: class="transition bg-pink" -->

# Targetting

##==##

<br><br>

## Analytics (User Audiences)

## Topics

## Imported segments (Big Query)

[Link](https://youtu.be/LR7JIsxKpBU?t=15878)

##==##

# Topic subscription (front)

<!-- .slide: class="with-code" -->

```typescript [1,6|2,4,5|3|1-6]
updateSubscriptions(): void {
    this.getToken().pipe(
      switchMap(token => this.apiService.subscribeTopics({topics: this.form.value, token})),
      takeUntil(this.destroy$)
    ).subscribe();
  }
```
<!-- .element class="big-code" -->

##==##

# Topic subscription (server)

<!-- .slide: class="with-code" -->

```typescript [1-3|4-7|1-7]
async subscribeTopic(topics: string[], token): Promise<void> {
  await Promise.all(topics.map(topic => admin.messaging().subscribeToTopic(token, topic)));
}

async unsubscribeTopic(topics: string[], token): Promise<void> {
  await Promise.all(topics.map(topic => admin.messaging().unsubscribeFromTopic(token, topic)))
}
```
<!-- .element class="big-code" -->

##==##

# Data model

<!-- .slide: class="with-code" -->
```typescript
export interface User {
  token: string;
  topic: Topic[];
}
```
<!-- .element class="big-code" -->

##==##

# Send to topic

<!-- .slide: class="with-code" -->

```typescript [1-14]
async sendMessage(body: any): Promise<void> {
    const message = await admin.messaging().send({
      notification: {
        title: body.topic,
        body: body.notification.body
      },
      topic: body.topic,
      webpush: {
        fcmOptions: {
          link: 'https://ng-firebase-cloud-messaging.web.app/'
        }
      }
    });
  }
```
