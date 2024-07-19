var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn) 
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;
            if (btntext == 'x') {
                btntext = '*';
            }
            if (btntext == '÷') {
                btntext = '/';
            }
            if (btntext == '(' && screen.value !== '' && !isNaN(screen.value[screen.value.length - 1])) {
                btntext = '*' + btntext;
            }
            
            
            screen.value += btntext;
        });
    }

    function sin() 
    {
        screen.value=Math.sin(screen.value);
    }
    
    function cos() 
    {
        screen.value=Math.cos(screen.value);
    }

    function tan() 
    {
        screen.value=Math.tan(screen.value);
    }

    function pow() 
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt() 
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log() 
    {
        screen.value=Math.log(screen.value);
    }

    function pi() 
    {
        screen.value= 3.14159265359;
    }

    function e() 
    {
        screen.value= 2.71828182846;
    }

    function fact() 
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++) 
        {
            f=f*i;

        }
        
        i=i-1;

        screen.value=f;

    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);

    } 

   
   function calculate() {
        try {
            let expression = screen.value;
            // Reemplazar % con su valor decimal
            expression = expression.replace(/(\d+)%/g, "(($1)/100)");
            screen.value = eval(expression);
        } catch (e) {
            screen.value = "Error";
        }
    }
    /*function calculate(){
        var splitScreen = screen.value.split('%',2);
        if(splitScreen.length > 1){
            screen.value=eval(splitScreen[0] + '/100*' + splitScreen[1]);
        }   else    
        {
        screen.value=eval(screen.value); } }*/