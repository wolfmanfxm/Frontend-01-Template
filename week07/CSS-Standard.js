//  收集 w3.org 的 css 标准 ，捕捉元素 得到 标准的名称和链接

var url = 'https://www.w3.org/TR/?tag=css'

var lis = document.getElementById("container").children;    //  所有标准

var result = [];

for(let li of lis){
    if(li.getAttribute('data-tag').match(/css/))            //  属性匹配 css
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href
        })
}

console.log(JSON.stringify(result, null, "    "));

//	选中一个li ，使用 $0.dataset 可以看到它的 data-tag 、data-title 等属性及值