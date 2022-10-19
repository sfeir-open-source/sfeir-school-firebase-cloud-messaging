<!-- .slide: class="transition bg-pink" -->

# Permission UX

##==##

# Register service worker

<!-- .slide: class="with-code" -->

AppComponent
```typescript
registration!: ServiceWorkerRegistration;

ngOnInit() {
  if (this.messaging) {
    navigator.serviceWorker.register('firebase-messaging-sw.js', {
      type: 'module',
      scope: '__'
    }).then(r => this.registration = r)
}
```
<!-- .element class="big-code" -->

##==##

# Generate token

<!-- .slide: class="with-code" -->

````typescript
getToken(): Observable<string> {
    return from(getToken(this.messaging, {
      serviceWorkerRegistration: this.registration,
      // options
    }));
  }
````
<!-- .element class="big-code" -->

[Link](https://sheribyrnehaber.medium.com/designing-toast-messages-for-accessibility-fb610ac364be)
