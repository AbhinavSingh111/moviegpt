1. npx create-react-app
2. stetup tailwind css
3. setup routing
4. Login page
    - login form / sign up form
5. Form Validation
6. useRef Hook
7. installed firebase and hosted on it
8. create user acc in firebase / signin-signup
9. setup redux->userslice
10. implemented onsuthstatechanged and configured it to change redux store accordingly
10. implemented signout , updateprofile api , added name to signup
11. redirecting user via protected route , unsubscribed to onAuthStateChange callback
11. Fetch movie from TMDB (registered , acces token , fetched now playing , made custom hook for that)
12. made a slice for movie data - > updated data in that slice
13. fetched trailer data , added in store , primary , secondary , title , video back ground component , embedded youtube player
14. made movie list card , filled with various movie list , data coming from apis  ,page beautification
15. Gpt search feature > added gpt search bar , button 
16. added multi lang feature in gpt page using redux , made seprate slice (gpt toggle , lang state)
17. Integrate GPT APIS
18. Build specific prompt
19. Fetched results form gpt and format it
20. Use tmdb api to search for formatted res
21. Use the tmdb res to show movie posters by reusing movieList component
22. Making use of .env variables for keeping secret keys
23. used memoization , to reduce api calls if data is in store

# Features
    -Login/Signup
        -form
        -redirect to browse
            -Browse (after authen)
                -Header
                -Main movie
                    -trailer in bg
                    -title and desc
                    -movie suggestions
                        -movie list (vertically scrollable)
        -moviegpt
            -search bar
            -movie gpt