function display_date() { //setting up the time
    document.getElementById('date').innerHTML = Date(); 
    setTimeout(display_date,1000);
}
display_date();
