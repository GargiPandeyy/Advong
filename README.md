# Advong

Music adventure game where you fill in missing lyrics to save the Songiverse.

## How to Play

1. Choose a difficulty mode (5, 7, or 9 songs)
2. Fill in missing words from songs
3. Use hints and skips strategically
4. Complete modes to unlock harder ones

## Features

- 3 difficulty modes with progressive difficulty
- Hint system (2 hints per game)
- Skip option (1 per mode)
- Scoring system
- Keyboard shortcuts
- Progress saving

## Scoring

- Correct answer: +100 points
- Bonus for no hints: +50 points
- Using hint: -25 points
- Using skip: -100 points


I made this using html, css and javascript. Javascript is cwazy!! 

Building this game was way harder than I thought! The biggest struggle was managing complex game state - tracking current songs, blank positions, scores, and hints while keeping everything synchronized. Learning localStorage for saving progress was tricky, especially handling JSON parsing and edge cases. 
The dynamic DOM manipulation was intense - creating buttons dynamically, implementing hint systems that reveal letters or remove wrong answers, and smoothly transitioning between multiple screens. 

I spent hours debugging state management issues and learning to filter songs by difficulty while preventing duplicates across game modes. Implementing the Fisher-Yates shuffle algorithm and coordinating event listeners for keyboard shortcuts taught me how complex web apps actually work - it's way more than just HTML and CSS!

Cwazyyy!!

[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)
