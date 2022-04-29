# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Project Description

This project is my professional portfolio website. The intentions for this project will be to establish an online portal to my personal brand being a new SWE out of the GA SEI, showcasing my skills acquired and embellished during the program, displaying projects worked on to demonstrate different competencies, and to provide a unique, enjoyable end-user experience for potential future employers who will review my portfolio. This will be created with a focus on mobile first design, incorporating HTML, CSS, JS, jQuery and other potentially beneficial technologies to execute the vision to the finalized product. This project will satisfy all the necessary deliverables, with extra enhancements beyond the necessary deliverables to occur if time allows in the alloted time frame and/or after that time to continually update the space.

## Wireframes

- [Mobile](https://www.figma.com/file/ysqaDZrZiKeVv7nTUlThsP/Portfolio---Mobile-View?node-id=0%3A1)
- [Desktop](https://www.figma.com/file/nnG0wKyPRBPDutCvTrey3T/Portfolio---Desktop-View?node-id=0%3A1)

Individual aspects of Mobile view can be seen at the images below:

- [Mobile: Base](https://i.imgur.com/hAhfz1k.png)
- [Mobile: About Me](https://i.imgur.com/YaGkeez.png)
- [Mobile: Projects](https://i.imgur.com/KNNEiN7.png)
- [Mobile: Skills](https://i.imgur.com/OMztZ4n.png)
- [Mobile: Contact](https://i.imgur.com/X4F7cqf.png)

Individual aspects of Desktop view can be seen at the images below:

- [Desktop: Base](https://i.imgur.com/gYYOGSE.png)
- [Desktop: About Me](https://i.imgur.com/LULmZLg.png)
- [Desktop: Projects](https://i.imgur.com/lnEg0pN.png)
- [Desktop: Skills](https://i.imgur.com/8QgtXAg.png)
- [Desktop: Contact](https://i.imgur.com/KMpCkRZ.png)

## Time/Priority Matrix

[Link to my Time/Priority Matrix](https://www.figma.com/file/Zdm04bARDxHPVIOBOljeFc/T%2FP-Matrix)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into smaller components.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | M | 2hr | 2hr (removed) |
| Base HTML Done | H | 3hr | 4hr |
| Base CSS Done | H | 3hr |  8hr |
| Regular Nav | H | 1.5hr | 3hr |  
| Adding Form | H | 1hr|  N/A (removed) | 
| Other sections and flex | H | 3hr | 3hr|
| Working with API | H | 3hrs|  1hr | 
| Responsive | H | 3hr | 6hr |
| Social Media Icons | L | 1hr |  1hr |
| Mobile View | H | 3hr |  5hr |
| Desktop View | H | 3hr |  2hr |
| Animations for Both Views | H | 3hr |  1hr |
| Total | H | 29.5hrs| 36hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hover for Relevent Elements | L | 2hr | 1hr |
| API for Welcoming User Based on Location & Time | L | 1.5hr | 1hr |
| More Intensive Animations (color changes/transitions) | L | 3hr | 1hr |
| Total | H | 5.5hrs| 3hrs |

## Additional Libraries

- [W3 Schools](https://www.w3schools.com/)
- [StackOverFlow](https://stackoverflow.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [CSS-Tricks](https://css-tricks.com/)

The above 4 libraries/resources were pivotal in reviewing syntax for HTML and CSS throughout the entire project.

- [OpenWeatherMap](https://openweathermap.org/api)

The weather API used to display my current weather. In the JS, an anchor is passed within the paragraph element for the user to check their own weather on a national weather website.

- [IconFinder](https://www.iconfinder.com/)
- [Placeholder](https://placeholder.com/)

The above 2 libraries were used for sourcing icons and placeholder imaging when appropriate on the webpage.

- [Skillthrive](https://youtu.be/PwWHL3RyQgk)

A YouTube channel called Skillthrive was referenced when watching a tutorial for a Navbar with CSS. I was able to reference some transitions for hovering on an element on the webpage. I grasped a better understanding of flexbox from this visual tutorial.


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
$.ajax({
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/weather?lat=40.7128&lon=-74.0060&appid=ecbafc8bc682243cadc5b7330751bcef&units=imperial"
})

    .then(function(response){
        console.log(response)
        $('.aboutMe').append(`<p class="temperature"><a href="https://www.weather.gov/" target="blank">My current weather is ${response.main.temp}°. Click here to find out yours!</a></p>`)
    })
```

This is the mixture of JS, JQuery & Ajax for integrating the weather API into my webpage. I wanted an interactive API that could be user-specific (like showing what the user's weather is when visiting my webpage). I unfortunately couldn't achieve the desired result after much trial and error. However, I thought of another way to make this API integration interactive. I embedded an anchor tag within the appended paragraph element with the sentence containing the weather from the object of the API. I put a link to a general weather website, included a target so when the user clicks on it, it opens it up on a new webpage instead of the current tab they are on (my website).

I'm proud that I was able to still make the best of the API integration I could for the JS requirement for the project while achieiving the minimum outcome I had in mind, which was making it also interactive for the user. I'm also proud of this code for being able to pass in multiple elements in one append as I feel that a big portion of this project made me understand a lot of the syntax we've learned in HTML/CSS/JS when applying it to an actual project.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### Weather API not displaying the correct temperature for the latitude/longitude passed through

It was not an error code, but it was showing the weather was no where near what it actually was for my location initially. I reviewed the syntax for the API and ensured I was using the correct unit of measure for degrees fahrenheit. Thankfully, follow classmate Shanti also ran into the same issue and posted on my issue ticket that I needed a negative value for the longitude. This immediately resolved my issue.

#### Large issues with responsive design

I primarily think in a desktop way of design. Being native to Windows I always have my web browsers entirely maximized and that has been my experience most of my life with technology. I rarely visit an actual webpage on my smart phone as I only use actual phone apps instead. As a result, I struggled big time on thinking in a "mobile first" design. My media screens were not working despite rereading over a lot of documentation. Thankfully, Mike was able to help me realize where I was going wrong and now the responsive design works as intended.

#### Initial expectations for what I wanted out of the webpage versus reality

I had a good image of what I wanted this webpage to turn out to be after the wireframing and thinking on things for a bit. Each day I was quickly realizing that I was straying further from being able to output a MVP in the time frame given. As a result, I abandoned the hamburger drop down in the Navbar, the image carousel for the projects section, keeping the Navbar in one place when scrolling down on the webpage and two "anchors" for being able to jump back to the top of the webpage and a contact button floating in the bottom corner. This quickly allowed me to refocus on the deliverables for the requirements of the project. I have several ideas and features noted in my head that I will instead slowly incorporate on my own time, and moreover I am proud to have been able to meet what satisfies a MVP for the project.
