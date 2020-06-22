//how to check winning
//when i will lose it will not let me take any step so i need to give logic for this scenario to give winning.
//i eed to chenge the turns in many functions of auto
//i need to give proper turn to the checking check function

var turn = 1;   //keep track of turn
var array = [];  //stores the possible position of particular element
var array2 = [];  //used to store array before checking_check function as array is changed during that function.
var name_3;
var flag = 0;  //keeps track of check if flag = 0 means no check and if it is 1 then check.
var king_1_moved = 0;
var king_2_moved = 0;
var elephant_1_1 = 0;
var elephant_1_2 = 0;
var elephant_2_1 = 0;
var elephant_2_2 = 0;
var count = 0;
var stop_game = 0;
var store_slave = [];
var temp_store_slave = [];
var chances = 0;



//for automate
var array_for_attack_decision = [];   //this will be used in decide_attack function maybe
var array_for_defence_decision = [];  //this will be used in decide_defence function maybe
var temparory_array_defence = [];  //this will store ids of the places which can be defenced
var temparory_array_attack = [];    //this will store ids of the places which can be attack
var array_attack_StringList = [];   //this will store element_name of the places which can be attacked
var array_defence_StringList = [];  //this will store element names of the places which can be defenced
var done = 0;    //this will be used in decide defence and decide attack so that we got to know that we got a match in if or not
var second_temparory_array = [];
Initialize();   //initializes the chess board


/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */
/*                                                                    Basic Functions                                   */



//It disable all buttons when needed
function disable_all(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).disabled = true;
            document.getElementById(`${i}${j}`).style.opacity = 0.5;
            document.getElementById(`${i}${j}`).style.borderColor = "rgb(129, 122, 122)";
        }
    }

}

//it enables all buttons when needed.
function enable_all(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).disabled = false;
            document.getElementById(`${i}${j}`).style.opacity = 1;
            document.getElementById(`${i}${j}`).style.borderColor = "black";
        }
    }

}

//it gives move_it method to the every possible positions of choosen element.
function give_method(){

    for(item = 0; item<array.length; item++){
                
        document.getElementById(`${array[item]}`).disabled = false;
        document.getElementById(`${array[item]}`).style.opacity = 0.9;
        document.getElementById(`${array[item]}`).style.borderColor = "black";
        document.getElementById(`${array[item]}`).setAttribute("onclick","moveit(this)");
    
    }

}

//it gives default method chhosen to the every element.
function default_method(){

    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            document.getElementById(`${i}${j}`).setAttribute("onclick","choosen(this)");
        }
    }

}


//it changes the turn when required.
function change_turn(){

    if(turn == 1){
        turn = 2;
    }
    else{
        turn = 1;
    }

}

//initializes the chess board
function Initialize(){


document.getElementById("00").textContent="1eleph1";
document.getElementById("07").textContent="1eleph2";
document.getElementById("01").textContent="1horse1";
document.getElementById("06").textContent="1horse2";
document.getElementById("02").textContent="1camel1";
document.getElementById("05").textContent="1camel2";
document.getElementById("03").textContent="1queenn";
document.getElementById("04").textContent="1_king_";

document.getElementById("10").textContent="1slave1";
document.getElementById("11").textContent="1slave2";
document.getElementById("12").textContent="1slave3";
document.getElementById("13").textContent="1slave4";
document.getElementById("14").textContent="1slave5";
document.getElementById("15").textContent="1slave6";
document.getElementById("16").textContent="1slave7";
document.getElementById("17").textContent="1slave8";

document.getElementById("70").textContent="2eleph1";
document.getElementById("77").textContent="2eleph2";
document.getElementById("71").textContent="2horse1";
document.getElementById("76").textContent="2horse2";
document.getElementById("72").textContent="2camel1";
document.getElementById("75").textContent="2camel2";
document.getElementById("73").textContent="2queenn";
document.getElementById("74").textContent="2_king_";


document.getElementById("60").textContent="2slave1";
document.getElementById("61").textContent="2slave2";
document.getElementById("62").textContent="2slave3";
document.getElementById("63").textContent="2slave4";
document.getElementById("64").textContent="2slave5";
document.getElementById("65").textContent="2slave6";
document.getElementById("66").textContent="2slave7";
document.getElementById("67").textContent="2slave8";

for(i=2;i<=5;i++){
    for(j=0;j<8;j++){
        document.getElementById(`${i}${j}`).textContent="_______";
    }
}


give();   //gives images to buttons.

}


//checks that the element at the possible position is belongs to active or opposite player.
function got_enemy(i,j,k){

    var name = document.getElementById(`${i}${j}`).textContent;
    if( k == 1){
        if(name[0] == '2'){
            if(name == '2_king_'){
                return 2;  //means there is a check.
            }
            else{
                return 1;   //means he is oppositors
            }
        }
        else{
            return 0;  //means it it active player's element not enemy.
        }
    }
    else{
        if(name[0] == '1'){
            if(name == '1_king_'){
                return 2;    //means there is a check.
            }
            else{
                return 1;    //means he is oppositors
            }
        }
        else{
            return 0;   //means it it active player's element not enemy.
        }
    }

}


/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */
/*                                                  Main Portion                                                        */



//when we pchoose the element to move, this function is called.
function choosen(selected){
    turn = 1;

    array = [];   //to store the possible movement positions.
    name_3 = selected;  //stores the reference of element that is choosed to do further tasks.
    name = selected.textContent;   //
    
    //it checks whether the choosen element is belongs to the active player or not.
    if(turn == 1 && name[0] == '2'){
        
        window.alert("You cant move this element.This is not belongs to you.");
    
    }
    
    
    else
    {

        if( name.includes("horse") )
        {
            
            i = parseInt(selected.id[0]);  //to get the id in terms of row number
            j = parseInt(selected.id[1]);   //to get the id in terms of column bcz after we are i and j to select the exact id from 64.
            
            horse(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();           
            
                give_method();
            }
        }

        
        
        else if( name.includes("camel") )
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            camel_1(i,j,turn);
            camel_2(i,j,turn);
            camel_3(i,j,turn);
            camel_4(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        }
        
        
        
        
        else if(name.includes("eleph"))
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            elephant_1(i,j,turn);
            elephant_2(i,j,turn);
            elephant_3(i,j,turn);
            elephant_4(i,j,turn);
            castle(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        }





        else if(name.includes("slave"))
        {
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            slave_main(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        
        }
        
        
        
        else if(name.includes("queenn")){
            
            i = parseInt(selected.id[0]);
            j = parseInt(selected.id[1]);
            
            elephant_1(i,j,turn);
            elephant_2(i,j,turn);
            elephant_3(i,j,turn);
            elephant_4(i,j,turn);
            camel_1(i,j,turn);
            camel_2(i,j,turn);
            camel_3(i,j,turn);
            camel_4(i,j,turn);
            if(array.length == 0){
                window.alert("this cant move anywhere.");
            }
            else{

                disable_all();
                give_method();
                
            }
        
        }
        
        
        
        ///if someone choose blank to move then this will give alert.
        else if(name.includes("_______")){
            
            window.alert("You can not choose this.Please choose again.");
            
        }


        else if(name.includes("king"))
        {
            //checks that where the check is given or not.
            if(flag == 1)
            {
                
                i = parseInt(selected.id[0]);
                j = parseInt(selected.id[1]);
                
                king(i,j,turn); //this will update array.
                if(array.length == 0){
                    window.alert("this cant move anywhere.");
                }
                else{

                    disable_all();
                    give_method();
                    
                }
                
            }
            
            else
            {
                window.alert("King is not in check so it cant move.");
            }

        }




        
    }

}







//this function moves the element and check whether the active player is giving check to opposite or not.
function moveit(button_where_move)
{
    
    turn = 1;
    temp_store_slave = [];
    
    for(item=0;item<store_slave.length;item++){
        
        temp_store_slave.push(store_slave[item]);
    }
    
    if(name_3.textContent == '1eleph1'){
        elephant_1_1 = 1;
    }
    else if(name_3.textContent == '1eleph2')
    {
        elephant_1_2 = 1;
    }
    
    
    
    if(turn == 1 && button_where_move.textContent == '1_king_' )
    {      
        var temperarory = button_where_move.textContent;
        button_where_move.textContent = name_3.textContent;
        name_3.textContent = temperarory;

    }
    else{
    //checks that the position where this element wll move is opposite's king or not. 
    if(button_where_move.textContent.includes('king')){

        document.getElementById("won").style.zIndex = 1;
        window.alert(`player ${turn} won!`);
        stop_game = 1;
        disable_all();

    }


    //moves the element.
    var temperarory = button_where_move.textContent;
    var temperarory2 = name_3.textContent;
    button_where_move.textContent = name_3.textContent;
    name_3.textContent="_______";
    
    if(flag == 1){
        
        flag = 0;
        change_turn();
        
        checking_check(turn);
        
        store_slave = temp_store_slave;
        change_turn();
        if(flag == 1){
            count++;
            if(count == 3){
                change_turn();
                window.alert(`you cant move it. player ${turn} won!`);
                document.getElementById("lose").style.zIndex = 1;
                stop_game = 1;
                disable_all();

            }
            else{
            window.alert(`Check is still there so try another move. Now you have only ${3-count} try to move element.then you will lose`);
            change_turn();
            name_3.textContent = temperarory2;
            button_where_move.textContent = temperarory;
        }
            
        }
        else{
            count = 0;
        }

        
    }

    

    }
    if(stop_game == 0){

        

    //enables all the buttons
    enable_all();

    //gives choosen method to all the buttons
    default_method();
 
    //checks that whether active player is giving check to opposite or not after move.
    checking_check(turn);
    store_slave = [];
    for(item=0;item<temp_store_slave.length;item++){
        
        store_slave.push(temp_store_slave[item]);
    }
    
    
    
    //it changes the turn
    change_turn();

    //it sets the images to updated chess board
    give();
    
    main();

    turn = 1;

  }
  
}


/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */
/*                                                      Horse                                                   */










function horse(i,j,k){

    if(i>0 && j>1)
    {
        var compare = document.getElementById(`${i-1}${j-2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-1,j-2,k) == 1 || got_enemy(i-1,j-2,k) == 2))
        {
            array.push(`${i-1}${j-2}`);
        }

    }

    if(i>0 && j<6)
    {
        var compare = document.getElementById(`${i-1}${j+2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-1,j+2,k) == 1 || got_enemy(i-1,j+2,k) == 2))
        {
            array.push(`${i-1}${j+2}`);
        }
    }

    if(i<7 && j>1)
    {
        var compare = document.getElementById(`${i+1}${j-2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+1,j-2,k) == 1 || got_enemy(i+1,j-2,k) == 2))
        {
            array.push(`${i+1}${j-2}`);
        }

    }

    if(i<7 && j<6)
    {    
        var compare = document.getElementById(`${i+1}${j+2}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+1,j+2,k) == 1 || got_enemy(i+1,j+2,k) == 2))
        {
            array.push(`${i+1}${j+2}`);
        }
    }

    if(i>1 && j>0)
    {
        var compare = document.getElementById(`${i-2}${j-1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-2,j-1,k) == 1 || got_enemy(i-2,j-1,k) == 2))
        {
            array.push(`${i-2}${j-1}`);
        }
    }
    
    if(i<6 && j>0)
    {
        var compare = document.getElementById(`${i+2}${j-1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+2,j-1,k) == 1 || got_enemy(i+2,j-1,k) == 2))
        {
            array.push(`${i+2}${j-1}`);
        }
    }
    if(i>1 && j<7)
    {
        var compare = document.getElementById(`${i-2}${j+1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i-2,j+1,k) == 1 || got_enemy(i-2,j+1,k) == 2))
        {
            array.push(`${i-2}${j+1}`);
        }
    }

    if(i<6 && j<7)
    {
        var compare = document.getElementById(`${i+2}${j+1}`).textContent;
        
        if(compare=="_______" || (got_enemy(i+2,j+1,k) == 1 || got_enemy(i+2,j+1,k) == 2))
        {
            array.push(`${i+2}${j+1}`);
        }
    }
    


}


/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */
/*                                                          camel elephent queen                                                   */  



function operation(i,j,k)
{
    var compare = document.getElementById(`${i}${j}`).textContent;
    
    if(compare == '_______')
    {
        array.push(`${i}${j}`);
        return 1;
    }

    else if((got_enemy(i,j,k) == 1 )||( got_enemy(i,j,k) == 2))
    {
        array.push(`${i}${j}`);
        return 0;
    }

}




function camel_1(i,j,k)
{

    if(i<7 && j<7)
    {
        s = operation(i+1,j+1,k);
        if (s==1)
        {
            camel_1(i+1,j+1,k)
        }
    }
    }



function camel_2(i,j,k)
{
    if(i<7 && j>0)
    {
        s = operation(i+1,j-1,k);
        if (s==1)
        {
            camel_2(i+1,j-1,k)
        }
    }
}

function camel_3(i,j,k)
{
if(i>0 && j<7)
{
    s = operation(i-1,j+1,k);
    if (s==1)
    {
        camel_3(i-1,j+1,k)
    }
}
}


function camel_4(i,j,k)
{
    if(i>0 && j>0)
    {
        s = operation(i-1,j-1,k);
        if (s==1)
        {
            camel_4(i-1,j-1,k)
        }
    }
}




 

function elephant_1(i,j,k)
{
    if(j<7)
    {
        s = operation(i,j+1,k);
        if (s==1)
        {
            elephant_1(i,j+1,k)
        }
    }
    }



function elephant_2(i,j,k)
{
    if(j>0)
    {
        s = operation(i,j-1,k);
        if (s==1)
        {
            elephant_2(i,j-1,k)
        }
    }
    }


 
function elephant_3(i,j,k)
{
    if(i<7)
    {
        s = operation(i+1,j,k);
        if (s==1)
        {
            elephant_3(i+1,j,k)
        }
    }
    }

function elephant_4(i,j,k)
{
if(i>0)
{
    s = operation(i-1,j,k);
    if (s==1)
    {
        elephant_4(i-1,j,k)
    }
}
}



/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */
/*                                              slave                                               */





function slave_main(i,j,k)
{
    
    if(k == 1){

        var slave_id = document.getElementById(`${i}${j}`).textContent;
    
        var already_in = 0;
        for(item=0;item<store_slave.length;item++){
            if(store_slave[item] == slave_id){
                already_in = 1;
                break;
            }
        }
        
        if(already_in != 1){
            store_slave.push(slave_id);
        }
    }

    if(k==1 && i<7)
    {
        if(j<7)
        {
            if(got_enemy(i+1,j+1,k) == 1)
            {
                array.push(`${i+1}${j+1}`);
            }
        }
        
        if(j>0)
        {
            if(got_enemy(i+1,j-1,k) == 1)
            {
                array.push(`${i+1}${j-1}`);
            } 
        }
        
        var compare = document.getElementById(`${i+1}${j}`).textContent;
        
        if(compare=='_______')
        {
            array.push(`${i+1}${j}`);
            if(already_in!=1){

                compare = document.getElementById(`${i+2}${j}`).textContent;
            
                if(compare=='_______')
                {
                    array.push(`${i+2}${j}`);
                    
                }
            }
        
        }
    }


    else if(k==2 && i>0)
    {
        
        if(j<7)
        {
            
            if(got_enemy(i-1,j+1,k) == 1)
            {
                
                array.push(`${i-1}${j+1}`);
            }
        }
        
        if(j>0)
        {
            if(got_enemy(i-1,j-1,k) == 1)
            {
                
                array.push(`${i-1}${j-1}`);
            } 
        }
        
        var compare = document.getElementById(`${i-1}${j}`).textContent;
        
        if(compare=='_______')
        {
            array.push(`${i-1}${j}`);
            
        }
    }
}


/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */
/*                                                              king                                                    */





function king(i,j,k)
{

    if((i<7 && j<7) && ((document.getElementById(`${i+1}${j+1}`).textContent=='_______') || ((got_enemy(i+1,j+1,k) == 1)||(got_enemy(i+1,j+1,k) == 2)))){
        array.push(`${i+1}${j+1}`);
    }

    if((i>0 && j>0) && ((document.getElementById(`${i-1}${j-1}`).textContent=='_______') || ((got_enemy(i-1,j-1,k) == 1)||(got_enemy(i-1,j-1,k) == 2)))){
        array.push(`${i-1}${j-1}`);
    }

    if((i<7 ) && ((document.getElementById(`${i+1}${j}`).textContent=='_______') || ((got_enemy(i+1,j,k) == 1)||(got_enemy(i+1,j,k) == 2)))){
        array.push(`${i+1}${j}`);
    }

    if((i>0) && ((document.getElementById(`${i-1}${j}`).textContent=='_______') || ((got_enemy(i-1,j,k) == 1)||(got_enemy(i-1,j,k) == 2)))){
        array.push(`${i-1}${j}`);
    }

    if((j>0) && ((document.getElementById(`${i}${j-1}`).textContent=='_______') || ((got_enemy(i,j-1,k) == 1)||(got_enemy(i,j-1,k) == 2)))){
        array.push(`${i}${j-1}`);
    }

    if((j<7) && ((document.getElementById(`${i}${j+1}`).textContent=='_______') || ((got_enemy(i,j+1,k) == 1)||(got_enemy(i,j+1,k) == 2)))){
        array.push(`${i}${j+1}`);
    }

    if((i>0 && j<7) && ((document.getElementById(`${i-1}${j+1}`).textContent=='_______') || ((got_enemy(i-1,j+1,k) == 1)||(got_enemy(i-1,j+1,k) == 2)))){
        array.push(`${i-1}${j+1}`);
    }

    if((i<7 && j>0) && ((document.getElementById(`${i+1}${j-1}`).textContent=='_______') || ((got_enemy(i+1,j-1,k) == 1)||(got_enemy(i+1,j-1,k) == 2)))){
        array.push(`${i+1}${j-1}`);
    }
    
}
        





/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */
/**                                                                Checking check                                                   */




//this is checking that whether current player giving check or not to opposite player
function checking_check(turn)
{
    array = [];
    enable_all();
    if(turn == 1)
    {
        for(i=0;i<8;i++)
        {
            for(j=0;j<8;j++)
            {
                var temp = document.getElementById(`${i}${j}`).textContent;
                
                if(temp == '1horse1' || temp == '1horse2')
                {
                    horse(i,j,turn);
                }
                
                else if(temp == '1camel1' || temp == '1camel2' )
                {
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);
                }
                
                else if(temp == '1eleph1' || temp == '1eleph2')
                {
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                }
                
                else if(temp == '1queenn')
                {
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);   
                }
                
                else if(temp.includes("1slave"))
                {
                    slave_main(i,j,turn);
                }
                
                else if(temp == '1_king_')
                {
                    king(i,j,turn);
                }
            }
        }
        
        
        for(i=0;i<array.length;i++)
        {
            var temp = document.getElementById(`${array[i]}`).textContent;
            
            if(temp == '2_king_')
            {
                flag = 1;
                break;
            }
        }

    }
    
    
    else
    {
        for(i=0;i<8;i++)
        {
            for(j=0;j<8;j++)
            {
                var temp = document.getElementById(`${i}${j}`).textContent;
                
                if(temp == '2horse1' || temp == '2horse2'){
                    horse(i,j,turn);
                }
                
                else if(temp == '2camel1' || temp == '2camel2' ){
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);
                }
                
                else if(temp == '2eleph1' || temp == '2eleph2'){
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                }
                
                else if(temp == '2queenn'){
                    elephant_1(i,j,turn);
                    elephant_2(i,j,turn);
                    elephant_3(i,j,turn);
                    elephant_4(i,j,turn);
                    camel_1(i,j,turn);
                    camel_2(i,j,turn);
                    camel_3(i,j,turn);
                    camel_4(i,j,turn);   
                }
                
                else if(temp.includes("2slave")){
                    slave_main(i,j,turn);
                }
                
                else if(temp == '2_king_'){
                    king(i,j,turn);
                }
            }
        }
        
        
        for(i=0;i<array.length;i++)
        {
            var temp = document.getElementById(`${array[i]}`).textContent;
            if(temp == '1_king_')
            {
                flag = 1;
                break;
            }
        }
    }
}


//this given the coresponding images to every button.
function give()
{
    for(i=0;i<8;i++)
    {
        for(j=0;j<8;j++)
        {
            
            var temp = document.getElementById(`${i}${j}`).textContent;
            
            if(temp == '1horse1' || temp == '1horse2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.horse.png")';
            }
            
            else if(temp == '2horse1' || temp == '2horse2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.horse.png")';
            }
            
            else if(temp == '1camel1' || temp == '1camel2' ){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.camel.png")';
            }
            
            else if(temp == '2camel1' || temp == '2camel2' ){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.camel.png")';
            }
            
            else if(temp == '1eleph1' || temp == '1eleph2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.rook.png")';
            }
            
            else if(temp == '2eleph1' || temp == '2eleph2'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.rook.png")';
            }
            
            else if(temp == '1queenn'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.queen.png")';
            }
            
            else if(temp == '2queenn'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.queen.png")';
            }
            
            else if(temp.includes("1slave")){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.pawn.png")';
            }
            
            else if(temp.includes("2slave")){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.pawn.png")';
            }
            
            else if(temp == '1_king_'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/1.king.png")';
            }
            
            else if(temp == '2_king_'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/2.king.png")';
            }

            else if(temp == '_______'){
                document.getElementById(`${i}${j}`).style.backgroundImage = 'url("images/blank.png")';
            }
        }
    }
}









//this checks that whether selected elephent and king is moved or not and check is enabled or not
function castle(i,j,turn)
{
    if (turn == 1)
    {
        if(king_1_moved != 1 && flag != 1){
            if(name_3.textContent[6] == 1)
            {
                if(elephant_1_1!=1)
                {
                    common_operation('1eleph1', '1_king_');
                    
                }
            }
            else
            {
                if(elephant_1_2 != 1)
                {
                    common_operation('1eleph2', '1_king_');
                }
            }
        }
    }
    else{

        if(king_2_moved != 1 && flag != 1){
            if(name_3.textContent[6] == 1)
            {
                if(elephant_2_1!=1)
                {
                    common_operation('2eleph1', '2_king_');
                }
            }
            else
            {
                if(elephant_2_2 != 1)
                {
                    common_operation('2eleph2', '2_king_');
                }
            }
        }
    }

}


//this find the king from 4 directions and checks that whether there is element in between them or not
function common_operation(value1,value2){
    var x = name_3.id[0];
    var y = name_3.id[1];
    x = parseInt(x);
    y = parseInt(y);
    var z = castle_elephent_4(x,y,turn);
    if (z == 5){
        return assign(value1,value2,x,y,turn);
    }
    else{
        z = castle_elephent_3(x,y,turn);
        if (z == 5){
            return assign(value1,value2,x,y,turn);
        } 
        else{
            z = castle_elephent_2(x,y,turn);
            if (z == 5){
                return assign(value1,value2,x,y,turn);
            } 
            else{
                z = castle_elephent_1(x,y,turn);
                if (z == 5){
                    return assign(value1,value2,x,y,turn);
                } 
                else{
                    
                }    
            }  
        }  
    }
}

//this checks that the element is blank or king or else
function castle_move(i,j,turn){

    if(document.getElementById(`${i}${j}`).textContent == '_______'){
        return 1;
    }
    else
    {
        if(turn == 1 && document.getElementById(`${i}${j}`).textContent == '1_king_'){
            return 0;
        }
        else if(turn == 2 && document.getElementById(`${i}${j}`).textContent == '2_king_'){
            return 0;
        }
    }
}

function castle_elephent_1(i,j,turn){
    if(j<7){
        s = castle_move(i,j+1,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i,j+1,turn);
            return s;
        }
    }
}

function castle_elephent_2(i,j,turn){
    if(j>0){
        s = castle_move(i,j-1,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i,j-1,turn);
            return s;
        }
    }
}
function castle_elephent_3(i,j,turn){
    if(i<7){
        s = castle_move(i+1,j,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i+1,j,turn);
            return s;
        }
    }
}


function castle_elephent_4(i,j,turn){
    if(i>0){
        s = castle_move(i-1,j,turn);
        if(s == 0){
            return 5;
        }
        if(s == 1){
            s = castle_elephent_1(i-1,j,turn);
            return s;
        }
    }
}


//This checks that whether king is getting check or not after castlemove
//finally if everything is okay then this function gives permission to make the king available for castle move
function assign(value1,value2,x,y,k){

    if(value2 == '1_king_'){
    
        var m = 0;
        var n = 3;
    
    }
    else{
        var m = 7;
        var n = 4;
    }
    
    
    
        array2 = array;
        var risk = 0;
        change_turn();
        var temp_store_slave = store_slave;
        checking_check(turn);
        store_slave = temp_store_slave;
        change_turn();
        for(i=0;i<array.length;i++){
            if(array[i] == `${x}${y}`){
                risk = 1;
            }
        }
    
        array = array2;
    
        if(risk != 1){
            array.push(`${m}${n}`);
        }
    
    
    
}

//this will find particular element in particular array and if it founds then returns 1
function search_in_array(element,array){

    var found = 0;
    
    for(i=0;i<array.length;i++)
    {
        if(array[i] == element)
        {
            found = 1;
            return 1;
        }
    }

    if(found == 0){
        return 0;
    }

}



//this will search an element in chess board and returns id of it.
function search_in_board(element){

    var element_found = 0;
    
    for(i=0;i<8;i++)
    {
        for(j=0;j<8;j++)
        {
            if( document.getElementById(`${i}${j}`).textContent == element )
            {
                element_found = 1;
                
                var a = [];
                a[0] = i;
                a[1] = j;
                
                return a;
            }
        }
    }
    if(element_found == 0){
        return -1;
    }
}


//this is the main function which will be executes when automatic turn comes
function main(){

    last();
    turn = 2;
    
    getlist();
    
    give();
    
    attack();

    
    var hello = 0;
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                var x = document.getElementById(`${i}${j}`).textContent;
                if(x == '1_king_'){
                    hello = 1;
                }
            }
        }
        if(hello == 0){
            document.getElementById("lose").style.zIndex = 1;
                disable_all();
        }


    flag = 0;
    
    var kingid = search_in_board('1_king_');
    
    var id = `${kingid[0]}${kingid[1]}`;
    
    for(i=0;i<temparory_array_attack.length;i++)
    {
        if(temparory_array_attack[i] == id)
        {
            flag = 1;
        }
    }


}




function getlist(){

    temparory_array_attack = [];
    temparory_array_defence = [];
    attack();  //this will update temp_attack array this needs turn = 2
    
    defense();   //this will update temp_defence array  this needs turn = 1
    
    turn = 2;
    array_attack_StringList = [];  
    array_defence_StringList = [];

    //this 2 loops will convert ids to their text content as we need need text in decide defence


    //this will store textcontent of attack array
    for(i=0;i<temparory_array_attack.length;i++)
    {
        var word = document.getElementById(`${temparory_array_attack[i][0]}${temparory_array_attack[i][1]}`).textContent;
        array_attack_StringList.push(word);
    }

    //this will store textcontent of defence array

    for(i=0;i<temparory_array_defence.length;i++)
    {
        var word = document.getElementById(`${temparory_array_defence[i][0]}${temparory_array_defence[i][1]}`).textContent;
        array_defence_StringList.push(word);
    }

    turn = 2;


    priority();

}


function defense()
{

    turn = 1;    

    var i ;
    temp_store_slave = [];
    
    for(item=0;item<store_slave.length;item++){
        temp_store_slave.push(store_slave[item]);
    }

    //this is function will change the original array so we need to store it, before it gets changed.
    var array_for_swap = [];
    for(i=0;i<array.length;i++)
    {
        array_for_swap.push(array[i]);
    }

    //now array is stored so now we makes it clear
    array = [];

    //this will check that whether element is in chessboard or not.
    i = search_in_board('1eleph1');
    if(i!=-1)
    {
        
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
           
    }
    
    i = search_in_board('1camel1');
    if(i!=-1)
    {
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
        
    }
    
    i = search_in_board('1eleph2');
    if(i!=-1)
    {
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
    }
    
    i = search_in_board('1camel2');
    if(i!=-1)
    {
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
    }
    
    i = search_in_board('1horse1');
    if(i!=-1)
    {
        horse(i[0],i[1],turn);
    }
    
    i = search_in_board('1horse2');
    if(i!=-1)
    {
        horse(i[0],i[1],turn);
    }
    
    i = search_in_board('1queenn');
    if(i!=-1)
    {
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave1');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave2');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave3');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave4');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave5');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave6');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave7');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1slave8');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('1_king_');
    if(i!=-1 && flag == 1)
    {
        king(i[0],i[1],turn);
    }

    //so now our array is filled with possible attacking positions of ours
    //now we will store it in our temp array
    //then we will clear array and give it, its original elements
    store_slave = [];
    for(item=0;item<temp_store_slave.length;item++){
        
        store_slave.push(temp_store_slave[item]);
    }


    for(i=0;i<array.length;i++)
    {
        temparory_array_defence.push(array[i]);
    }

    array = [];
    
    for(i=0;i<array_for_swap.length;i++)
    {
        array.push(array_for_swap[i]);
    }
    
    turn = 2;
    //okay so now work is done and now we have all possible attacking positions of ours in temp_array

}


function attack(){

    turn = 2;    
    
    var i ;
    //this is function will change the original array so we need to store it, before it gets changed.
    
    var array_for_swap = [];
    for(i=0;i<array.length;i++)
    {
        array_for_swap.push(array[i]);
    }

    //now array is stored so now we makes it clear
    array = [];

    //this will check that whether element is in chessboard or not.
    i = search_in_board('2eleph1');
    if(i!=-1)
    {
        
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
        
        
    }
    
    i = search_in_board('2camel1');
    if(i!=-1)
    {
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
        
    }
    
    i = search_in_board('2eleph2');
    if(i!=-1)
    {
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
    }
    
    i = search_in_board('2camel2');
    if(i!=-1)
    {
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
    }
    
    i = search_in_board('2horse1');
    if(i!=-1)
    {
        horse(i[0],i[1],turn);
    }
    
    i = search_in_board('2horse2');
    if(i!=-1)
    {
        horse(i[0],i[1],turn);
    }
    
    i = search_in_board('2queenn');
    if(i!=-1)
    {
        elephant_1(i[0],i[1],turn);
        elephant_2(i[0],i[1],turn);
        elephant_3(i[0],i[1],turn);
        elephant_4(i[0],i[1],turn);
        camel_1(i[0],i[1],turn);
        camel_2(i[0],i[1],turn);
        camel_3(i[0],i[1],turn);
        camel_4(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave1');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave2');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave3');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave4');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave5');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave6');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave7');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2slave8');
    if(i!=-1)
    {
        slave_main(i[0],i[1],turn);
    }
    
    i = search_in_board('2_king_');
    if(i!=-1  && flag == 1)
    {
        
        king(i[0],i[1],turn);
        
    }

    //so now our array is filled with possible attacking positions of opposite
    //now we will store it in our temp array
    //then we will clear array and give it, its original elements

    for(i=0;i<array.length;i++)
    {
        temparory_array_attack.push(array[i]);
    }

    array = [];
    
    for(i=0;i<array_for_swap.length;i++)
    {
        array.push(array_for_swap[i]);
    }
    
    turn = 2;
    //okay so now work is done and now we have all possible attacking positions of opposites in temp_array

}






//this function defines priorities like 1st priority is to kill opposite's king
//if its not possible then checks thaat our king is gettting killed or not and so on...
//according to that it will call functions
function priority(){

    turn = 2;
       
    if(array_attack_StringList.length != 0){
        
        if(search_in_array('1_king_',array_attack_StringList) == 1){
        decide_attack('1_king_');
        }
        else if(search_in_array('2_king_',array_defence_StringList) == 1){
            decide_defence('2_king_');
        }
        else if(search_in_array('1queenn',array_attack_StringList) == 1){
            decide_attack('1queenn');
        }
        else if(search_in_array('2queenn',array_defence_StringList) == 1){
        
            decide_defence('2queenn');
        }
        else if(search_in_array('1eleph1',array_attack_StringList) == 1){
            decide_attack('1eleph1');
        }
        else if(search_in_array('2eleph1',array_defence_StringList) == 1){
            decide_defence('2eleph1');
        }
        else if(search_in_array('1eleph2',array_attack_StringList) == 1){
            decide_attack('1eleph2');
        }
        else if(search_in_array('2eleph2',array_defence_StringList) == 1){
            decide_defence('2eleph2');
        }
        else if(search_in_array('1horse1',array_attack_StringList) == 1){
            decide_attack('1horse1');
        }
        else if(search_in_array('2horse1',array_defence_StringList) == 1){
            decide_defence('2horse1');
        }
        else if(search_in_array('1horse2',array_attack_StringList) == 1){
            decide_attack('1horse2');
        }
        else if(search_in_array('2horse2',array_defence_StringList) == 1){
            decide_defence('2horse2');
        }
        else if(search_in_array('1camel1',array_attack_StringList) == 1){
            
            decide_attack('1camel1');
        }
        else if(search_in_array('2camel1',array_defence_StringList) == 1){
            decide_defence('2camel1');
        }
        else if(search_in_array('1camel2',array_attack_StringList) == 1){
            decide_attack('1camel2');
        }
        else if(search_in_array('2camel2',array_defence_StringList) == 1){
            decide_defence('2camel2');
        }
        else if(search_in_array('1slave1',array_attack_StringList) == 1){
        
            decide_attack('1slave1');
        }
        else if(search_in_array('2slave1',array_defence_StringList) == 1){
            decide_defence('2slave1');
        }
        else if(search_in_array('1slave2',array_attack_StringList) == 1){
            decide_attack('1slave2');
        }
        else if(search_in_array('2slave2',array_defence_StringList) == 1){
            decide_defence('2slave2');
        }
        else if(search_in_array('1slave3',array_attack_StringList) == 1){
            decide_attack('1slave3');
        }
        else if(search_in_array('2slave3',array_defence_StringList) == 1){
            decide_defence('2slave3');
        }
        else if(search_in_array('1slave4',array_attack_StringList) == 1){
            decide_attack('1slave4');
        }
        else if(search_in_array('2slave4',array_defence_StringList) == 1){
            decide_defence('2slave4');
        }
        else if(search_in_array('1slave5',array_attack_StringList) == 1){
            decide_attack('1slave5');
        }
        else if(search_in_array('2slave5',array_defence_StringList) == 1){
            
            decide_defence('2slave5');
        }

        else if(search_in_array('1slave6',array_attack_StringList) == 1){
            decide_attack('1slave6');
        }
        else if(search_in_array('2slave6',array_defence_StringList) == 1){
            decide_defence('2slave6');
        }
        else if(search_in_array('1slave7',array_attack_StringList) == 1){
            
            decide_attack('1slave7');
        }
        else if(search_in_array('2slave7',array_defence_StringList) == 1){

            decide_defence('2slave7');
        }
        else if(search_in_array('1slave8',array_attack_StringList) == 1){
            decide_attack('1slave8');
        }
        else if(search_in_array('2slave8',array_defence_StringList) == 1){
            decide_defence('2slave8');
        }
        else{
            
            decide_else('_______');
        }
    }
    else{
        
        document.getElementById("won").style.zIndex = 1;
        disable_all();
    }
}

//this will check that from which element of opposition's, our element is going to be killed. 
//when we find that, we checks that can we kill that one with our any element, if we can then we will kill it.
function decide_defence(req_element){

    done = 1;
    turn = 1;
    
    var i = search_in_board(req_element); //gets the id of the our element which is going to be killed
    
    var req_element = `${i[0]}${i[1]}`;  //gives that id to this varible
    
    var found = 0;
    
    var array_for_swap = [];  //this will store the original array 
    for(i=0;i<array.length;i++){
        array_for_swap.push(array[i]);

    }
    array= [];
    
    //now we will take each element of opposition and checks that whether it is alive or not.
    // if it is alive then we will check whether it is killing our element or not
    //if it is killing, then we will check that can we kill it
    //if we can then we will kill it.
    
    if(done == 1)
    {
        
        i = search_in_board('1eleph1');   //this will check that whether it is in chess board or not
        if(i!=-1){
            array = [];

            //now this will get attacking positions of 1eleph1 so that we can the our element is 
            //in this positions or not
            //if it is then it means this element is killing our element
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);

            found = search_in_array(req_element,array); //this will check that whether our element is in that array or not
            
            if(found == 1)
            {
                found = search_in_array('1eleph1',array_attack_StringList);  //this will check can we kill that element or not.
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1eleph1');    
                }
                
                }
            }
        }

    //now same for all the elements of opposite's
    if(done == 1)
    {
        i = search_in_board('1camel1');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                
                found = search_in_array('1camel1',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1camel1');
                   
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1eleph2');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1eleph2',array_attack_StringList);
                
                if(found == 1){
                    turn = 2;
                    decide_attack('1eleph2');
                    
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1camel2');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                
                found = search_in_array('1camel2',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1camel2');
                    
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1horse1');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1horse1',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1horse1');
                    
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1horse2');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1horse2',array_attack_StringList);
                
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1horse2');
                    
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1queenn');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1queenn',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1queenn');
                   
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1slave1');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave1',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave1');
                   
                    
                }
                    
                }
            }
        }


    if(done == 1)
    {
    
        i = search_in_board('1slave2');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave2',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave2');
                   
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1slave3');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave3',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave3');
                    
                }
                
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1slave4');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave4',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave4');
                   
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1slave5');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave5',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave5');
                   
                }
                    
                }
            }
        }


    if(done == 1)
    {
        i = search_in_board('1slave6');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave6',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave6');
                   
                }
                    
                }
            }
        }

    if(done == 1)
    {
        i = search_in_board('1slave7');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave7',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave7');
                   
                }
                    
                }
            }
        }

    if(done == 1)
    {
        i = search_in_board('1slave8');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1slave8',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1slave8');
                   
                }
                    
                }
            }
        }

    if(done == 1 && flag == 1)
    {
        i = search_in_board('1_king_');
        if(i!=-1)
        {
            array = [];
            king(i[0],i[1],turn);

            found = search_in_array(req_element,array);
            
            if(found == 1)
            {
                found = search_in_array('1_king_',array_attack_StringList);
                
                if(found == 1)
                {
                    turn = 2;
                    decide_attack('1_king_');
                    
                }
                    
                }
            }
        }
        //this is the case if we cant defend our element
    if(done == 1){
        array = [];
        just_try_to_escape(req_element);
    }

    //this will gives array to its original elements
    array = [];
    for(i=0;i<array_for_swap.length;i++){
        array.push(array_for_swap[i]);
    }

}


//this will kill the required element and for that it will check here that
//which our element can kill it and when it will found, other function will be called
//which will kill that element.
function decide_attack(req_element){

    done = 1;      
    turn = 2;
    var i;
    var array_for_swap = [];  //this will store the original array 
    for(i=0;i<array.length;i++){
        array_for_swap.push(array[i]);
    
    }
    array= [];
    
    if(done == 1)
    {
        
        i = search_in_board('2eleph1');   //this will check that whether it is in chess board or not
        
        if(i!=-1)
        {
            array = [];
    
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            mainmove_attack_flag_is_0('2eleph1',req_element);
            
        }
    }
    
    //now same for all the elements of opposite's
    if(done == 1)
    {
        i = search_in_board('2camel1');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
            
            mainmove_attack_flag_is_0('2camel1',req_element);
            
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2eleph2');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2eleph2',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2camel2');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
            mainmove_attack_flag_is_0('2camel2',req_element);
            
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2horse1');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);
            
            mainmove_attack_flag_is_0('2horse1',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2horse2');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);
            mainmove_attack_flag_is_0('2horse2',req_element);
            
        }
    }

    
    if(done == 1)
    {
        i = search_in_board('2queenn');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2queenn',req_element);
            
            
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2slave1');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave1',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2slave2');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave2',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2slave3');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave3',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2slave4');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave4',req_element);
        }
    }

    
    if(done == 1)
    {
        i = search_in_board('2slave5');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave5',req_element);
        }
    }
    
    
    if(done == 1)
    {
        i = search_in_board('2slave6');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave6',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave7');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave7',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave8');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2slave8',req_element);
        }
    }
    
    if(done == 1 && flag == 1)
    {
        i = search_in_board('2_king_');
        if(i!=-1)
        {
            array = [];
            king(i[0],i[1],turn);
    
            mainmove_attack_flag_is_0('2_king_',req_element);
        }
    }    
    
    //this will gives array to its original elements
    array = [];
    for(i=0;i<array_for_swap.length;i++){
        array.push(array_for_swap[i]);
    }
    
}

//here we will attack on the required element.
//then we will check that whether we are getting check or not
//and if we are getting check then we will undo our move.
function mainmove_attack_flag_is_0(our_value,oppositor_value)
{    
    var temp = oppositor_value;
    var found = 0;
    
    var i;
    
    i = search_in_board(oppositor_value);
    var p = i[0];
    var q = i[1];
    
    oppositor_value = `${i[0]}${i[1]}`;
    
    found = search_in_array(oppositor_value,array);
    
    if(found == 1)
    {
        
        i = search_in_board(our_value);
        
        document.getElementById(`${oppositor_value[0]}${oppositor_value[1]}`).textContent = our_value;
        document.getElementById(`${i[0]}${i[1]}`).textContent = "_______";
        
        temparory_array_defence = [];
        defense();
        
        j = search_in_board('2_king_');
        j = `${j[0]}${j[1]}`;
        found = search_in_array(j,temparory_array_defence) ;
        
        if(found == 1)
        {
            document.getElementById(`${p}${q}`).textContent = temp;
            document.getElementById(`${i[0]}${i[1]}`).textContent = our_value;
            var index = 0;
            for(iteration=0;iteration<array_attack_StringList.length;iteration++)
            {
                if(array_attack_StringList[iteration] == temp)
                {
                    index = iteration;
                    break;
                }
            }
            array_attack_StringList.splice(index,1);
            priority();
        }
        else
        {
            done = 0;
        }
    }

}




function just_try_to_escape(req_element){
    
    turn = 2;
    done = 1;
    
    
    var  item = [];
    item[0] = req_element[0];
    item[1] = req_element[1];
    item[0] = parseInt(item[0]);
    item[1] = parseInt(item[1]);


  
 

    var array_for_swap = [];  //this will store the original array 
    for(i=0;i<array.length;i++){
        array_for_swap.push(array[i]);
    
    }
    var i = [];
    array= [];

        var our_value = document.getElementById(`${req_element}`).textContent;
        if(our_value == '2eleph1' || our_value == '2eleph2')
        {
            array = [];    
            elephant_1(item[0],item[1],turn);
            elephant_2(item[0],item[1],turn);
            elephant_3(item[0],item[1],turn);
            elephant_4(item[0],item[1],turn);

            checks(array,req_element,our_value);
            if(done == 1){
                decide_else('_______');
            }
        }
        
        if(our_value == '2horse1' || our_value == '2horse2')
        {
            array = [];
            horse(item[0],item[1],turn);

            checks(array,req_element,our_value);
            if(done == 1){
                decide_else('_______');
            }
                
        }
        
        if(our_value == '2camel1' || our_value == '2camel2')
        {
            array = [];
            camel_1(item[0],item[1],turn);
            camel_2(item[0],item[1],turn);
            camel_3(item[0],item[1],turn);
            camel_4(item[0],item[1],turn);

            checks(array,req_element,our_value);
            if(done == 1){
                decide_else('_______');
            }
        }

        if(our_value == '2queenn')
        {
            array = [];
            elephant_1(item[0],item[1],turn);
            elephant_2(item[0],item[1],turn);
            elephant_3(item[0],item[1],turn);
            elephant_4(item[0],item[1],turn);
            camel_1(item[0],item[1],turn);
            camel_2(item[0],item[1],turn);
            camel_3(item[0],item[1],turn);
            camel_4(item[0],item[1],turn);

            checks(array,req_element,our_value);
            if(done == 1){
                decide_else('_______');
            }
        }

        if(((our_value == '2slave1' || our_value == '2slave2') || (our_value == '2slave3' || our_value == '2slave4')) || ((our_value == '2slave5' || our_value == '2slave6') || (our_value == '2slave7' || our_value == '2slave8')))
        {
            array = [];
          
            slave_main(item[0],item[1],turn);

            checks(array,req_element,our_value);
            if(done == 1){
                decide_else('_______');
            }
        }

        if(our_value == '2_king_')
        {
            array = [];
            king(item[0],item[1],turn);

            if(array.length != 0)
            {
                //checking_for_just(req_element, '2_king_');
                checks(array,req_element,our_value);
                if(done == 1){
                    document.getElementById("won").style.zIndex = 1;
                    disable_all();
                }
            }
            else
            {
                decide_else('_______');
                //decide_attack('_______');
            }
        }

        array = [];
        for(i=0;i<array_for_swap.length;i++){
            array.push(array_for_swap[i]);
        }

}
/*

function checking_for_just(req_element, value){

    var  item = [];
    item[0] = req_element[0];
    item[1] = req_element[1];
    item[0] = parseInt(item[0]);
    item[1] = parseInt(item[1]);
    var check_removed = 0;

    for(i=0;i<array.length;i++)
    {
        second_temparory_array.push(array[i]);
    }

    for(i = 0;i<second_temparory_array.length;i++)
    {
        var x = second_temparory_array[i][0];
        var y = second_temparory_array[i][1];
        
        console.log("gone to",x,y);
        console.log("from",item[0],item[1]);
        var temp = document.getElementById(`${x}${y}`).textContent;
        document.getElementById(`${x}${y}`).textContent = value;

        var p = item[0];
        var q = item[1];

        document.getElementById(`${item[0]}${item[1]}`).textContent = '_______';
        temparory_array_defence = [];
        defense();

        var j;
        j = search_in_board(value);
        var tempid = `${j[0]}${j[1]}`;
        var found = search_in_array(tempid,temparory_array_defence);
        
        if(found == 1)
        {
            document.getElementById(`${x}${y}`).textContent = temp;
            document.getElementById(`${p}${q}`).textContent = value;
        }
        else
        {
            check_removed = 1;
            flag = 0;
            break;
        }
    }

    if(check_removed == 0)
    {
        document.getElementById("won").style.zIndex = 1;
        disable_all();
    }

}
*/


function checks(array,req_element,our_value){
    if(array.length!=0){
    var i = [];
    var p = array[0][0];
    var q = array[0][1];
     
    i[0] = req_element[0];
    i[1] = req_element[1];
    i[0] = parseInt(i[0]);
    i[1] = parseInt(i[1]);
  
    var temp = document.getElementById(`${p}${q}`).textContent;
    document.getElementById(`${p}${q}`).textContent = our_value;
    document.getElementById(`${i[0]}${i[1]}`).textContent = '_______';

    temparory_array_defence = [];
    defense();
    
    j = search_in_board('2_king_');
    j = `${j[0]}${j[1]}`;
    var found = search_in_array(j,temparory_array_defence) ;
    
    if(found == 1)
    {
        document.getElementById(`${p}${q}`).textContent = temp;
        document.getElementById(`${i[0]}${i[1]}`).textContent = our_value;
        
        array.shift();
        checks(array,req_element,our_value);
        
    }
    else
    {
        done = 0;
    }
    
}
else{
    done = 1;
}
}

function decide_else(req_element){
    
    turn = 2;
   
    var array_for_swap = [];  //this will store the original array 
    for(i=0;i<array.length;i++){
        array_for_swap.push(array[i]);
    
    }
    array= [];
    
    done = 1;
    
    var i;
    
    if(done == 1)
    {
        i = search_in_board('2slave1');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave1',req_element);
        }
    }
   
    if(done == 1)
    {
        i = search_in_board('2slave2');
        if(i!=-1)
        {
          
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave2',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave3');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave3',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave4');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave4',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave5');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave5',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave6');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave6',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave7');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave7',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave8');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave8',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2horse1');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);
            mainmove_attack_else('2horse1',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2horse2');
        if(i!=-1)
        {
            array = [];
            horse(i[0],i[1],turn);
            mainmove_attack_else('2horse2',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2slave1');
        if(i!=-1)
        {
            array = [];
            slave_main(i[0],i[1],turn);
            mainmove_attack_else('2slave1',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2queenn');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
            mainmove_attack_else('2queenn',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2eleph1');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            mainmove_attack_else('2eleph1',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2camel1');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
            mainmove_attack_else('2camel1',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2eleph2');
        if(i!=-1)
        {
            array = [];
            elephant_1(i[0],i[1],turn);
            elephant_2(i[0],i[1],turn);
            elephant_3(i[0],i[1],turn);
            elephant_4(i[0],i[1],turn);
            mainmove_attack_else('2eleph2',req_element);
        }
    }
    
    if(done == 1)
    {
        i = search_in_board('2camel2');
        if(i!=-1)
        {
            array = [];
            camel_1(i[0],i[1],turn);
            camel_2(i[0],i[1],turn);
            camel_3(i[0],i[1],turn);
            camel_4(i[0],i[1],turn);
            mainmove_attack_else('2camel2',req_element);
        }
    }
    
    if(done == 1 && flag == 1)
    {
        i = search_in_board('2_king_');
        if(i!=-1)
        {
            array = [];
            king(i[0],i[1],turn);
            mainmove_attack_else('2_king_',req_element);
        }
    }


    array = [];
    
    for(i=0;i<array_for_swap.length;i++)
    {
        array.push(array_for_swap[i]);
    }


}


function mainmove_attack_else(our_value,oppositor_value){

        
    var temp = oppositor_value;
    var j = search_in_board(oppositor_value);
    
    for(i=0;i<array.length;i++)
    {
        j[0] = array[i][0];
        j[1] = array[i][1];

    if(document.getElementById(`${array[i]}`).textContent = '_______')
    {   
        var p = j[0];
        var q = j[1];

        var k = search_in_board(our_value);
        document.getElementById(`${j[0]}${j[1]}`).textContent = our_value;
        document.getElementById(`${k[0]}${k[1]}`).textContent = '_______';
        
        temparory_array_defence = [];
        defense();
        
        var m = search_in_board('2_king_');
        m = `${m[0]}${m[1]}`;
        var found = search_in_array(m,temparory_array_defence);
        
        if(found == 1)
        {
            document.getElementById(`${p}${q}`).textContent = temp;
            document.getElementById(`${k[0]}${k[1]}`).textContent = our_value;
            var index = 0;
            for(iteration=0;iteration<array_attack_StringList.length;iteration++)
            {
                if(array_attack_StringList[iteration] == temp)
                {
                    index = iteration;
                    break;
                }
            }
            array_attack_StringList.splice(index,1);
            priority();
        }
        else
        {
            done = 0;
            break;
        }

    }
}

}

function last(){
    if(chances>20){
        document.getElementById("won").style.zIndex = 1;
                disable_all();
    }
    else{

        var count = 0;
    
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                var x = document.getElementById(`${i}${j}`).textContent;
                if(x[0] == '2'){
                    
                    count++;
                }
            }
        }
        if(count == 1){
           
            flag = 1;
            chances++;
        }
    }
}