//1
// Set the date we're counting down to
    var satu = new Date("Nov 3, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance1 = satu - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("validdaftar").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance1 < 0) {
            clearInterval(x);
            document.getElementById("validdaftar").innerText = 'Selesai'
        } 
    }, 1000);
    
    //2
// Set the date we're counting down to
    var dua = new Date("Nov 8, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance2 = dua - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance2 < 0) {
            clearInterval(x);
            document.getElementById("duaa").innerText = 'Selesai'
        } 
    }, 1000);
    
//3
// Set the date we're counting down to
    var tiga = new Date("Nov 12, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance3 = tiga - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("tigaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance3 < 0) {
            clearInterval(x);
            document.getElementById("tigaa").innerText = 'Selesai'
        } 
    }, 1000);
    
//4
// Set the date we're counting down to
    var empat = new Date("Nov 22, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance4 = empat - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance4 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("empatt").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance4 < 0) {
            clearInterval(x);
            document.getElementById("empatt").innerText = 'Selesai'
        } 
    }, 1000);
    
//5
// Set the date we're counting down to
    var lima = new Date("Nov 24, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance5 = lima - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance5 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance5 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("limaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance5 < 0) {
            clearInterval(x);
            document.getElementById("limaa").innerText = 'Selesai'
        } 
    }, 1000);
    
//6
// Set the date we're counting down to
    var enam = new Date("Dec 4, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance6 = enam - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance6 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance6 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("enamm").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance6 < 0) {
            clearInterval(x);
            document.getElementById("enamm").innerText = 'Selesai'
        } 
    }, 1000);
    
    //7
// Set the date we're counting down to
    var tujuh = new Date("Dec 01, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance7 = tujuh - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance7 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance7 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("tujuhh").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance7 < 0) {
            clearInterval(x);
            document.getElementById("tujuhh").innerText = 'Selesai'
        } 
    }, 1000);
    
    //8
// Set the date we're counting down to
    var lapan = new Date("Dec 1, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance8 = lapan - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance8 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance8 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("delapann").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance8 < 0) {
            clearInterval(x);
            document.getElementById("delapann").innerText = 'Selesai'
        } 
    }, 1000);
    
    //9
// Set the date we're counting down to
    var sangak = new Date("Dec 15, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance9 = sangak - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance9 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance9 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("sembilann").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance9 < 0) {
            clearInterval(x);
            document.getElementById("sembilann").innerText = 'Selesai'
        } 
    }, 1000);
    
    //10
// Set the date we're counting down to
    var sepul = new Date("Dec 09, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance10 = sepul - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance10 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance10 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance10 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance10 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("sepuluhh").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance10 < 0) {
            clearInterval(x);
            document.getElementById("sepuluhh").innerText = 'Selesai'
        } 
    }, 1000);
    
    //11
// Set the date we're counting down to
    var sebelas = new Date("Dec 3, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance11 = sebelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance11 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance11 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance11 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance11 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("sebelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance11 < 0) {
            clearInterval(x);
            document.getElementById("sebelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //12
// Set the date we're counting down to
    var duabelas = new Date("Dec 6, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance12 = duabelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance12 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance12 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance12 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance12 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duabelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance12 < 0) {
            clearInterval(x);
            document.getElementById("duabelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //13
// Set the date we're counting down to
    var tigabelas = new Date("Dec 12, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance13 = tigabelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance13 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance13 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance13 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance13 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("tigabelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance13 < 0) {
            clearInterval(x);
            document.getElementById("tigabelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //14
// Set the date we're counting down to
    var empatbelas = new Date("Dec 15, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance14 = empatbelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance14 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance14 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance14 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance14 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("empatbelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance14 < 0) {
            clearInterval(x);
            document.getElementById("empatbelass").innerText = 'Selesai'
        } 
    }, 1000);
    //14
// Set the date we're counting down to
    var empatbelas = new Date("Dec 15, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance14 = empatbelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance14 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance14 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance14 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance14 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("limabelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance14 < 0) {
            clearInterval(x);
            document.getElementById("limabelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //16
// Set the date we're counting down to
    var enambelas = new Date("Dec 9, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance16 = enambelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance16 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance16 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance16 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance16 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("enambelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance16 < 0) {
            clearInterval(x);
            document.getElementById("enambelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //17
// Set the date we're counting down to
    var tujuhbelas = new Date("Dec 15, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance17 = tujuhbelas - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance17 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance17 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance17 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance17 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("tujuhbelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance17 < 0) {
            clearInterval(x);
            document.getElementById("tujuhbelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //18
// Set the date we're counting down to
    var delapan = new Date("Dec 13, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance18 = delapan - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance18 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance18 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance18 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance18 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("delapanbelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance18 < 0) {
            clearInterval(x);
            document.getElementById("delapanbelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //19
// Set the date we're counting down to
    var sembilan = new Date("Dec 14, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance19 = sembilan - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance19 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance19 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance19 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance19 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("sembilanbelass").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance19 < 0) {
            clearInterval(x);
            document.getElementById("sembilanbelass").innerText = 'Selesai'
        } 
    }, 1000);
    
    //20
// Set the date we're counting down to
    var duapuluh = new Date("Dec 15, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance20 = duapuluh - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance20 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance20 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance20 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance20 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duapuluhh").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance20 < 0) {
            clearInterval(x);
            document.getElementById("duapuluhh").innerText = 'Selesai'
        } 
    }, 1000);
    
     //21
// Set the date we're counting down to
    var duasa = new Date("Dec 17, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance21 = duasa - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance21 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance21 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance21 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance21 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duasatuu").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance21 < 0) {
            clearInterval(x);
            document.getElementById("duasatuu").innerText = 'Selesai'
        } 
    }, 1000);
    
     //22
// Set the date we're counting down to
    var duadu = new Date("Dec 20, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance22 = duadu - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance22 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance22 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance22 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance22 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duaduaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance22 < 0) {
            clearInterval(x);
            document.getElementById("duaduaa").innerText = 'Selesai'
        } 
    }, 1000);
    
     //23
// Set the date we're counting down to
    var duati = new Date("Dec 19, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance23 = duati - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance23 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance23 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance23 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance23 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duatigaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance23 < 0) {
            clearInterval(x);
            document.getElementById("duatigaa").innerText = 'Selesai'
        } 
    }, 1000);
    
     //24
// Set the date we're counting down to
    var duapat = new Date("Dec 25, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance24 = duapat - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance24 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance24 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance24 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance24 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duaempatt").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance24 < 0) {
            clearInterval(x);
            document.getElementById("duaempatt").innerText = 'Selesai'
        } 
    }, 1000);
    
     //25
// Set the date we're counting down to
    var dualim = new Date("Dec 30, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance25 = dualim - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance25 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance25 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance25 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance25 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("dualimaa").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance25 < 0) {
            clearInterval(x);
            document.getElementById("dualimaa").innerText = 'Selesai'
        } 
    }, 1000);
    
     //26
// Set the date we're counting down to
    var duaenam = new Date("Dec 26, 2023 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance26 = duaenam - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance26 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance26 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance26 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance26 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duaenam").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance26 < 0) {
            clearInterval(x);
            document.getElementById("duaenam").innerText = 'Selesai'
        } 
    }, 1000);
    
     //27
// Set the date we're counting down to
    var duaju = new Date("Jan 1, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance27 = duaju - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance27 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance27 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance27 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance27 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("duatujuhh").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance27 < 0) {
            clearInterval(x);
            document.getElementById("duatujuhh").innerText = 'Selesai'
        } 
    }, 1000);
    
     //28
// Set the date we're counting down to
    var duapan = new Date("Jan 1, 2024 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance28 = duapan - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance28 / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance28 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance28 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance28 % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // Display the result in the element with id="demo"
        document.getElementById("dualapan").innerText = days + " hari " + hours + " : " +
            minutes + " : " + seconds + "  ";

          // If the count down is finished, write some text
        if (distance28 < 0) {
            clearInterval(x);
            document.getElementById("dualapan").innerText = 'Selesai'
        } 
    },1000);