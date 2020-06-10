(() => {

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
  
  setLayout();
  console.log(sceneInfo);

  window.addEventListener('resize', setLayout);
})();