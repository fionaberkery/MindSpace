<h1>MindSpace</h1>

Life is tough, and MindSpace is here to help you with quick fixes to bring you back to a good place when the stresses and frustrations of the day become overwhelming. A digital first aid kit for your brain that you can turn to whenever you need it.

## Table of Contents

- [Features](#features)
  - [Listen](#listen)
  - [Breathe](#breathe)
  - [Journal](#journal)
  - [Colour](#colour)
  - [Play](#play)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributors](#contributors)

## Features

### Listen
Drown out the noise of the world around you by tuning into the in-built media player with soothing sounds such as rain and birdsongs. These sounds will play while you explore the rest of the app.

### Breathe
Help bring calmness upon yourself by using the breathing bubble to aid in circular breathing, with options to toggle the theme between Earth or Water.

### Journal
Take the weight off your mind by writing in your journal. Journal entries are stored in each user's account.

### Colour
Let your creative side bring you to a happy place using with the colouring section. Choose one of three images and fill them in with colours from our pre-chosen palette, or use the custom colour swatch to pick your own colours. Once you're done, you can save your design as a PNG to your device by clicking the download button.

### Play
Currently MindSpace offers two simple activities to focus your attention. You can spend some time solving a jigsaw puzzle, or you can spend time popping some virtual bubbles.

## Tech Stack
**Client:** React, Javascript, HTML5, CSS3, React-Router,
**Server:** Spring, Java, 
**Database:** PostgreSQL

## Installation

Note: This setup tutorial assumes that you already have installed a package manager like npm and the version control system git, and that you have IntelliJ IDEA installed on your system. Open your terminal and go to the directory where you would like to save the app in and enter in the following command:
```bash
  git clone git@github.com:fionaberkery/MindSpace.git
```
Once the download has ended, move into the directory named 'client' by running the following command:
```bash
  cd client
```
Now to install all the modules for the client, run this command:
```bash 
  npm i
```

## Deployment

To begin, you'll need to start up the backend server. To begin, open your terminal and type the following command:
```bash
  createdb mindspace
```
Next, open the 'server' folder in IntelliJ IDEA. Give it some time to install the dependencies and setup the application when opening this project for the first time, as this can sometimes take a minute or two. Then, open src/main/java/com.server.server, right click on the file named ServerApplciation and click 'Run ServerApplication...main()'. You'll know it's running properly when the last line says "Started ServerApplication in ... seconds".

Once the server is running, it's time to start up the front end. To do this, open your terminal in the main project directory, and move into the 'client' directory:
```bash
  cd client
```
From 'client' run the following terminal command:
```bash
  npm start
```
Verify it is running correctly by browsing http://localhost:3000

## Contributors

- @ElinVS (https://github.com/elinvs)
- @fionaberkery (https://github.com/fionaberkery)
- @sapphireflygon (https://github.com/sapphireflygon)
- @mwdfn (https://github.com/mwdfn)
- @Andrew-C-Smith (https://github.com/andrew-c-smith)

