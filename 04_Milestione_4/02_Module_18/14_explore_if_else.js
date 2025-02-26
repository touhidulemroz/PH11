//admin
//editor
//user

var useRole = 'admin';
if(useRole === 'admin'){
    console.log('Redirect to admin dashboard');
}
else if(useRole === 'editor'){
    console.log('Redirect to editor dashboard');
}
else{
    console.log('Redirect to user dashboard');
}

