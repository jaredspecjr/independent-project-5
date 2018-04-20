# _Super Galactic Calculator_

#### _website that converts your age to a new age, 4/20/2018_

#### By _**Jared Luz**_

## Description

_Website that converts your age to a new age depending on what planet you choose._

## Setup/Installation Requirements

* _Clone the indpendent-project-five repository_
* _Run npm install in your terminal_
* _Run npm start_

_this repo should have all correct webpack dependencies. make sure you run npm install in the root folder_

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any issues please report them to Jared Lutz at jaredspecjr@gmail.com. If you yourself find a solution to a problem you find with my code, don't hesitate to add or experiment!._

## Technologies Used

_jasmine, karma, webpack, node, atom, github, css, jquery, bootstrap and html were used to accomplish this._

##Specs
Take a persons age in years and convert it into seconds
input: 18
output: 568036800
1 year = 31557600

take two dates and determine the difference, in seconds, between the two.(This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age.)

input: 08/12/1991
output: 842227200000 ?

current date 04/20/2018(1524207600) - 08/12/1991(681980400)

return age of human in Mercury years.( mercury year is .24 earth years)
input:08/12/1991
output: 108

return age of human in Venus years.(venus year is .61 earth years)
input:08/12/1991
output:42

return age of human in Mars years.(mars years is 1.88 earth years)
input:08/12/1991
output:14

return age of human in Jupiter years.(a jupiter year is 11.86)
input:08/12/1991
output: 2

Determine how many years a user has left to live on each planet… (yikes!) To do this, the
application will have to calculate the user’s life expectancy. You can determine average life
expectancy as you see fit. A simple way to do this would be to have the user input the average
life expectancy for their demographic.


Spec: user inputs average life expectancy and then calculator determines how long they have left to live.
input: 80(everage life expectancy)
(current age = 60. 80 - 60 = 20)
output: 20 years left


A more involved way to do this would be to collect other
information from the user (e.g. lifestyle, country of residence, activity level, etc.) to
determine their life expectancy.
If a user has already surpassed the average life expectancy, return the number of years they
have lived past the life expectancy.

## Gh-Pages

_ ??? //could not figure out how to get gh-pages to work with webpack in time..._

### License

*MIT License.*

Copyright (c) 2018 **_Jared Lutz_**
