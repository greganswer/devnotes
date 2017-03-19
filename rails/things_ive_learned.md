## Notes

1. **Always** write project setup steps in the `README` file. Include why you chose to do things this way.
2. Add links to gem repositories in the `Gemfile`
3. Discuss the full stack before starting the project (Ruby version, Rails version, database choice, gems, etc.)
1. Use constants instead of random numbers. Example: `User.page(params[:page]).per(params[:per_page] || PER_PAGE)`
1. When testing, use `Model.new` instead of `FactoryGirl.build` and `FactoryGirl.build` instead of `FactoryGirl.create` when possible

## Links

1. http://jetruby.com/expertise/common-rails-mistakes-ruby-way/
