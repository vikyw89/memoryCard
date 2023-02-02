# memoryCard

live preview : 

### behind the scene story :

1. we populate random images using free API
2. images are placed in a grid with 1 aspect ratio, eg: 1x1, 2x2, 3x3, 4x4, and so on with more # of cards as the game progresses
3. score tally and best score on top right of the screen, saved into local storage
4. everytime user click, the card will shuffle, and get redisplayed and user cannot click the same card
5. when all card has been clicked, new sets of images will be generated based on the grid sizing, eg: 4 x 4 grid, will generate images to fill 5 x 5 grid

<section id="assignment">
  <h3><a href="#assignment" class="anchor-link">Assignment</a></h3>

  <div class="lesson-content__panel">
    <ol>
      <li>Create a new project using <code>create-react-app</code>.</li>
      <li>Take a little bit of time to think about how you want to implement your application, the features you want to implement, which components you need, and how to structure your application. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the best score you achieved thus far. You also need a couple of cards that display images and possibly informational text. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.</li>
      <li>Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components. We suggest you use functional components and therefore hooks in this project.</li>
      <li>Style your application so you can show it off!</li>
      <li>As always, push the project to GitHub.</li>
    </ol>
  </div>
</section>
