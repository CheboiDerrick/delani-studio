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
})