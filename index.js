let CurrPlayer="X";
let arr=Array(9).fill(null);
const messageElement = document.getElementById("message"); 

function CheckWinner(){
    if((arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=null) || (arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=null) || (arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=null) || (arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=null) || (arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=null) ||(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=null) || (arr[0]==arr[4] && arr[4]==arr[7] && arr[0]!=null) || (arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=null)){
        messageElement.innerText=`${CurrPlayer} is the Winner!🤩`;
        return;
    }
    if(!arr.some((e)=>e===null)){
        messageElement.innerText="It's a Draw!🫠";
        return;
    }
}
function ONClick(bx){
    const id=Number(bx.id);
    if (arr[id]!==null) return;
    arr[id]=CurrPlayer;
    bx.innerText=CurrPlayer;
    CheckWinner();
    if(CurrPlayer==='X'){
        CurrPlayer='O';
    }else{
        CurrPlayer='X';
    }
}