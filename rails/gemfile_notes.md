```
gem 'terminal-notifier-guard', '~> 1.6.1'
```

Add the 2 lines below to the `Guardfile` if desired:

```
# Terminal notifier for OSX
notification :terminal_notifier, activate: 'com.googlecode.iTerm2' if `uname` =~ /Darwin/
```
