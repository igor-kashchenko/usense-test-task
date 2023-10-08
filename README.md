# Angular Password Strength Meter

[DEMO](https://usense-test-task-le6g1ge7q-igor-kashchenko.vercel.app/)

A simple password strength meter built using Angular that provides real-time feedback on the strength of a password as it is being entered. The meter evaluates password strength based on certain criteria and changes the color of sections to indicate the strength level.

## Features

- Real-time password strength evaluation.
- Password strength is categorized into three levels: Easy, Medium, and Strong.
- Color-coded sections to visually represent password strength.
- Provides feedback even when the password field is empty.

## Password Strength Criteria

The password strength is evaluated based on the following criteria:

- **Easy**: Password contains only letters, digits, or symbols.
- **Medium**: Password is a combination of letters and symbols, letters and digits, or digits and symbols.
- **Strong**: Password contains a combination of letters, symbols, and numbers.

## Color Indicators

- **Empty Field**: All sections are gray.
- **Less than 8 Characters**: All sections are red.
- **Easy Password**: The first section is red, the rest are gray.
- **Medium Password**: The first two sections are yellow, the last one is gray.
- **Strong Password**: All sections are green.
