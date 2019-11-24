var iDateSpan = document.getElementById('iDate');
var mDateSpan = document.getElementById('mDate');

var courtDate = new Date();
courtDate.setDate(courtDate.getDate() + 60);
while (courtDate.getDay() != 3) {  // increment date when not Wednesday.
    courtDate.setDate(courtDate.getDate() + 1);
}

// Skip Veterans day in 2020
if ( (courtDate.getMonth() === 10) && 
(courtDate.getDate() === 11) && 
(courtDate.getFullYear() === 2020) ) 
{
    courtDate.setDate(courtDate.getDate() + 7);
}

// Skip Cesar Chavez day in 2021
if ( (courtDate.getMonth() === 2) && 
(courtDate.getDate() === 31) && 
(courtDate.getFullYear() === 2021) ) 
{
    courtDate.setDate(courtDate.getDate() + 7);
}

var iDate = new Date(courtDate);
var mDate = new Date(courtDate);

iDateSpan.textContent = iDate.toDateString() + ' 8:00 AM';
mDateSpan.textContent = mDate.toDateString() + ' 1:30 PM';