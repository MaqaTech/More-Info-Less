var container = document.getElementById("container")

var maqaBtn = document.querySelector(".btn1")
var feridBtn = document.querySelector(".btn2")
var faiqBtn = document.querySelector(".btn3")

var texts = document.querySelector(".texts")

var title = document.querySelector(".title")




// var user = [
    
//     {
//         name : "Maga",
//         id: 1
//     },
    
//     {
//         name:"Ferid",
//         id: 2

//     },
    
//     {
//         name:"Faig",
//         id: 3
//     }
// ]





// user.forEach(element => {
//     let title_name =document.createElement("h2");
//     title.appendChild(title_name)
//     title_name.classList.add('title_name')
//     title_name.textContent=element.name
    
// });




var content = [
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti!',
    },
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti!',
        
    },
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti!',
        
    },
    
]



content.forEach(element => {
    
    var paragraph = document.createElement("div")
    paragraph.classList.add('icon-and-type');
    
    var icons = document.createElement('span')
    icons.classList.add('icons');
    icons.textContent = element.icon;
    paragraph.appendChild(icons)
    
    
    
    
    var types = document.createElement('p')
    types.classList.add('types');
    types.textContent = element.type;
    paragraph.appendChild(types)
    
    title.appendChild(paragraph)
    
    
    
});


var content2 = [
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi expedita qui illum quod alias cum aperiam, adipisci natus iusto, quibusdam quaerat unde sunt necessitatibus reprehenderit in error quia architecto perspiciatis totam? Ea debitis, necessitatibus cumque repellendus modi et libero vero accusamus cum consectetur tempore provident facilis voluptatum temporibus pariatur. ',
    },
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi expedita qui illum quod alias cum aperiam, adipisci natus iusto, quibusdam quaerat unde sunt necessitatibus reprehenderit in error quia architecto perspiciatis totam? Ea debitis, necessitatibus cumque repellendus modi et libero vero accusamus cum consectetur tempore provident facilis voluptatum temporibus pariatur. ',
        
    },
    
    {
        icon :'>>',
        
        type:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi expedita qui illum quod alias cum aperiam, adipisci natus iusto, quibusdam quaerat unde sunt necessitatibus reprehenderit in error quia architecto perspiciatis totam? Ea debitis, necessitatibus cumque repellendus modi et libero vero accusamus cum consectetur tempore provident facilis voluptatum temporibus pariatur. ',
        
    },
    
]




content2.forEach(element => {
    
    
    
    
    
    var paragraph2 = document.createElement("div")
    paragraph2.classList.add('moreless');
    
    var icons = document.createElement('span')
    icons.classList.add('icons');
    icons.textContent = element.icon;
    paragraph2.appendChild(icons)
    
    
    
    
    
    var types = document.createElement('p')
    types.classList.add('types');
    types.textContent = element.type;
    paragraph2.appendChild(types)
    
    title.appendChild(paragraph2)
    
    
    var product_div = document.createElement("div")
    product_div.appendChild(paragraph2)
    title.appendChild(product_div);
});


var morelessbtn = document.querySelector('.morelessbtn')
var moreless = document.querySelectorAll('.moreless') // [1, 2, 3, 4, 5].style


morelessbtn.addEventListener('click', function(){
    if (morelessbtn.textContent == 'MORE INFO'){
        moreless.forEach((item) => {
            item.style.display='flex'
        })
        morelessbtn.textContent='MORE LESS'
    }
    else if(morelessbtn.textContent == 'MORE LESS'){
        
        moreless.forEach((item) => {  // arraydaki obyektleri bir bir funsiyani teyin etmek ucun
            item.style.display='none'
            morelessbtn.textContent='MORE INFO'
        })
        
    }
})


var btntitle1 = document.querySelector('.title_name1')
var btntitle2 = document.querySelector('.title_name2')
var btntitle3 = document.querySelector('.title_name3')

feridBtn.addEventListener('click', function(){
    btntitle1.style.display = 'none';
    btntitle3.style.display = 'none';
    btntitle2.style.display = 'block';

    // Apply scale transformation
    feridBtn.style.color = '#2badba';
    maqaBtn.style.color= 'black';
    faiqBtn.style.color = 'black';

    feridBtn.style.borderLeft = '2px solid #2badba'
    maqaBtn.style.borderLeft = '2px solid #fff'
    faiqBtn.style.borderLeft = '2px solid #fff';
});

maqaBtn.addEventListener('click', function(){
    btntitle2.style.display = 'none';
    btntitle3.style.display = 'none';
    btntitle1.style.display = 'block';

    // Apply scale transformation
    feridBtn.style.color = 'black';
    maqaBtn.style.color= '#2badba';
    faiqBtn.style.color = 'black';

    feridBtn.style.borderLeft = '2px solid #fff'
    maqaBtn.style.borderLeft = '2px solid #2badba'
    faiqBtn.style.borderLeft = '2px solid #fff';
});

faiqBtn.addEventListener('click', function(){
    btntitle1.style.display = 'none';
    btntitle2.style.display = 'none';
    btntitle3.style.display = 'block';

    // Apply scale transformation
    feridBtn.style.color = 'black';
    maqaBtn.style.color= 'black';
    faiqBtn.style.color = '#2badba';

    feridBtn.style.borderLeft = '2px solid #fff'
    maqaBtn.style.borderLeft = '2px solid #fff'
    faiqBtn.style.borderLeft = '2px solid #2badba';
});

//  var header = document.querySelector(".buttons");
//  var btns1 = header.querySelector("btn1");
//  for (var i = 0; i < btns1.length; i++) {
//    btns1[i].addEventListener("click", function() {
//    var current = document.getElementsByClassName("active");
//    current[0].className = current[0].className.replace(" active", "");
//    this.className += " active";
//    });
//  }






// const array_btn = [

//     {

//         text: 'MAGA' ,

//     },
//     {
//         text: 'FERID' ,

//     },

//     {
//         text: 'FAIG' ,

//     },
// ]
// let btn1 = document.createElement('button')
// let btn2 = document.createElement('button')
// let btn3 = document.createElement('button')

// btn1.classList.add('btn')
// btn2.classList.add('btn')
// btn3.classList.add('btn')
// buttons.appendChild(btn1)
// buttons.appendChild(btn2)
// buttons.appendChild(btn3)
// array_btn.forEach(element => {
    
// btn1.textContent = element.text
// btn2.textContent = element.text
// btn3.textContent = element.text


// });

window.addEventListener("load" , function(){  // bu kod winwos u refresh eledikde klik elediyimiz btn daimi yanili galsin
    maqaBtn.click();   
})
