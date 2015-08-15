#Required dependencies
InfoBot.js
- colors

#What is here?
Currently, there's only 1 NodeJS script I wrote (Sloppily)

It can get the 'kid' and print out:
- Total refferals
- Total 'credits' (Not sure what these are yet)
- Current ranking
- Current total registered
- Unixtime stamp when the 'kid' was registered (which is converted to a human-readable date)
- 'Parent' (if any)
- Refferer (if any)
- The IP address the 'kid' was registered at (uhm 1+?)

#Quick FAQ
What is a 'kid'?
- The identifier at the end of an invite URL (For Ex: https://oneplus.net/invites?kolid=PG2FQO | The 'kid' is PG2FQO | This isn't mine if you're wondering, see line 3)

What can I do with this?
- As stated above, it prints out some data from their Unofficial API (which I found in the JS code of 

What's the 'Unofficial API' ?
- Here, https://invites.oneplus.net/index.php?r=share/view&kid= (You can also find how I use it in line 6.
- Now just add a 'kid' to the end of the url and voila! You got some json data.
