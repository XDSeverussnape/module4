//     Создать класс options

//       Он должен содержать свойства: height, width, bg, fontSize, textAlign

//       Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст и при помощи cssText изменять свой стиль из переданных параметров

//       Создать новый объект через класс

//       Вызвать его метод и получить элемент на странице


class Option {
  constructor(height = '100px', width = '100px', bg = 'yellow', fontSize = 14, textAlign = 'center'){
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
  }

  
  add(){
let  div = document.createElement("div");
     div.classList.add('option');
     document.body.appendChild(div);       
     let param = `height:${this.height}px; 
					        width:${this.width}px; 
					        background-color:${this.bg}; 
					        font-size:${this.fontSize}px; 
                  text-align:${this.textAlign}`;
         div.style.cssText = param;
  }
}

let newDiv = new Option(400, 100, 'red', 24);
newDiv.add();
