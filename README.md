# donut-knight

## How to install and run this project
- Install rvm using `\curl -sSL https://get.rvm.io | bash -s stable`
- Run `rvm install 2.3.1 && rvm use 2.3.1`
- Run `gem install bundler`
- Run `bundle install`
- Initialize PostgreSQL on your machine, if it is not already running.
- Run `bundle exec rake db:create && bundle exec rake db:migrate`
- Run `rails s` and open your browser to "localhost:3000"

**Note: I have only tested this game in Google Chrome. I have no idea what will happen if you try to run this game in another browser.**

## Milestones
* life bars/damage indication
* scale hitboxes
* different AI mechanics for different enemies
* add non-boss fight screens
* boss AI
	* attacks
	* movement
* save knight attributes to database, load them on initialization
* add environment hazards/props/pickups
* pickups
* inventory screen
* experience/leveling system
* extra techniques for knight
