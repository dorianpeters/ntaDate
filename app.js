var iDateSpan = document.getElementById('iDate');
var mDateSpan = document.getElementById('mDate');

var courtDate = new Date();
courtDate.setDate(courtDate.getDate() + 60);
while (courtDate.getDay() != 3) {  // increment date when not Wednesday.
    courtDate.setDate(courtDate.getDate() + 1);
}

var iDate = new Date(courtDate);
var mDate = new Date(courtDate);
// iDate.setHours(8);
// iDate.setMinutes(0);
// mDate.setHours(13);
// mDate.setMinutes(30);

iDateSpan.textContent = iDate.toDateString() + ' 8:00 AM';
mDateSpan.textContent = mDate.toDateString() + ' 1:30 PM';