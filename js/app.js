/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// select main element, navbar menue's buttons, main's sections, scroll to top button, footer and header elements
const fragment=document.createDocumentFragment();
const main=document.querySelector('main');
const btns=document.getElementsByTagName('button');
const sections=document.getElementsByTagName('section');
const scrollBtn=document.getElementsByClassName('scroll_btn');
const footer=document.querySelector('.page__footer');
const header=document.querySelector('header');
// 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// functions to highlight & unhighlight navbar Buttons when mouse over or out of them //
function highlightedNavBtn(){
    for (let i=0; i<sections.length; i++){
        btns[i].addEventListener('mouseover',()=>{

            // if a section doesn't hav class 'active', the style will apply to a button
            if (!sections[i].classList.contains('active')){
                btns[i].style.cssText=`animation-name: highlighted; animation-duration: 0.4s; animation-fill-mode: forwards`;
            }
        })
    }
}
function unhighlightedNavBtn(){
    for (let i=0; i<sections.length; i++){
        
        // if a section doesn't hav class 'active', the style will apply to a button
        btns[i].addEventListener('mouseout',()=>{
            if (!sections[i].classList.contains('active')){
                btns[i].style.cssText=`animation-name: unhighlighted; animation-duration: 0.4s; animation-fill-mode: forwards`;
            }
        })
    }
}
// 

// functions of scrolling //

// function that hide or show scroll button depends on the position of user's sight
function hideShowScrollBtn(){
    window.addEventListener('scroll',()=>{

        // remove class 'hide_btn' when user scroll below the fold of the page
        if (footer.getBoundingClientRect().bottom<window.innerHeight+100){
            scrollBtn[0].classList.remove('hide_btn');
        }
        // 

        // add class 'hide_btn' that show scroll to top button when user scroll above the fold of the page
        else if (footer.getBoundingClientRect().bottom>window.innerHeight+100){
            scrollBtn[0].classList.add('hide_btn');
        }
        // 
    })
}
// 

//function that detect if user stop scrolling or not, and hide header of show it
function scrollDetector(){
    let scroll;
    window.addEventListener('scroll', ()=>{
        window.clearTimeout(scroll);
        scroll=setTimeout(()=>{

            // add class 'hide_header' that have some CSS properties to hide header to header when user stop scrolling within 1.5 second
            header.classList.add('hide_header');
            //

        }, 1800)
        
        // remove that class of header classes when user scrolling
        header.classList.remove('hide_header');
        // 

    }, false)
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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// function that create scroll to top button
function createScrollToTopBtn(){

    // create div, button and i elements
    const container=document.createElement('div');
    const scrollToTopBtn=document.createElement('button');
    const scrollToTopIcon=document.createElement('i');
    // 

    // add class 'scroll_btn' to button element and add class 'gg-arrow-top' to i element
    scrollToTopBtn.classList.add('scroll_btn');
    scrollToTopIcon.classList.add('gg-arrow-up');
    // 

    // append i element to button element as a child, button element to div element as a child and div element to footer element as a child
    scrollToTopBtn.appendChild(scrollToTopIcon);
    container.appendChild(scrollToTopBtn);
    footer.appendChild(container);
    // 
}

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

// function that create navbar menue buttons
function createNavMenueLi(i){
    
    // create li and button elements
    const liElement=document.createElement('li');
    const btnElement=document.createElement('button');
    // 

    // set a text of each button element
    btnElement.textContent=`Section ${i}`;
    // 
    
    // append button element to li element as a child
    liElement.appendChild(btnElement);
    // 

    // append li element to main document fragment as a child
    fragment.appendChild(liElement);
    // 
}
// 

//  function that build navbar menue
function buildNavMenue (n){

    // call createSection and createNavMenueLi function to create navbar menue
    for (let i=1; i<=n; i++){
        createSection(i);
        createNavMenueLi(i);
    }
    // 
    
    // append document fragment to navbar list as a child
    document.querySelector('#navbar__list').appendChild(fragment);
    // 
}
// 

// Add class 'active' to section when near top of viewport

// function that adds class 'active' to each section
function setActiveClass (){
    window.addEventListener('scroll', function (){
        for (let i=0; i<sections.length; i++){
            const element=sections[i].getBoundingClientRect();
            
            // add class 'active' to each section if section is on users's sight
            if ((element.top<=1 && element.top>-(element.height/2))){
                sections[i].classList.add('active');
                btns[i].style.cssText=`animation-name: highlighted; animation-duration: 0.4s; animation-fill-mode: forwards`;
            }
            // 

            // remove class 'active' from each section if section is out of user's sight
            else if((element.top<=(-element.height/2) && element.top>-element.height) || (element.bottom>=(element.height/4))){
                sections[i].classList.remove('active');
                btns[i].style.cssText=`animation-name: unhighlighted; animation-duration: 0.4s; animation-fill-mode: forwards`;
            }
            // 

        }
    })
}
// 


// Scroll to anchor ID using scrollTO event

//function that scroll to a section if user clicked a button from navbar menue 
function scrollToSection(){
    for (let i=0; i<sections.length; i++){
        btns[i].addEventListener('click',function(){
            sections[i].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start"
            })
        });
    }
}
// 


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavMenue(6);
createScrollToTopBtn();
highlightedNavBtn();
unhighlightedNavBtn();
// Scroll to section on link click
scrollToSection();
scrollToTop();
hideShowScrollBtn();
scrollDetector();
// Set sections as active
setActiveClass();