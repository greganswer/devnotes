### Class naming

```html
    <article class="ListingCard ListingCard--featured">
      <h1 class="ListingCard__title">Adorable 2BR in the sunny Mission</h1>
      <div class="ListingCard__content">
        <p>Vestibulum id ligula porta felis euismod semper.</p>
      </div>
    </article>
```

```css
/* ListingCard.css */
.ListingCard { }
.ListingCard--featured { }
.ListingCard__title { }
.ListingCard__content { }
```

### Use separate JavaScript classes

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

## Simplified naming convention

**Formula:** *noun -> verb or adjective*
**Formula:** *element type -> behavior or state *
**Example:** `.button-collapse` vs `.button-collapsed` & `.button-expanded`

**Do not nest selectors more than three levels deep!**
