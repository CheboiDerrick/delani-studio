$(document).ready(function () {
    $(".design-main").click(function () {
        $(".design-detail").toggle()
        $(".design").toggle()
    })
    $(".development-main").click(function () {
        $(".development-detail").toggle()
        $(".development").toggle()
    })
    $(".product-main").click(function () {
        $(".product-detail").toggle()
        $(".product").toggle()
    })
    $("#work1").hover(function () {
        $("#overlay1").show(function () {
            $("#overlay1").append("<h1>BLUE</h1>")
        })
    }, function () {
        $("#overlay1").hide(function () {
            $("#overlay1").empty()
        })
    })
    $("#work2").hover(function () {
        $("#overlay2").show(function () {
            $("#overlay2").append("<h1>ONTARIO</h1>")
        })
    }, function () {
        $("#overlay2").hide(function () {
            $("#overlay2").empty()
        })
    })
    $("#work3").hover(function () {
        $("#overlay3").show(function () {
            $("#overlay3").append("<h1>ORANGE</h1>")
        })
    }, function () {
        $("#overlay3").hide(function () {
            $("#overlay3").empty()
        })
    })
    $("#work4").hover(function () {
        $("#overlay4").show(function () {
            $("#overlay4").append("<h1>TRY ME</h1>")
        })
    }, function () {
        $("#overlay4").hide(function () {
            $("#overlay4").empty()
        })
    })
    $("#work5").hover(function () {
        $("#overlay5").show(function () {
            $("#overlay5").append("<h1>TRY ME</h1>")
        })
    }, function () {
        $("#overlay5").hide(function () {
            $("#overlay5").empty()
        })
    })
    $("#work6").hover(function () {
        $("#overlay6").show(function () {
            $("#overlay6").append("<h1>TRY ME</h1>")
        })
    }, function () {
        $("#overlay6").hide(function () {
            $("#overlay6").empty()
        })
    })
    $("#work7").hover(function () {
        $("#overlay7").show(function () {
            $("#overlay7").append("<h1>BURNED</h1>")
        })
    }, function () {
        $("#overlay7").hide(function () {
            $("#overlay7").empty()
        })
    })
    $("#work8").hover(function () {
        $("#overlay8").show(function () {
            $("#overlay8").append("<h2>BAILEY<br>WONGER</h2>")
        })
    }, function () {
        $("#overlay8").hide(function () {
            $("#overlay8").empty()
        })
    })
})
function validation() {
    let name=$("#name").val();
    let email=$("#email").val();
    let message=$("#message").val();

    if(name=="") {
        alert("Please enter your name")
    } else if (email=="") {
        alert("Please enter a valid email")
    }
    else if(message==""){
        alert("Please enter a message")
    }
    else {
        alert(name + ", your message has been received")
    }
}
