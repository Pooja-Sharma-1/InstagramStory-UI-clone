var arr=[
    {dp:"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1362&q=80",name:"clifford" ,img:"https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=362&q=80"},
    {dp:"https://images.unsplash.com/photo-1575859431774-2e57ed632664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",name:"fifi",img:"https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1521673461164-de300ebcfb17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",name:"Rambo",img:"https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {dp:"https://plus.unsplash.com/premium_photo-1668208368562-b5df724b3c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",name:"huskiii",img:"https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"},
    {dp:"https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"titi",img:"https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1477936432016-8172ed08637e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",name:"callei",img:"https://i.guim.co.uk/img/media/03ab2926688aac741ea316e4df3d6615e8610e92/301_154_3617_2170/master/3617.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=06c107472c995579df4da58c706adff0"}

]
var clutter=""
arr.forEach(function(elem,idx) {
    clutter+=`<div class="story">
    <img  id ="${idx}"src="${elem.dp}" alt="">
    <h3>${elem.name}</h3>
</div>`
})
document.querySelector("#upper").innerHTML=clutter
var posts=[
    {user:"https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",uname:"Meoww",pimg:"https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://images.unsplash.com/photo-1568043210943-0e8aac4b9734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",uname:"Meoww1",pimg:"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",like:"black"},
    {user:"https://images.unsplash.com/photo-1627157766791-4eeb96934b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0dGVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",uname:"Meoww2",pimg:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://plus.unsplash.com/premium_photo-1675848493910-5474ee04c3e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0dGVuc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",uname:"Meoww3",pimg:"https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://images.unsplash.com/photo-1570018144466-5a3251ecd588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdHRlbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",uname:"Meoww4",pimg:"https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://media.istockphoto.com/id/1370365587/photo/big-eyed-naughty-obese-cat-looking-at-the-target.jpg?b=1&s=170667a&w=0&k=20&c=468okwKwMosVm_DxsNTfe5ms9h5_8w0ETSk51Ys6I5k=",uname:"Meoww5",pimg:"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",uname:"Meow6",pimg:"https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",like:"black"},
    {user:"https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",uname:"Meow7",pimg:"https://media.istockphoto.com/id/1456979356/photo/bengal-cat-and-soft-toy-sleep-together-pets-animal-care.jpg?b=1&s=170667a&w=0&k=20&c=FyCzrzRfqPxZDMcvtXb0TOLrSPnPJfp5bCBSFpk8Tp8=",like:"black"}
]

function show(){
    var sutter=""
    posts.forEach(function(elem,idx){
        sutter+=`<div class="id">
        <div id="top">
            <div id="lef">
                <div id="IMG">
                    <img src="${elem.user}" alt="">
                </div>
            <h4>${elem.uname}</h4>
            </div>                    
            <i class="ri-more-2-fill"></i>
        </div>
        <div id="post">
            <img src="${elem.pimg}" alt="">
        </div>
        <div id="bot">
            <div id="fame">
                <i id = "${idx}" style="color: ${elem.like};" class="ri-heart-3-fill"></i>
                <i class="ri-chat-3-line"></i>
                <i class="ri-send-plane-fill"></i>
            </div>
            <i class="ri-bookmark-line"></i>
        </div>
    </div>
    `
    })
    document.querySelector("#middle").innerHTML= sutter
}

show()


var hrt=document.querySelector(".ri-heart-3-fill")
var change=0;
// hrt.forEach(function(elem) {
//       elem.addEventListener("click",function(){
//         if(change==0){
//             elem.style.color="red";
//             change=1
//         }
//         else{
//             elem.style.color="black"
//             change=0;
//         }
//     })
// })

document.querySelector("#upper").addEventListener("click",function(dets){
   
    
    document.querySelector("#full-scr").style.display="block"
    document.querySelector("#full-scr").style.backgroundImage=`url(${arr[dets.target.id].img})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.display="none"
    },3000)
    var grow=0
    if(grow<100){
        setInterval(function(){
            if(grow<100){
                document.querySelector("#move").style.width=`${grow}%`;
                grow++
                console.log(grow) 
            }
        },30)
    }
    else{
        grow=0
    }   
})

document.querySelector("#main").addEventListener("click",(dets)=>{
    var idx =dets.target.id

    
    console.log(idx);
    console.log(posts[like].like);
    posts[idx].like = "red"
    show()

    // document.querySelector(`#${like}`)
    
})

// var like = document.querySelector(`#fame #${elem.like}`)
// like.addEventListener("click",() =>{
//     flag = 1
//     like.style.color = "red"
// })
