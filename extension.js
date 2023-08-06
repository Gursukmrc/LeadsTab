let myLeads=[]
let oldLeads=[]
const inputEl=document.querySelector("#input-El")
const inputBtn=document.querySelector("#input-btn")
const ulEl=document.querySelector("#ul-El")
const inputDel=document.querySelector("#btn-dlt")
const tabBtn=document.querySelector("#tab-btn")
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
    if(leadsFromLocalStorage){
        myLeads=leadsFromLocalStorage
        console.log(leadsFromLocalStorage)
        render(myLeads)
    }
        //TABS VALUE
    tabBtn.addEventListener("click",function(){
        // chrome.tabs.query({active:true,currentWindow:true},{
        // })
        chrome.tabs.query({active: true ,currentWindow: true},function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads",JSON.stringify(myLeads))
            render(myLeads)
        })
    })
        //RENDER
        function render(leads){
        let listItems=""
        for(let i = 0;i<leads.length;i++){
            listItems+= `<li>
                             <a href='${leads[i]}' target='_blank'> 
                                ${leads[i]}
                            </a> 
                        </li>`
                        
        }
        ulEl.innerHTML=listItems
        }
        //DELETE
        inputDel.addEventListener("dblclick",function(){
            localStorage.clear()
            myLeads=[]
            render(myLeads)

        })
        //TEXT-VALUE
        inputBtn.addEventListener("click",function(){
            if(inputEl.value.length){
            myLeads.push(inputEl.value)
            inputEl.value=""
            localStorage.setItem("myLeads",JSON.stringify(myLeads))
            render(myLeads)

            }
        })
            // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
            // console.log(myLeads[i])
            // // let li= document.createElement("li")
            // // li.textContent=myLeads[i]
            // // ulEl.append(li)


