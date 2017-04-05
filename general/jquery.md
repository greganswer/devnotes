```coffee
  # Auto resize textarea as input increases
  $('textarea').each(->
    @setAttribute 'style', 'height:' + @scrollHeight + 'px; overflow-y: hidden;'
    return
  ).on 'input', ->
    @style.height = 'auto'
    @style.height = @scrollHeight + 'px'
    return
```
