# Bunny Hop 

## RPG Game Phaser 3 🎮🕹

- [Bunny Hop](#bunny-hop)
  - [RPG Game Phaser 3](#rpg-game-phaser-3)
  - [About the project](#about-the-project)
  - [Live Link](#live-link)
  - [The story](#the-story)
    - [Falling off a platform](#falling-off-a-platform)
  - [How the game works](#how-the-game-works)
  - [Road map](#road-map)
  - [Prerequisites and instructions](#prerequisites-and-instructions)
    - [Instructions](#instructions)
  - [Technologies](#technologies)
  - [Acknowledgements](#acknowledgements-🙏)
  - [Contact](#contact)


## About the project

This is a web-based, endless-runner platform game built using PhaserJS version 3.24.1.
It was built for education purposes.

## Live Link

Give the game a try using the link below and watch that bunny Run!
Or is it the platforms that are moving?
[Bunny Hop](https://bunny-hop.netlify.app)

## The story

You will play the character of the bunny as he tries to hop from platform to platform.

The goal is to jump onto as many platforms as possible without falling off any platform.

Upon falling off a platform, it's game over for you 😣

### Falling off a platform

Everytime you fall off of a platform, a game over message is displayed and you can press space to try again.

## How the game works

it's pretty much straight forward!

from the menu page, after typing your name (must be 4 characters long or more)
click anywhere in the game screen to begin.
A new scene starts with the bunny running accross the first long platform,
and from there, **CLICK** anywhere on the game screen or press **SPACEBAR** to jump from platform to platform.
Easy, right?

Then upon falling off a platform and into the abys,
the **GAME OVER** message flashes along with your current score.
from here, press **SPACEBAR** to continue to the Leaderboard screen.

Here, you will find the hall of fame where only the top ten best scores are displayed.
That should give you motivation to compete harder as soon as you hit **SPACEBAR** again
to start running on the platforms again.
IF you have however landed in the Leaderboard and are already satisfied,
**CLICK** anywhere in the leaderboard screen and reset the game to the initial screen.

## Road map

Developing this game was pretty eye opening and gave me a very good opportunity to learn a new framework.
It would be my pleasure to add any features that you would suggest.

## Prerequisites and instructions

If you would however fancy something more than playing the game, you can actually download the project locally
and make any modifications of your own!

If so, please follow the given instructions.
You will need the following environments installed in your pc:

- Node Js installed

- NPM or Yarn (NPM preferable)

### Instructions 

first off, clone the repo onto your local environment:

> ```git clone https://github.com/JayKowski/endless-runner.git```

- Install the required packages with:

> ```npm install```

- Build and serve with:

> ```npx webpack```

This instance will be running at the **port 5500** in your local host.
It is also adviceable for you to have a server running HTTP as Phaser would have issues 
passing assets over a non-http server connection

I recommend live server if you're on VS Code or Atom.
it requires no other configuration and is usable just by starting live server.

## Technologies 

- Javascript ES6
- Webpack
- Netlify
- Phaser 3
- Jest (for testing)

## Acknowledgements 🙏

The intellectual part may be all me, but i have been able to make the game work and present it
as it is using assets such as:

- Sprites
- Images
- Plugins

I'll be updating and mentioning every author for every resource used in the development of this software as soon as I can do it. Especially the tech blogs that i read from.

## Contact

If you liked this project please, take your time to come hang out with me or checkout my work on:  

- Github [@JayKowski](https://github.com/JayKowski)

- LinkedIn [@JayMaina](https://www.linkedin.com/in/jay-maina/)

- Gmail [Email me too!](jaymaina5@gmail.com)