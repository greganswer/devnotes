## Table of contents

- [Install or update Homebrew](#install-or-update-homebrew)
- [Install or update rbenv](#install-or-update-rbenv)
- [Install Ruby](#install-ruby)
- [Install Rails](#install-rails)
- [Setup Pow](#setup-pow)

## Install or update Homebrew

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**OR**

```shell
brew update && brew cleanup && brew cask cleanup && brew doctor
```

## Install or update rbenv

```shell
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
```

**OR**

```shell
brew upgrade rbenv ruby-build
```

## Install Ruby

```shell
rbenv install 2.4.0 && rbenv global 2.4.0 && ruby -v
```

## Install Rails

```shell
gem install rails -v 5.0.1 && rbenv rehash && rails -v
```

## Setup Pow

[Pow](http://pow.cx/) is a is a zero-config Rack server for Mac OS X. It allows you to directly map folders to a local URL. 

**Example:**
```shell
/root/path/code/projectname -> http://projectname.dev/
```

**Setup:**
```shell
curl get.pow.cx | sh
echo 'export PATH="$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH"' >> ~/.powconfig && touch ~/.pow/restart.txt
```

**Additional commands:**

```shell
# Restart the server
touch ~/.pow/restart.txt

# Configure
ln -s /path/to/myapp ~/.pow

# Remove a Link:
cd ~/Library/Application Support/Pow/Hosts
rm link_name
```

#### Accessing Virtual Hosts from Other Computers

Construct your xip.io domain by appending your application's name to your LAN IP address followed by .xip.io. For example, if your development computer's LAN IP address is 10.0.1.43, you can visit myapp.dev from another computer on your local network using the URL: 

```
http://myapp.10.0.1.43.xip.io/
```
