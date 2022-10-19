<!-- .slide: class="transition bg-pink" -->

# Initialisation Firebase

##==##

# Configuration Firebase

<!-- .slide: class="with-code" -->

environment.ts
```json
{
  apiKey: "AIzaSyB9XZQY4J9ZQ4ZQ4ZQ4ZQ4ZQ4ZQ4ZQ4ZQ4",
  authDomain: "sfeir-school-fcm.firebaseapp.com",
  databaseURL: "https://sfeir-school-fcm.firebaseio.com",
  projectId: "sfeir-school-fcm",
  storageBucket: "sfeir-school-fcm.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:1234567890123456789012"
}
```
<!-- .element class="big-code" -->

##==##

# Initialisation Firebase

<!-- .slide: class="with-code" -->

AppModule
```typescript [1-2,5-8|3|4]
@NgModule({
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideMessaging(() => getMessaging()),
  ],
  // ...
})
export class AppModule {}
```
<!-- .element class="big-code" -->
