<!-- .slide: class="transition bg-pink" -->

# Permission

##==##

<!-- .slide: class="two-column" data-background="./web_modules/sfeir-school-theme/images/bg-blue-1.png" -->

##--##

<br><br><br>

# Default

# Granted

# Denied

##==##

# Permission

<!-- .slide: class="with-code" -->

```typescript [1,6|2-5]
Notification.requestPermission.then(permission => {
  // If the user accepts, let's create a registration token
  if (permission === 'granted') {
    // ...
  }
});
```
<!-- .element class="big-code" -->
