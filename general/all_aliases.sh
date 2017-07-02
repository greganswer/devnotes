
#   GIT
#--------------------------------------------------------
alias gc="git add . && git commit -m"
alias gs="git status"
alias gd="git diff"
alias gs="git status -s"
alias gco="git checkout"
alias gcob="git checkout -b"
alias gl='git log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short'

# alias ggbranch="git checkout -b"
# alias ggstatus="git status"
# alias ggcommit="git commit -m"
function pre_commit {
  i18n-tasks normalize && bundle exec rspec  && bundle exec cucumber
}
function ggcreate_squash_off_master {
  git pull --rebase=preserve && git checkout -b squashing_branch && git rebase -i master
}
function ggmerge_squash_into_staging_and_deploy_staging {
  git checkout staging && git merge squashing_branch && git push && deploy_staging
}
function ggdanger_merge_squash_into_master_and_delete_and_deploy_production {
  git checkout master && git merge squashing_branch && git branch -d squashing_branch && git push && deploy_production
}

# ours and theirs
function ggours {
  git checkout --ours $@
}
function ggtheirs {
  git checkout --theirs $@
}

#   SERVER MANAGMENT
#--------------------------------------------------------
alias ssh_issuetrackerapp="ssh forge@192.241.136.39"
alias ssh_portfolio="ssh deploy@67.205.178.172"
function deploy_greganswer {
  cd ~/code/sites/greganswer
  cap production deploy
  osascript -e 'display notification "Deployed GregAnswer.com" with title "Deployment Complete"'
  cd -
}
function deploy_staging {
  cap staging deploy
  osascript -e 'display notification "Deployed to staging." with title "Deployment Complete"'
}
function deploy_production {
  read -p "Are you sure you want to deploy to production? [y/N]"
  echo    # (optional) move to a new line
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
      bundle exec cap production deploy
      osascript -e 'display notification "Deployed to PRODUCTION." with title "Deployment Complete"'
  fi
}


#   FOLDERS
#--------------------------------------------------------
alias sites="cs ~/code/sites"
alias devfiles="cs ~/code/devfiles"
alias devnotes="cs ~/code/devnotes"

#   HOME BREW
#--------------------------------------------------------
alias brew_update="brew update && brew cleanup && brew cask cleanup && brew doctor"


#   Virtual Machine
#--------------------------------------------------------
function powrestart {
  echo "Restarting Pow & Spring..."
  touch ~/.pow/restart.txt && spring stop
}
alias powlinks="cs ~/Library/Application\ Support/Pow/Hosts"
function makepowlink {
  ln -s "$PWD/$1" "$HOME/.pow"
}


#   RAILS
#--------------------------------------------------------
alias rails_init="ruby $HOME/code/sites/rails_init/rails_setup.rb"
alias be="bundle exec"
alias normalize_i18n="i18n-tasks normalize"
# function start {
#   mysql.server start
#   rake log:clear
#   osascript -e 'display notification "Server started. Logs cleared." with title "Server"'
#   say 'Server started. Logs cleared.'
# }

# rake db:environment:set RAILS_ENV=staging db:drop db:create db:migrate db:seed
# rake db:environment:set RAILS_ENV=staging db:migrate db:seed
alias rakeroutes="bundle exec rake routes"
alias reset_db="powrestart && bundle exec rake db:environment:set RAILS_ENV=development db:drop db:create db:migrate db:seed "
alias routes="rake routes"

function rakedb_reset {
  powrestart
  echo "Reseting test database..."
  bundle exec rake db:environment:set RAILS_ENV=test db:drop db:create db:migrate
  echo "Reseting development database..."
  bundle exec rake environment db:drop db:create db:migrate db:seed
  osascript -e 'display notification "Database reset complete" with title "Rake"'
  # say Feenee
}

function railssetup {
  ruby $HOME/code/devfiles/scripts/rails_setup.rb
  osascript -e 'display notification "Application ready" with title "Rails"'
  say "Application ready"
}
alias cop="rubocop -RD -f simple"
alias copfull="rubocop -RD --auto-gen-config"
alias appcheck="bundle-audit && brakeman && rake stats && rubycritic && i18n-tasks health && cop"

function appmetrics_2 {
  echo "CONTROLLER METRICS"
  echo "-------------------------------"
  echo "WORD COUNT"
  wc -l app/controllers/**/*.rb | sort -r
  echo ""
  wc -l app/controllers/*.rb | sort -r
  echo ""
  echo "FLOG SCORE"
  flog app/controllers/**/*.rb
  flog app/controllers/*.rb
  echo ""
  echo "MODEL METRICS"
  echo "-------------------------------"
  echo "WORD COUNT"
  wc -l app/models/**/*.rb | sort -r
  echo ""
  wc -l app/models/*.rb | sort -r
  echo ""
  echo "FLOG SCORE"
  flog app/models/**/*.rb
  flog app/models/*.rb
}



#   RSPEC
#--------------------------------------------------------
alias spec_actions="bundle exec rspec spec/actions -fd --color"
alias spec_controllers="bundle exec rspec spec/controllers -fd --color"
alias spec_decorators="bundle exec rspec spec/decorators -fd --color"
alias spec_features="bundle exec rspec spec/features -fd --color"
alias spec_models="bundle exec rspec spec/models -fd --color"
alias spec_policies="bundle exec rspec spec/policies -fd --color"
alias spec_services="bundle exec rspec spec/services -fd --color"
alias spec_tests="echo 'RUNNING RSPEC' && bundle exec rspec"
alias spec_views="bundle exec rspec spec/views -fd --color"

alias spec_tests_only_exit_code="spec_tests --fail-fast --out /dev/null --format progress > /dev/null 2>/dev/null"



#   EDITING
#--------------------------------------------------------
# -w causes terminal to wait till file is closed
export VISUAL="sublime -w"
# export EDITOR=nano
export EDITOR="$VISUAL"

alias malias="sublime ~/google_drive/Mackup/.aliases"
alias lalias="nano ~/.bashrc"

alias bashup="source ~/.bash_profile"
alias lbashup="source ~/.bashrc"
alias sshkey="cat ~/.ssh/id_rsa.pub | pbcopy && echo 'Copied to clipboard.'"


#   SERVER
#--------------------------------------------------------
alias ssh_neonote="ssh deploy@45.55.250.56"

alias nginx_restart="sudo service nginx restart"
alias nginx_start="sudo service nginx start"
alias nginx_stop="sudo service nginx stop"
alias nginx_test="sudo nginx -t"
alias nginx_status="sudo nginx -t"
alias pass_restart="touch tmp/restart.txt"  # Run from app root directory

alias server_restart="sudo shutdown -r now"
alias server_update="sudo apt-get update && sudo apt-get upgrade"



#    2.  MAKE TERMINAL BETTER
#--------------------------------------------------------
alias cp='cp -iv'                           # Preferred 'cp' implementation
alias mv='mv -iv'                           # Preferred 'mv' implementation
alias mkdir='mkdir -pv'                     # Preferred 'mkdir' implementation
alias ll='ls -FGlAhp'                       # Preferred 'ls' implementation
cs() { cd "$@" && ll; }                     # Change directory and list contents
alias cd..='cd ../'                         # Go back 1 directory level (for fast typers)
alias ..='cd ../ && ll'                     # Go back 1 directory level and list contents
alias ...='cd ../../ && ll'                 # Go back 2 directory levels and list contents
alias edit='sublime'                        # edit:         Opens any file in sublime editor
alias f='open -a Finder ./'                 # f:            Opens current directory in MacOS Finder
alias ~="cd ~"                              # ~:            Go Home
alias c='clear'                             # c:            Clear terminal display
alias which='type -all'                     # which:        Find executables
alias path='echo -e ${PATH//:/\\n}'         # path:         Echo all executable Paths
alias cic='set completion-ignore-case On'   # cic:          Make tab-completion case-insensitive
mkcd() { mkdir "$1" && cd "$1"; }           # mkcd:         Makes new Dir and jumps inside



#   6.  SYSTEMS OPERATIONS & INFORMATION
#--------------------------------------------------------
# Disable the sound effects on boot
alias disableStartupSound='sudo nvram SystemAudioVolume=" "'
#     Recursively delete .DS_Store files
alias cleanupDS="find . -type f -name '*.DS_Store' -ls -delete"

#   finderShowHidden:   Show hidden files in Finder
#   finderHideHidden:   Hide hidden files in Finder
alias finderShowHidden='defaults write com.apple.finder ShowAllFiles TRUE'
alias finderHideHidden='defaults write com.apple.finder ShowAllFiles FALSE'

#   cleanupLS:  Clean up LaunchServices to remove duplicates in the "Open With" menu
alias cleanupLS="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user && killall Finder"




#   Laravel
#--------------------------------------------------------
# alias apps_laravel="cs ~/code/laravel"
# alias art="php artisan"
# alias art_tinker="art tinker"
# alias art_test="art make:test"
# alias art_event_generate="art event:generate"
# alias art_notification="art make:notification"
# alias art_request="art make:request"
# alias art_controller="art  make:controller --resource"
# alias art_create_views="touch index.blade.php create.blade.php show.blade.php edit.blade.php && ll"
# alias art_model="art  make:model"
# alias art_migration="art  make:migration"
# alias art_routes="art route:list"
# alias art_refresh="art migrate:refresh --seed && art_refresh_testing"
# alias art_refresh_testing="art migrate:refresh --database=testing_database"
# # alias art_refresh="art migrate:reset && art migrate --seed && art migrate:reset --database=testing_database && art migrate --database=testing_database"
# alias cda="composer dump-autoload -o"
# alias edit_host="edit /etc/hosts"
# alias phpunit="vendor/bin/phpunit"
# alias vm_share="ngrok http -host-header=rewrite "
# alias vm_share_issuetrackerapp="vm_share issuetrackerapp.dev:80"


# function homestead() {
#     ( cd ~/Homestead && vagrant $* )
# }
# alias vm_reload="homestead reload --provision && osascript -e 'display notification \"Server Provisioned\" with title \"Virtual Machine\"'"
# alias vm_suspend="homestead suspend"
# alias vm_up="homestead up && osascript -e 'display notification \"Server Provisioned\" with title \"Virtual Machine\"'"

# alias vm="sites && vagrant up && osascript -e 'display notification \"Server Provisioned\" with title \"Virtual Machine\"' && say up && vagrant ssh"
# alias vm_suspend="sites && vagrant suspend"
# alias vm_reload="sites && vagrant reload --provision && vm"
# alias vm_destroy="sites && vagrant destroy && vm_reload"
# alias vm_uninstall="sudo rm -rf /Applications/Vagrant /usr/bin/vagrant ~/.vagrant.d && sudo pkgutil --forget com.vagrant.vagrant"

