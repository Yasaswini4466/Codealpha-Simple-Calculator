document.addEventListener('DOMContentLoaded',function(){
    const screen=document.getElementById('screen');
    let curr_input='';
    let op='';
    let first_num='';
    const buttons=document.querySelectorAll('.button');
    buttons.forEach(button=>{
        button.addEventListener('click',() =>{
        const value=button.id;
        if(value==='ac'){
            curr_input='';
            op='';
            first_num='';
            screen.textContent='0';
        }
        else if(value==='del'){
            curr_input=curr_input.slice(0,-1);
            screen.textContent=curr_input||'0';
        }
        else if(value==='equals'){
            if(first_num!=='' && op!=='' && curr_input!==''){
                const result=calculate(first_num,curr_input,op);
                screen.textContent=result;
                curr_input=result;
                first_num='';
                op='';
            }
        }
        else if(['plus','minus','multiply','divide','modulo'].includes(value)){
            if(curr_input!==''){
                first_num=curr_input;
                op=value;
                curr_input='';
            }
        }    
            else{
                curr_input+=value;
                screen.textContent=curr_input;
            }
        });
    });
    function calculate(first_num,sec_num,op){
    const num1=parseFloat(first_num);
    const num2=parseFloat(sec_num);
    switch(op){
        case 'plus':
            return num1+num2;
        case 'minus':
            return num1-num2;
        case 'multiply':
            return num1*num2;  
        case 'divide':
            return num1/num2;   
        case 'modulo':
            return num1%num2;   
        default:
            return num2;    
        }
    }
});
