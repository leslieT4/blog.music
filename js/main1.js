/*下拉栏*/
var clickBtn=document.getElementsByClassName("nav_headerin")[0];
var dropdown_menu=document.getElementsByClassName("dropdown_menu")[0];
var isOpen=false;
clickBtn.addEventListener("click",function(){
    isOpen=!isOpen;
    if (isOpen){
        dropdown_menu.style.display="block";
    }
    else{
        dropdown_menu.style.display="none";
    }
})
var flowerDatas = [
    {
        type: '方皓玟',
        content: [{
                url: 'images/01.jpg',
                detailed: '假使世界原來不像你預期'
            },
            {
                url: 'images/02.png',
                detailed: '你是你本身的傳奇'
            },
            {
                url: 'images/03.png',
                detailed: '愿'
            },
        ]
    },
    {
        type: '周國賢',
        content: [{
            url: 'images/04.jpg',
            detailed: 'Children Song'
        },
        {
            url:"images/05.jpg",
            detailed: '覺醒字幕組'
        },
        {
            url:"images/06.jpg",
            detailed: '今生不回家'
        },
        {
            url:"images/m3.jpg",
            detailed: '在天之靈'
        },
        {
            url:"images/m1.jpg",
            detailed: '逃生門（門外版）'
        },
    
    
    ]
    },
    {
        type: '恭碩良',
        content: [{
                url: 'images/07.jpg',
                detailed: '愛後記'
            },
            {
                url: 'images/08.jpg',
                detailed: 'We All Fall Down',
            },
        ]
    },
    {
        type: 'Tonick',
        content: [{
                url: 'images/09.jpg',
                detailed: '長相廝守'
            },
            {
                url: 'images/m2.jpg',
                detailed: '好想拯救地球'
            },
        ]
    },
    {
        type: '鄭欣宜',
        content: [{
                url: 'images/10.jpg',
                detailed: '救命歌'
            },
            {
                url: 'images/11.jpg',
                detailed: '懶人包'
            },
            {
                url: 'images/12.jpg',
                detailed: '給最開心的人'
            },
        ]
    },
    {
        type: 'HOCC',
        content: [{
                url: 'images/13.jpg',
                detailed: '化蝶'
            },
            {
                url: 'images/15.jpg',
                detailed: '極夜後'
            },
            {
                url: 'images/14.jpg',
                detailed: '親愛的黑色'
            },
        ]
    },
    {
        type: '藍奕邦',
        content: [{
                url: 'images/16.png',
                detailed: '離開拉斯維加斯',
            },
            {
                url: 'images/17.jpg',
                detailed: '六月'
            },
        ]
    }
]
var fullFlowerDatas=[];
var currentType=document.getElementById("currentType");
currentType.innerHTML="全部";
var type=document.getElementById('type');
var typeShow=document.getElementById('typeShow');
relFlowerDatas(); // 将获取到的花卉数据修整为方便于我们后续操作的样子
showType(); // 遍历展示所有的类别标题
changeType(0) // 默认展示第一个类别（全部）
function relFlowerDatas() {
    fullFlowerDatas[0] = {};
    fullFlowerDatas[0].type = '全部';
    fullFlowerDatas[0].content = [];
    for (var i = 0; i < flowerDatas.length; i++) {
        for (var j = 0; j < flowerDatas[i].content.length; j++) {
            fullFlowerDatas[0].content.push(flowerDatas[i].content[j]);
        }
        fullFlowerDatas.push(flowerDatas[i]);
    }
}
//下面展示标题（全部）
function showType(){
    for (var i=0;i<fullFlowerDatas.length;i++){
        var span=document.createElement('span');
        span.className="typeTitle";
        var text=document.createTextNode(fullFlowerDatas[i].type);
        span.appendChild(text);
        type.appendChild(span);
        if (i==0){
           span.style.backgroundColor='rgb(109, 109, 99)';
        }
        (function (i){
            span.onclick=function(){
                currentType.innerHTML=fullFlowerDatas[i].type;
                changeBaColor('typeTitle');
                this.style.backgroundColor = "rgb(109, 109, 99)";
                changeType(i);
            }
        })(i);

    }
}
function changeBaColor(className){
    var changeList = document.getElementsByClassName(className);
    for (var i=0;i<changeList.length;i++){
        changeList[i].style.backgroundColor = className == "typeTitle" ?
            "white" : '#3b3f3e';
    }
};

//切换类型
function changeType(typeIndex){
    if (typeShow.getElementsByTagName('div')[0]){
        typeShow.removeChild(typeShow.getElementsByTagName('div')[0]);
    }
    var flow=new Flower(fullFlowerDatas[typeIndex].type,fullFlowerDatas[typeIndex].content);
    flow.initFlower(1);
    flow.createFlowerPageIcon();
}
