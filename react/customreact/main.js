function customRender(reactElement,contaner) {
    
    //v0.0.1
    // const reactDom = document.createElement(reactElement.type);
    // reactDom.innerHTML = reactElement.children;
    // reactDom.setAttribute('href',reactElement.props.href);        
    // reactDom.setAttribute('target',reactElement.props.target);        
    // contaner.appendChild(reactDom);
    
    // v0.0.2
    // const reactDom = document.createElement(reactElement.type);
    // reactDom.innerHTML = reactElement.children;
    // for (const prop in reactElement.props) {
    //     const propValue = reactElement.props[prop]
    //     reactDom.setAttribute(prop,propValue);        
    // }
    // contaner.appendChild(reactDom);
    
    // v0.0.2
    reactElement.forEach(reactElementTree => {
        console.log("hello world")
        const reactDom = document.createElement(reactElementTree.type);
        if(reactElementTree.children){

            reactDom.innerHTML = `${reactElementTree.children} <br/>`;
        }
        // for property of an element or tag so to set that automaticlly and flexible 
        for (const prop in reactElementTree.props) {
            if(prop === 'children') continue;
            const propValue = reactElementTree.props[prop];
            reactDom.setAttribute(prop,propValue);
        }
        if(reactElementTree.childrenElement){
            console.log(reactElementTree.childrenElement);
            let value = childrenElement(reactElement.childrenElement) 
            reactDom.appendChild(value);
        }
        contaner.appendChild(reactDom);
    });
}
function childrenElement(element) {
    
    const reactDomC = document.createElement(element.type);
    if(element.children){
        reactDomC.innerHTML = `${element.children} <br/>`;
    }
    
    // for property of an element or tag so to set that automaticlly and flexible 
    for (const prop in element.props) {
        if(prop === 'children') continue;
        const propValue = element.props[prop];
        reactDomC.setAttribute(prop,propValue);
    }
    return reactDomC
    
}
const reactElement = [
    {
        type : 'h1',
        props:{
            id : 'Heading',
            style:"color:blue;font-size:20px",
            children:"fuck you"
            
        },
        children: "Hello World"
    },
    {
        type : 'a',
        props:{
            href : '#',
            target:"_blank",
        },
        children: "click one"
    }
    ,{
        type : 'div',
        props:{
            // href : '#',
            style:"margin:10px;width:200px;height:400px;background-color:green;color:red"
        },
        children: "click Parent",
        childrenElement:{
            type : 'div',
            props:{
                style:"font-size:20px;width:200px;height:200px;background-color:gray;color:red"
            },
            // childrenElement:{
            //     type : 'h1',
            //     props:{
            //         // style:"font-size:20px;width:200px;height:200px;background-color:gray;color:red"
            //     },
            //     children:"hello inside a children element "
            // },
            children:"hello inside a children element "
            
        }
    }
    
    
    
]

const rootContaner = document.getElementById('root');
customRender(reactElement,rootContaner);