# Project Restart
## Overview: 
Project Restart is an IT/Business internal application built with React Hooks and a Firebase realtime database.
The purpose is for employees to have a secure application to login to, organize issues, prioritize them and then collaborate
on the best possible method of completing them. The application uses user login authentication through email and social medias,
personalizes the user's information on the Home page, performs a CRUD (create, read, update, delete) operation on incoming issues,
and allows for the user to collaborate with others through email directly from the application.

### PJ Almeida: https://github.com/palmeida7
**Primary team role:** creator and developer of app and concept. 

## What we used:
### Technologies:
- HTML5
- CSS
- JavaScript
- React.js Hooks
- Firebase

### Other:
- CRUD operations
- Realtime Database
- Email.js
- Bootstrap styling

## MVP (Minimum Viable Product):
- The idea was to create a secure app that allowed the user to track issues

## Stretch Goals Future
- Enable more peer collaboration through up-to-date notifications
- Alert system for overdue issues
- Realtime chats for direct support

## Challenges & Solutions:
### ***Challenge:*** Learning to use Firebase to set-up a secure login and real-time database
### ***Solution:*** Trial and error and reading documentation
___

## Challenges & Solutions:
### ***Challenge:*** Completing project remote with no peer collaboration
### ***Solution:*** Consistent trial and error
___

## Challenges & Solutions:
### ***Challenge:*** Ensuring CRUD operations worked correctly
### ***Solution:*** Placing functions in correct areas to perform 
___

## Code Snippets:
### Main code to add a new entry into our database
``` javascript
    function onSubmit(e) {
        e.preventDefault()

        firebase
            .firestore()
            .collection('issues')
            .add({
                title,
                summary,
                priority
            })
            .then(()=>{
                setTitle('')
                setSummary('')
                setPriority('')
            })
    }
```
