
# Landing Page Project

A landing page has 6 sections with a navbar related to each section


## Usage/Examples

```javascript
// function that creates page sections
function createSection(i){

    // create section, div, h2and p elements
    const sectElement=document.createElement('section');
    const divElement=document.createElement('div');
    const h2Element=document.createElement('h2');
    const p1Element=document.createElement('p');
    const p2Element=document.createElement('p');
    // 

    // set an id and a data-nav attributes to each section
    sectElement.setAttribute('id',`section${i}`);
    sectElement.setAttribute('data-nav',`Section ${i}`);
    // 

    // set class landing__container to each div element
    divElement.classList.add('landing__container');
    // 

    // set a text of each h2 element
    h2Element.textContent=`Section ${i}`;
    // 

    // set a text of each p element
    p1Element.textContent=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`;
    p2Element.textContent=`Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
    // 

    // append section element to main element as a child
    main.appendChild(sectElement);
    // 
    // append div element to section element as a child
    sectElement.appendChild(divElement);
    // 
    // append h2, p elements to div element as childs
    divElement.appendChild(h2Element);
    divElement.appendChild(p1Element);
    divElement.appendChild(p2Element);
    // 
}
//

// function that make scroll to top button scrolls to the top of the page when user clicks on it
function scrollToTop(){
    scrollBtn[0].addEventListener('click',()=>{
        document.body.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    })
}
//
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

