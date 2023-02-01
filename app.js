// navbar popup
const icon = document.getElementById('icon');
const menu = document.getElementById('menuAll');

icon.onclick = function openMenu() {
  icon.classList.toggle('is-active');
  menu.classList.toggle('is-active');
};

document.onclick = function closeMenu(clickEvent) {
  if (clickEvent.target.id !== 'menuAll' && clickEvent.target.id !== 'icon') {
    icon.classList.remove('is-active');
    menu.classList.remove('is-active');
  }
};


//projects popup

//objects
let portfolios = [
  {
      title: 'Tonic',
      listItems: ['CANOPY', 'Back End Dev', '2015'],
      image: './images/work1.png',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      seelive: 'See live',
      seesource: 'See Source'
  },

  {
      title: 'Multi-Post Stories',
      listItems: ['CANOPY', 'Back End Dev', '2015'],
      image: './images/work2.png',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      seelive: 'See live',
      seesource: 'See Source'
  },

  {
      title: 'Tonic',
      listItems: ['CANOPY', 'Back End Dev', '2015'],
      image: './images/work3.png',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      seelive: 'See live',
      seesource: 'See Source'
  },

  {
      title: 'Multi-Post Stories',
      listItems: ['CANOPY', 'Back End Dev', '2015'],
      image: './images/work4.png',
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      seelive: 'See live',
      seesource: 'See Source'
  },
]

//content styling
let topicText = {
  color: '#172b4d',
  
  fontSize: '32px'
}

  //Stylings for the toxic text and cancel button wrapper
let toxicWrapStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

  //Style of cancel button
let cancelButtonStyle = {
  border: 'none',
  backgroundColor: 'rgba(0,0,0,0)',
  color: '#172b4d',
  fontSize: '2.25rem',
  position: 'relative',
  top: '-20px'
}

  //The html,css and js wrapper styling
  let buildStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  
    //The html, css and js styling
  let htmlcssjs = {
    border: '0.5px solid grey',
    width: 'fit-content',
    margin: '-10px 10px 20px 0',
    color: 'black',
    padding: '0 12px'
  };

  let port1Style = {
    width: '100%',
    borderRadius: '10px',
    marginTop: '10px'
  }
  

let thirdWrapperStyle = {
  display: 'flex',
  marginTop: '10px'
}

  //Stylings for the third element 
let thirdStyle = {
  color: '#344563',
  fontWeight: '600',
  fontSize: '16px',
  marginRight: '10px'
}

  //The content styling 
let contentStyle = {
  color: '#000',
  fontSize: '12px',
  display:  'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

//The button wrapper style
let buttonWrapperStyle = {
  display: 'flex',
  marginTop: '30px',
  marginBottom: '60px',
  justifyContent: 'space-around'
};

//The two buttons style
let twoButtonsStyle = {
  justifyContent: 'start',
  border: '2px solid grey',
  padding: '8px 16px',
  color: 'grey',
  userSelect: 'none',
  fontWeight: '500'

}

let items = [
  document.querySelector('#first-item'),
  document.querySelector('#second-item'),
  document.querySelector('#third-item'),
  document.querySelector('#fourth-item')
]

let buttons = [
  document.querySelector('#submitOne'),
  document.querySelector('#submitTwo'),
  document.querySelector('#submitThree'),
  document.querySelector('#submitFour'),

]

let containerStyles = {
  backgroundColor: 'rgba(255,255,255,1)',
  width: '80vw',
  height: '100vh',
  position: 'fixed',
  top: '10px',
  left: '50%',
  transform: 'translateX(-50%) translateY(5%)',
  borderRadius: '16px',
  alignItems: 'center',
  display: 'none',
  padding: '1px 20px',
  overflowY: 'scroll',
  zIndex: '4',
}

for (let i = 0; i < portfolios.length; i++) {

  //The container element for the popup
  let popupModal = document.createElement('div');
  Object.assign(popupModal.style, containerStyles);
  items[i].appendChild(popupModal);

  let topicWrapper = document.createElement('div');
  Object.assign(topicWrapper.style, toxicWrapStyle)
  popupModal.appendChild(topicWrapper);

  let topic = document.createElement('h2');
  let cancel = document.createElement('button');
  cancel.innerHTML = '&times';
  topic.innerHTML = portfolios[i].title;
  Object.assign(topic.style, topicText)
  Object.assign(cancel.style, cancelButtonStyle)
  topicWrapper.appendChild(topic);
  topicWrapper.appendChild(cancel);

    //The html, css and js wrapper
    let buildWrapper = document.createElement('div');
    Object.assign(buildWrapper.style, buildStyle);
    popupModal.appendChild(buildWrapper);
  
    //The html, css and js elements
    let html = document.createElement('div');
    let css = document.createElement('div');
    let js = document.createElement('div');
    html.innerHTML = 'html'
    css.innerHTML = 'css'
    js.innerHTML = 'javascript'
    Object.assign(html.style, htmlcssjs);
    Object.assign(css.style, htmlcssjs);
    Object.assign(js.style, htmlcssjs);
    buildWrapper.appendChild(html);
    buildWrapper.appendChild(css);
    buildWrapper.appendChild(js);

      //The image element
    let imageOne = document.createElement('img');
    imageOne.src = portfolios[i].image;
    Object.assign(imageOne.style, port1Style)
    popupModal.appendChild(imageOne)
  
    //div for 3 elements
    let thirdWrapper = document.createElement('div');
    Object.assign(thirdWrapper.style, thirdWrapperStyle)
    popupModal.appendChild(thirdWrapper);

    //3 elements list
    let thirdElements = portfolios[i].listItems
    for (let i = 0; i < thirdElements.length; i++) {

      let lists = document.createElement('div');
      lists.innerHTML = thirdElements[i] + ' &#x2022;';
      Object.assign(lists.style, thirdStyle)
      thirdWrapper.appendChild(lists)
  }

  //The content element
  let content = document.createElement('p')
  content.innerHTML = portfolios[i].content
  Object.assign(content.style, contentStyle)
  popupModal.appendChild(content);


  //The buttons wrapper
  let buttonWrapper = document.createElement('div');
  Object.assign(buttonWrapper.style, buttonWrapperStyle)
  popupModal.appendChild(buttonWrapper)

  //The two end buttons
  let seelive = document.createElement('a');
  let seesource = document.createElement('a');
  seelive.innerHTML = 'See live';
  seesource.innerHTML = 'See Source';
  Object.assign(seelive.style, twoButtonsStyle)
  Object.assign(seesource.style, twoButtonsStyle)
  buttonWrapper.appendChild(seelive)
  buttonWrapper.appendChild(seesource)

  //clic to open popup
  buttons[i].addEventListener('click', () => {
      let overlay = document.getElementById('overlay');
      overlay.style.display === 'block' ? overlay.style.display = 'none' : overlay.style.display = 'block';
      popupModal.style.display = 'block';
  })
}

  //not working, see where it should be added
  cancel[i].addEventListener('click', () => {
    popupModal.style.display === 'block' ? popupModal.style.display = 'none' : popupModal.style.display = 'block';
    popupModal.style.display === 'none';
  
  })

