$(()=>{

    let ulTask=$('#ulTask')
    let btnAdd=$('#btnAdd')
    let btnClear=$('#btnClear')
    let inpTask=$('#inpTask')
    let Residue=$('#btnResidue')
    let sort=$('#btnSort')

    function add(){

        let newTask=$('<li>' ,{
            'class':'list-group-item',
            text: inpTask.val()
        })


                ulTask.append(
                    newTask
                )

            newTask.click(()=>{
                newTask.toggleClass('done')
            })
    }

    inpTask.keypress((e)=>{
        if(e.which==13 && inpTask.val()){
            add()
        }
    })

    function clearup(){                                                                     
        $('#ulTask .done').remove()
    }
    function sorting(){
        $('#ulTask .done').appendTo('#ulTask')
    }
    function togglebtn(inpTask){
        if(inpTask != ' '){
        btnClear.prop('disabled',false)
        btnAdd.prop('disabled',false)
        }
        else
        {
            btnClear.prop('disabled',true)
            btnAdd.prop('disabled',true)
        }
        if(ulTask.children().length>0){
            Residue.prop('disabled',false)
            sort.prop('disabled',false)
        }

    }
    inpTask.on('input',()=>{
        togglebtn(inpTask.val())

        
    })

    btnAdd.click(()=>{
        if(inpTask.val()){
            add()
            togglebtn()
        }
        
    })
    btnClear.click(()=> {
        inpTask.val(" ")
        togglebtn(' ')
    
    })
    Residue.click(clearup)
    sort.click(sorting)
})