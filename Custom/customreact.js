

function customrender(reactElement,maincontainer){

  const domElement=document.createElement(reactElement.type)
  domElement.innerHTML=reactElement.Children

  for(prop in reactElement.props){
    if(prop=='Children') continue;

    domElement.setAttribute(prop,reactElement.props[prop])

  }
  maincontainer.appendChild(domElement);
}


const reactElement={
  type:'a',
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  Children:'click on this link'
}

const maincontainer=document.getElementById('root');

customrender(reactElement,maincontainer)
