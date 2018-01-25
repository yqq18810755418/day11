class Dialog{
	constructor(title='标题党',content='今天你过的开心吗？',span='x'){
		this.title=title;
		this.content=content;
		this.span=span;
		this.init();
	}
	init(){
		this.createWrap();
	}
	addEvent(){
		let span=document.querySelectorAll('.span')[0];
		let big = document.querySelector('.big');
		let button=document.querySelector('button');
		button.addEventListener('click',(event)=>{
			alert('heihei')
		})
		

			span.addEventListener("click",(event)=>{
				this.hide();
			});
	}
	hide(){
		let big = document.querySelectorAll('.big')[0];
			big.style.display='none';

	}
	createButton(txt){
		let btn = document.createElement('button');
		let btn1 = document.createElement('button');
		btn.innerHTML=txt;
		btn1.innerHTML=txt;
		return btn;
	}
	createContent(){
		let ull = document.createElement('ul');
		let pp =document.createElement('p');
		let buttons = this.createButton('开心');
		let buttons1 = this.createButton('不开心');
		ull.className='ull';
		ull.innerHTML=this.content;
		ull.append(pp);
		pp.className='pp';
		buttons.className='button';
		buttons1.className='button';
		pp.append(buttons);
		pp.append(buttons1)
		return ull;

	}
	createTitle(){
		let ol = document.createElement('ol');
		let span =document.createElement('span');

			ol.className='oll';
		    ol.innerHTML= this.title;
		    span.className='span';
		    span.innerHTML='x';
		    ol.append(span)
		    return ol;

	}
	createWrap(){
		let max = document.createElement('div');
		let oDiv = document.createElement('div');
		let oTit = this.createTitle();
		let oCon = this.createContent();
		 	oDiv.className='big';
		document.body.append(max);
		max.className='max'
		max.append(oDiv)
		
		oDiv.append(oTit)
		oDiv.append(oCon)
		this.addEvent();
	}
}

let dialog = new Dialog();