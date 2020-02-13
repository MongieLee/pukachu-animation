// 把code写进style标签和#codeTag标签里

let text = `
/*
 *画皮卡丘之前，先洗个澡，用消毒液喷在纸巾上清理
 机身，然后躺在床上闭上眼睛，开始画吧！
*/

/*先整个鼻子*/
.nose{
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent 
    transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translate(-50%);
}

/*再整个眼睛*/
.eye{
    width: 49px;
    height: 49px;
    position: absolute;
    background-color: #2e2e2e;
    border-radius: 50%;
}

/*整眼白*/
.eye::before{
    display: block;
    position: absolute;
    border-radius: 50%;
    content: '';
    background: white;
    top: 3px;
    width: 24px;
    height: 24px;
    left:6px;
}

/*整右眼*/
.eye.left{
    right: 50%;
    margin-right: 90px;
}

/*整右眼*/
.eye.right{
    left: 50%;
    margin-left: 90px;
}

/*整腮红*/
.face{
    width: 68px;
    height: 68px;
    border: 2px black solid;
    border-radius: 50%;
    position: absolute;
    background-color: red;
    top: 85px;
}

/*整腮红*/
.face.left{
    left: 50%;
    margin-left: 100px;
}

/*整腮红*/
.face.right{
    right: 50%;
    margin-right: 100px;
}

/*整左边胡子*/
.upperlip.left{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    border-bottom-left-radius:40px 25px;
    border-right:none;
    border-top:none;
    transform: rotate(-20deg);
    position: absolute;
    right: 50%;
    top: 49px;
    background-color: #fee433;

}

/*画右边胡子*/
.upperlip.right{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    border-bottom-right-radius:40px 25px;
    border-left:none;
    border-top:none;
    transform: rotate(20deg);
    position: absolute;
    left: 50%;
    top: 49px;
    background-color: #fee433;
}


/*整舌头*/
.lowerlip{
    width: 300px;
    height:3500px;
    background-color: #990513;
    border-radius: 200px/2000px;
    border: 2px black solid;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/*将口红涂在舌苔上*/
.lowerlip::after{
    content:"" ;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform:translateX(-50%);
    border-radius: 50%;
}
/*完事！*/
`
let time = 100

function writeCode(prefix,code,fn){
    let styleTag = document.querySelector('#styleTag')
    let codeTag = document.querySelector('#code')
    let index = 0
    let id = setTimeout(function fn(){
        index++
        styleTag.innerHTML = code.substring(0, index)
        codeTag.innerHTML = Prism.highlight(code.substring(0,index), Prism.languages.css, 'css')
        codeTag.scrollTop = codeTag.scrollHeight
        if(index >= code.length){
            // fn && fn.call()
            return
        }else{
            setTimeout(fn,time)
        }
    }, time)
}

let btDiv = document.querySelectorAll('.btDiv button')
for(let i=0;i<btDiv.length;i++){
    btDiv[i].onclick = function(){
        this.classList.add('active')
        let speed = this.getAttribute('data-speed')
        console.log(time)
        let tempSiblings = siblings(this)
        for(let i=0;i<tempSiblings.length;i++){
            tempSiblings[i].classList.remove('active')
        }
        switch(speed){
            case 'slow':
                time = 300
                return
            case 'default':
                time = 100
                return
            case 'fast':
                time = 10
                return
        }
    }
}

function siblings(elm){
    var a = [];    //保存所有兄弟节点
    var p = elm.parentNode.children; //获取父级的所有子节点
    for(var i = 0; i < p.length; i++){  //循环
        if(p[i].nodeType == 1 && p[i] != elm){  //如果该节点是元素节点与不是这个节点本身
            a.push(p[i]);      // 添加到兄弟节点里
        }
    } 
   return a;
}
writeCode('',text)