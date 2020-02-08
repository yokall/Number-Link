# Number Link

Number link is a puzzle game where you have to create paths of differing length to complete the board https://en.wikipedia.org/wiki/Numberlink

I am basing my implementation from the this android game https://play.google.com/store/apps/details?id=com.leaflock.connectnumbers&hl=en_US

This means that each path starts at a number square and ends at an "X" square.  The length of the patch is limited by the number starting square.  A number 3 square will only allow a path of 3 squares to be made, this is inclusive of the number and "X" square

# Aim of this project

To create a playable Numberlink puzzle and eventually implement a solver

# Current progress

Right now there is

* 5x5 grid which you can draw paths onto
* start and end squares
* paths can only be started at start tiles
* paths can only be as long as the start square number

# Future plans

* Save completed paths
* Remove paths
* Implement a solver

# Try it

https://yokall.github.io/Number-Link/