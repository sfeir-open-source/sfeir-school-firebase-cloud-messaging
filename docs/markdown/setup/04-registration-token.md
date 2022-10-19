<!-- .slide: class="transition bg-pink" -->

# Registration token

##==##

# Token generation

AppComponent
<!-- .slide: class="with-code" -->

```typescript [6-8|5-9|1|3]
import {getToken, Messaging} from "@angular/fire/messaging";

constructor(private readonly messaging: Messaging) {}

async retrieveToken(): Promise<string> {
    await getToken(this.messaging, {
      // options
    }));
  }
```
<!-- .element class="big-code" -->
