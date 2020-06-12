(() => {
  let yOffSet;
  let prevScrollHeight = 0;
  let currentScene;

  const sceneInfo = [
    {
      index: 0,
      heightNum: 5,
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        container: document.getElementById('scroll-section-0')
      }
    },
    {
      index: 1,
      heightNum: 5,
      scrollHeight: 0,
      type: 'normal',
      objs: {
        container: document.getElementById('scroll-section-1')
      }
    },
    {
      index: 2,
      heightNum: 5,
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        container: document.getElementById('scroll-section-2')
      }
    },
    {
      index: 3,
      heightNum: 5,
      scrollHeight: 0,
      type: 'sticky',
      objs: {
        container: document.getElementById('scroll-section-3')
      }
    }
  ];

  function setLayout() {
    for(let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }
  
  function scrollLoop() {
    for(let i = 0; i < sceneInfo.length; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
  }

  function getCurrentScene() {
    if((yOffSet < prevScrollHeight / 4)) {
      currentScene = 0;
    } else if((yOffSet < prevScrollHeight / 4 * 2) ) {
      currentScene = 1;
    } else if((yOffSet < prevScrollHeight / 4 * 3)) {
      currentScene = 2;
    } else if((yOffSet < prevScrollHeight / 4 * 4)) {
      currentScene = 3;
    }

    console.log(currentScene);
  }

  setLayout();
  scrollLoop();
  window.addEventListener('resize', setLayout);

  window.addEventListener('scroll', () => {
    yOffSet = window.pageYOffset;
    getCurrentScene();
    console.log('prevScrollHeight : ', prevScrollHeight);
    console.log('yOffSet : ', yOffSet);
  })
})();