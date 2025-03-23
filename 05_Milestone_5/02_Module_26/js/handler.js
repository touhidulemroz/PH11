console.log('handler file added');

document.getElementById('btn-update-title').addEventListener('click',function(){
    // console.log('clicked');
    const pageTitleElement = document.getElementById('page-title');
    console.log(pageTitleElement);
    pageTitleElement.innerText = 'New Title';

})

document.getElementById('btn-log-in').addEventListener('click', function(){
    document.getElementById('user-logged-in').innerText = 'User Logged In';
  });