Work Day Scheduler

Description

This is a simple day planner that a user can save appointments or notes or whatever they choose to time blocks between 9am and 5pm for the current day.

When the page loads, time blocks that are in the past will show up as dark grey, the time block that matches the current time is yellow, and time blocks in the future are green. Also, if any items were saved in the blocks (and the data is available from Local Storage), those items will populate into the appropriate time blocks and will repopulate when the page is reloaded.

If the entry in a time blocks is changed, and the corresponding button is clicked, that entry will be saved and will be repopulated if the page is reloaded.

I used Bootstrap, primarily to handle re-sizing based on browser sizes, as well as to handle some simple formatting items like the rows and columns and the buttons. The color-changing entries used Boostrap styles too. I used two different Google fonts. And I used the lock icon from Fontawesome on my save buttons. I only changed a couple colors on my own in my CSS.

I used Moment.js to display the current date at the top of the page, and I also used it to change the colors of the entries based on the current time.

I used jquery to call IDs, classes, elements by attribute as well as 'this'. 

It fulfills all the requirements for the assignment and is my first successful endeavor with: LocalStorage, jquery, and fontawesome. I wanted to personalize and make this colorful, and I've very excited with how it turned out.

I absolutely could not get the function to handle the click to save dynamically, so I hard coded every option because it worked. This was my last resort. I REALLY TRIED, but I could not figure out how to link the button click to the textarea. If you have suggestions, I'd love to hear them.