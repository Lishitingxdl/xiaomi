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
	function content1(parent){
		const types=document.querySelectorAll(".dapei_right span");
		const dapei_bots=document.querySelectorAll(".dapei_bot");
			types.forEach(function (ele,index){
				ele.onmouseenter=function(){
					for(let i=0;i<types.length;i++){
						types[i].classList.remove("active");
						dapei_bots[i].classList.remove("active");
					}
					this.classList.add("active");
					dapei_bots[index].classList.add("active");
				}
			})
	}
	const content1s=document.querySelectorAll(".dapei");
	content1s.forEach(function(ele){
		content1(ele);
	})
}

//banner导航
{
	let lis=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	lis.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//top开始
{
	let logbox=document.querySelector(".logbox");
	let nav_wenzi=document.querySelector(".nav_wenzi");
	let navtexts=document.querySelectorAll(".navtext");
	let navbox=document.querySelector(".navbox");
	let lists=document.querySelector(".logbox ul"); 

	nav_wenzi.onmouseenter=function(){
		logbox.style.height="229px";
		logbox.style.display="block";
	}
	navbox.onmouseleave=function(){
		logbox.style.height="0px";
		logbox.style.display="none";
	}
	// let obj=lists[0];
	// navtexts.forEach(function(ele,index){
	// 	ele.onmouseenter=function(){
	// 		obj.style.display="none";
	// 		lists[index].style.display="block";
	// 		obj=lists[index];
	// 	}
	// })
	}
		
    
//内容下部
{
	function wheel(parent){

	let prev=parent.querySelector(".neirong_prev");
	let next=parent.querySelector(".neirong_next");
	let neirong_inner=parent.querySelector(".neirong_inner");
	let neirong_item1s=parent.querySelectorAll(".neirong_item1");
	var pagerers=parent.querySelectorAll(".pagerer");
	let n=0;
	let obj=pagerers[0];
	// console.log(neirong_prev);
	next.onclick=function(){
		n++;
		if(n===neirong_item1s.length){
			n=neirong_item1s.length-1;
			return;
		}
		neirong_inner.style.marginLeft=n*-296+"px";
		pagerers[n].classList.add("pagerer_active");
		pagerers[n-1].classList.remove("pagerer_active");
		obj=pagerers[n];
	};
	prev.onclick=function(){
		n--;
		if(n<0){
			n=0;
			return;
		}
		neirong_inner.style.marginLeft=n*-296+"px";
		pagerers[n].classList.add("pagerer_active");
		pagerers[n+1].classList.remove("pagerer_active");
	};
	// let obj=pagerers[0];
	pagerers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<neirong_item1s.length;i++){
				pagerers[i].classList.remove("pagerer_active");
			}
			this.classList.add("pagerer_active");
			// obj.classList.remove("pagerer_active");
			// obj=this;
			neirong_inner.style.marginLeft=index*-296+"px";
			n=index;
		}
	})
	}
	const wheelList=document.querySelectorAll(".neirong_bot1");
	wheelList.forEach(function(ele){
		wheel(ele);
	})
}