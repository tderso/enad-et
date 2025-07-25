# frozen_string_literal: true

source "https://rubygems.org"

# gem 'openssl', '3.2.1'

# Added to resolve Kernel#require': cannot load such file -- csv (LoadError)
# required with Ruby-3.4.5
gem 'csv'

# Added to resolve 'Kernel#require': cannot load such file -- base64 (LoadError)
# required in Ruby-3.4.5
gem 'base64' 

# Added to resolve 'Kernel#require': cannot load such file -- bigdecimal (LoadError)
# required in Ruby-3.4.5
gem 'bigdecimal'

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"

# gem "jekyll", "~> 3.8.7"
gem "jekyll", "~> 4.3.1"

group :jekyll_plugins do
    # gem "jekyll-mentions", "1.6.0"
    # gem "webrick", "~> 1.7"
end

