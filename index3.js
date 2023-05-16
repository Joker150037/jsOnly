const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30 Days Of JavaScript Challenge',
    challengeYear: 'May 16,2023,11:29',
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }
let color=['pink','tomato','green','skyblue'];
let color2=["#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF"]
  /* start building project */

//adding html first

//create container;
let container=document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);

//create h1;
//append h1 to container
let h1=document.createElement('h1');
h1.textContent=asabenehChallenges2020.challengeTitle;
container.appendChild(h1);
h1.style.letterSpacing='5px'
h1.style.fontSize='2.5rem'
let span=document.createElement('span');
span.textContent='2020';
span.style.fontSize='3.5rem'
h1.appendChild(span);
let index=0;
let index2=0;
function changeColor()
{
  span.style.color=color[index];
  index++;
  if(index>3)
  {
    index=0;
  }
}
function changeColor2()
{
  h4.style.color=color2[index2];
  index2++;
  if(index2>color2.length)
  {
    index2=0;
  }
}
setInterval(changeColor,1000);
setInterval(changeColor2,1000);
//create and append h3 to container

let h3=document.createElement('h3');
h3.textContent=asabenehChallenges2020.challengeSubtitle;
container.appendChild(h3);
h3.style.fontSize='2.4rem'
h3.style.color='#aaa'
h3.style.margin='0rem';

//create and append h4 to container

let h4=document.createElement('h4');
h4.textContent=asabenehChallenges2020.challengeYear;
container.appendChild(h4);
h4.style.fontSize='1.9rem'
h4.style.color='tomato'


//creatig div for challanges;


asabenehChallenges2020.challenges.forEach(challange=>
  {
    //creating challange div
    let challangeDiv=document.createElement('div');
    challangeDiv.style.width='';
    container.appendChild(challangeDiv);
   
   
    let name=document.createElement('div');
    name.textContent=challange.name;   // challange div ' childrens
    challangeDiv.appendChild(name);
    /* second block */
    let topic=document.createElement('details');
    challangeDiv.appendChild(topic);
    let summary=document.createElement('summary');
    summary.textContent='Togel me for More Content';
    topic.appendChild(summary);
    challange.topics.forEach(top=>
      {
        let p=document.createElement('p');
        p.textContent=top;
        topic.appendChild(p);
      }
      );
      
    let status=document.createElement('div');
      status.textContent=challange.status;
      challangeDiv.appendChild(status);
    //adding textContent to child node
    
    
    //adding to conatiner and challangeDiv
    challangeDiv.style.width='100%'
    challangeDiv.style.display='flex';
    challangeDiv.style.justifyContent='center';
    challangeDiv.style.alignItems='center';
    challangeDiv.style.padding='2.5% 0'
    challangeDiv.style.margin='0.4% 0'
    if(status.textContent=='Done')
    {
      challangeDiv.style.backgroundColor='#04AA6D'
      name.style.textDecoration='underline'

    }else if(status.textContent=='Ongoing')
    {
      challangeDiv.style.backgroundColor='#FFF4A3'
      name.style.textDecoration='underline'
    }else if(status.textContent=='Coming')
    {
      challangeDiv.style.backgroundColor='tomato'
    }
    
    name.style.width='33%'
    name.style.textAlign='left'
    name.style.fontSize='1.3rem'
    name.style.fontWeight='500'
    

    topic.style.width='33%'
    topic.style.textAlign='center'
    topic.style.fontSize='1.3rem'
    topic.style.fontWeight='500'

    status.style.width='33%'
    status.style.textAlign='center'
    status.style.fontSize='1.3rem'
    status.style.fontWeight='500'
  }
  
)
//create name
let namee=document.createElement('h1');
container.appendChild(namee);
namee.textContent=asabenehChallenges2020.author.firstName 
+ asabenehChallenges2020.author.lastName;

//create paragraph
let paragraph=document.createElement('p');
container.appendChild(paragraph);
paragraph.textContent=asabenehChallenges2020.author.bio;


//create 3 div;

let box=document.createElement('div');
container.appendChild(box);



let title=document.createElement('div');
let skills=document.createElement('div');
let qualify=document.createElement('div');
box.appendChild(title);
box.appendChild(skills);
box.appendChild(qualify);

asabenehChallenges2020.author.titles.forEach(arr=>
  {
   
    let p=document.createElement('p');
    p.textContent=arr[0]+arr[1];
    title.appendChild(p);
  }
  )
  asabenehChallenges2020.author.skills.forEach(arr=>
    {
     
      let p=document.createElement('p');
      p.textContent=arr;
      skills.appendChild(p);
    }
    )
    asabenehChallenges2020.author.qualifications.forEach(arr=>
      {
       
        let p=document.createElement('p');
        p.textContent=arr;
        qualify.appendChild(p);
      }
      )

  let key=document.createElement('div');
container.appendChild(key);
  asabenehChallenges2020.keywords.forEach(keys=>
    {
      let span=document.createElement('span');
      span.textContent=keys;
      span.style.backgroundColor=color2[Math.floor(Math.random()*color2.length)]
      key.appendChild(span);
      span.style.fontSize='1.2rem'
      span.style.fontWeight='600'
      span.style.padding='7px';
      span.style.margin='7px'
      span.style.borderRadius='35%'
    }
    )

/* Css form */

document.body.style.display='flex';
document.body.style.flexDirection='column';
document.body.style.justifyContent='center';
document.body.style.alignItems='center';

container.style.paddingBottom='5%';
container.style.width='50%'
container.style.display='flex';
container.style.flexDirection='column';
container.style.justifyContent='center';
container.style.alignItems='center';

paragraph.style.fontSize='1.6rem';
paragraph.style.textAlign='center';

box.style.width='100%';
box.style.display='flex';
box.style.flexDirection='row';

title.style.width='33%';
title.style.textAlign='center';
title.style.fontSize='1.3rem';
skills.style.width='33%'
skills.style.textAlign='center';
skills.style.fontSize='1.3rem';
qualify.style.width='33%'
qualify.style.textAlign='center';
qualify.style.fontSize='1.3rem';

key.style.display='flex'
key.style.flexWrap='wrap';
key.style.justifyContent='center';
key.style.alignItems='center';