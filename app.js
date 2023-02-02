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

// projects popup

// objects
const portfolios = [
  {
    title: 'Tonic',
    listItems: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/work1.png',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seelive: 'See live',
    seesource: 'See Source',
  },

  {
    title: 'Multi-Post Stories',
    listItems: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/work2.png',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seelive: 'See live',
    seesource: 'See Source',
  },

  {
    title: 'Tonic',
    listItems: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/work3.png',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seelive: 'See live',
    seesource: 'See Source',
  },

  {
    title: 'Multi-Post Stories',
    listItems: ['CANOPY', 'Back End Dev', '2015'],
    image: './images/work4.png',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    seelive: 'See live',
    seesource: 'See Source',
  },
];

const containerStyles = {
  backgroundColor: 'rgba(255,255,255,1)',
  borderRadius: '16px',
  display: 'none',
  'flex-direction': 'column',
  alignItems: 'flex-start',
  height: '75vh',
  left: '50%',
  overflowY: 'scroll',
  padding: '1px 20px',
  position: 'fixed',
  top: '40px',
  transform: 'translateX(-50%) translateY(5%)',
  width: '80vw',
  zIndex: '100',
};

// content styling
const topicText = {
  color: '#172b4d',
  fontSize: '32px',
};

// Stylings for the tonic text and cancel button wrapper
const toxicWrapStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// Style of cancel button
const cancelButtonStyle = {
  border: 'none',
  backgroundColor: 'rgba(0,0,0,0)',
  color: '#172b4d',
  fontSize: '2.25rem',
  position: 'relative',
  top: '-20px',
};

// The html,css and js wrapper styling
const buildStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

// The html, css and js styling
const htmlcssjs = {
  backgroundColor: '#ebebff',
  border: '2px solid #ebebff',
  borderRadius: '8px',
  color: '#6070ff',
  fontWeight: '500',
  marginRight: '10px',
  padding: '0 12px',
  width: 'fit-content',
};

const port1Style = {
  borderRadius: '10px',
  marginTop: '10px',
  width: '100%',
  'min-width': '0',
};

const thirdWrapperStyle = {
  display: 'flex',
  marginTop: '10px',
};

// Stylings for the third element
const thirdStyle = {
  color: '#344563',
  fontSize: '16px',
  fontWeight: '600',
  marginRight: '10px',
};

// The content styling
const contentStyle = {
  color: '#000',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '70vw',
  'min-width': '0',
};

// The button wrapper style
const buttonWrapperStyle = {
  backgroundColor: 'rgba(255,255,255,1)',
  display: 'flex',
  marginTop: '30px',
  marginBottom: '60px',
  justifyContent: 'space-around',
};

// The two buttons style
const twoButtonsStyle = {
  border: '1px solid #6070ff',
  borderRadius: '8px',
  color: '#6070ff',
  fontWeight: '500',
  padding: '8px 12px',
  userSelect: 'none',
};

const overlayStyle = {
  backgroundColor: 'grey',
};

const items = [
  document.querySelector('#first-item'),
  document.querySelector('#second-item'),
  document.querySelector('#third-item'),
  document.querySelector('#fourth-item'),
];

const buttons = [
  document.querySelector('#submitOne'),
  document.querySelector('#submitTwo'),
  document.querySelector('#submitThree'),
  document.querySelector('#submitFour'),

];

for (let i = 0; i < portfolios.length; i += 1) {
  // The container element for the popup
  const popupModal = document.createElement('div');
  Object.assign(popupModal.style, containerStyles);
  items[i].appendChild(popupModal);

  const topicWrapper = document.createElement('div');
  Object.assign(topicWrapper.style, toxicWrapStyle);
  popupModal.appendChild(topicWrapper);

  const topic = document.createElement('h2');
  const cancel = document.createElement('button');
  cancel.innerHTML = '&times';
  topic.innerHTML = portfolios[i].title;
  Object.assign(topic.style, topicText);
  Object.assign(cancel.style, cancelButtonStyle);
  topicWrapper.appendChild(topic);
  topicWrapper.appendChild(cancel);

  // div for 3 elements
  const thirdWrapper = document.createElement('div');
  Object.assign(thirdWrapper.style, thirdWrapperStyle);
  popupModal.appendChild(thirdWrapper);

  // 3 elements list
  const thirdElements = portfolios[i].listItems;
  for (let i = 0; i < thirdElements.length; i += 1) {
    const lists = document.createElement('div');
    lists.innerHTML = `${thirdElements[i]} &#x2022;`;
    Object.assign(lists.style, thirdStyle);
    thirdWrapper.appendChild(lists);
  }

  // The image element
  const imageOne = document.createElement('img');
  imageOne.src = portfolios[i].image;
  Object.assign(imageOne.style, port1Style);
  popupModal.appendChild(imageOne);

  // The content element
  const content = document.createElement('p');
  content.innerHTML = portfolios[i].content;
  Object.assign(content.style, contentStyle);
  popupModal.appendChild(content);

  // The html, css and js wrapper
  const buildWrapper = document.createElement('div');
  Object.assign(buildWrapper.style, buildStyle);
  popupModal.appendChild(buildWrapper);

  // The html, css and js elements
  const html = document.createElement('div');
  const css = document.createElement('div');
  const js = document.createElement('div');
  html.innerHTML = 'html';
  css.innerHTML = 'css';
  js.innerHTML = 'javascript';
  Object.assign(html.style, htmlcssjs);
  Object.assign(css.style, htmlcssjs);
  Object.assign(js.style, htmlcssjs);
  buildWrapper.appendChild(html);
  buildWrapper.appendChild(css);
  buildWrapper.appendChild(js);

  // The buttons wrapper
  const buttonWrapper = document.createElement('div');
  Object.assign(buttonWrapper.style, buttonWrapperStyle);
  popupModal.appendChild(buttonWrapper);

  // The two end buttons
  const seelive = document.createElement('a');
  const seesource = document.createElement('a');
  const seeLiveImg = document.createElement('img');
  seeLiveImg.src = './images/seelive.png';
  const seeSourceImg = document.createElement('img');
  seeSourceImg.src = './images/seesource.png';

  seelive.innerHTML = 'See live';
  seesource.innerHTML = 'See Source';
  Object.assign(seelive.style, twoButtonsStyle);
  Object.assign(seesource.style, twoButtonsStyle);
  buttonWrapper.appendChild(seelive);
  buttonWrapper.appendChild(seesource);
  seelive.appendChild(seeLiveImg);
  seesource.appendChild(seeSourceImg);

  // clic to open popup
  buttons[i].addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    Object.assign(overlay.style, overlayStyle);

    if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
    } else {
      overlay.style.display = 'block';
    }
    popupModal.style.display = 'block';
    overlay.style.display = 'block';
  });

  // The event listeners for the cancel button
  cancel.addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    popupModal.style.display = 'none';
  });
}
