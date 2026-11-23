document.addEventListener('DOMContentLoaded', () => {
   const scenes = document.querySelectorAll('.scene');
   const choiceButtons = document.querySelectorAll('.choice-btn');
   const reggaeAudio = document.getElementById('reggae-audio');

   function switchScene(targetId) {
       scenes.forEach(scene => {
           scene.classList.remove('active');
       });

       const targetScene = document.getElementById(targetId);
       if (targetScene) {
           targetScene.classList.add('active');
       }
   }

   choiceButtons.forEach(button => {
       button.addEventListener('click', () => {
           const nextSceneId = button.getAttribute('data-next');
           
           
           if (reggaeAudio) {
               reggaeAudio.currentTime = 0; 
               reggaeAudio.play().catch(error => {
                   console.log("Audio playback prevented by browser policy:", error);
               });
           }

           if (nextSceneId) {
               switchScene(nextSceneId);
           }
       });
   });
});
