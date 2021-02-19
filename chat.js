function StartChat(id) {
    document.getElementById('chatpanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style','display:none')

    hideChatList();
}

/////////////////////////////////////////////////////////


function showChatList(){

    document.getElementById('side-1').classList.remove( 'd-none' ,'d-md-block');
    document.getElementById('side-2').classList.add('d-none');

}
function hideChatList(){

    document.getElementById('side-1').classList.add('d-none' ,'d-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}

/////////////////////////////////////////////////////////////
function OnkeyDown(){
   document.addEventListener('keydown',function(key){
       if(key.which === 13){
           SendMessage();

       }
   })
}
function  SendMessage(){
    var message =  ` <div class="row justify-content-end">
                                
                       <div class="col-6 col-sm-7 col-md-7 ">
                       <p class="sent">${document.getElementById('txtMessage').value}
                           <span class="time ">11:50PM</span>
                         </p>
                          </div>
                         <div class="col-2 col-sm-1 col-md-1">
                         <img src="images/pp.png" class="chat-pic" alt="">

                          </div>
                      </div>` ;
                      document.getElementById('message').innerHTML += message
                      document.getElementById('txtMessage').value = '';
                      document.getElementById('message').scrollTo(0, document.getElementById('message').clientHeight);
}

//////////////////////////////////////////////////////////////////////////////////////

function signIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  
}