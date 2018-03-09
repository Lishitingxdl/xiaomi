//banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	// console.dir(img[0])
	pagers.forEach(function (ele,index) {
		ele.onclick=function () {
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);


	// setInterval(function(){    //开启播放、清除播放功能
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){       //判断边界
			n=0;
		}
		if(n<0){                  //判断n<0
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
		}
	banner.onmouseenter=function(){           //鼠标进入暂停
		clearInterval(t);                     //清除自动
	}
	banner.onmouseleave=function(){			  //鼠标进入开始
		t=setInterval(move,3000);
	}
	let flag=true;
	next.onclick=function(){
		if(flag) {
			flag=false;
			move();
		}
	};
	prev.onclick=function(){
		n-=2;
		if(flag) {
			flag=false;
			move();
		}
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	})
}
//单品效果
{
	const prev=document.querySelector(".buy_prev");
	const next=document.querySelector(".buy_next");
	const inner=document.querySelector(".buy_inner");
	let n=0;    //代表往左边移动几屏
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");      //最后
		if(n===2){
			next.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";        //右按钮
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");     //最后
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";        //左按钮
	}
}
//内容
{
	function content1(){
		const types=document.querySelectorAll(".dapei_right");
		const danpin_bots=document.querySelectorAll(".danpin_bot");
			types.forEach(function (ele,index){
				ele.onmouseenter=function(){
					for (let i=0;i<types.length;i++){
						types[i].classList.remove("active");
						danpin_bot[i].classList.remove("active");
					}
					this.classList.add("active");
					danpin_bot[index].classList.add("active");
				}
			})
	}
	// const content1list=document.querySelectorAll(".content1");
	// content1list.forEach(function(ele){
	// 	content1(ele);
	// })
}