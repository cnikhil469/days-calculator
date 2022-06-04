function calDays() {
    var date = document.querySelector('input').value;
    var date = date.split("-");
    // console.log(t);
    var pday = parseInt(date[2]);
    var pmonth = parseInt(date[1]);
    var pyear = parseInt(date[0]);
    // console.log(date,pday,pmonth,pyear)
    var today = new Date();
    var days = 0;
    var nday = today.getDate();
    var nmonth = today.getMonth()+1;
    var nyear = today.getFullYear();
    const montharr = [31,0,31,30,31,30,31,31,30,31,30,31];
    if(leapyear(pyear)){
        montharr[1] = 29;
    }
    else{
        montharr[1] = 28;
    }
    if (pyear > nyear || (pyear == nyear && pmonth > nmonth) || (pyear == nyear && pmonth == nmonth && pday > nday)) {
        document.getElementById('days-value').innerText = "ERROR"
        return
    }
    if (pyear == nyear)
    {
        var diff = nmonth - pmonth;
        if (!diff) {
            days = nday - pday + 1
        }
        else {
            days += montharr[pmonth-1] - pday + 1;
            for (var i = 0; i<diff-1; i++) {
                days += montharr[pmonth + i]
            }
            days += nday
        }
        document.getElementById('days-value').innerText = days
        return
    }
    days += montharr[pmonth-1] - pday + 1;
    console.log(days)
    if (pmonth + 1 < 13) {
        montharr.slice(pmonth).forEach(n => days += n);
    }
    console.log(days)
    var val = pyear+1;
    while(val<nyear) {
        if (leapyear(val)){
            days += 366;
        }
        else {
            days += 365;
        }
        val += 1;
    }
    console.log(days)
    if(leapyear(nyear)){
        montharr[1] = 29;
    }
    else{
        montharr[1] = 28;
    }
    if (nmonth > 1){
        montharr.slice(0,nmonth-1).forEach(n => days += n);
        console.log(days)
        days += nday;
    }
    else {
        days += nday;
    }
    document.getElementById("days-value").innerText = days;
}

function resetfunc() {
    document.querySelector('input').value = null;
    document.getElementById("days-value").innerText = null;
}

function leapyear(f) {
    if (f%100 == 0) {
        if (f%400 == 0) {
            return true
        }
        return false
    }
    else {
        if (f%4 == 0) {
            return true
        }
        return false
    }
}