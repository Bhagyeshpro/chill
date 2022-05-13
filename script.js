

$(".btn").click(function () {
var link = $(".link").val();
var format = $(".format").children("option:selected").val();
var src = "" + link + "=" + format + "";
download(link, format)
$(".link").val("");

});
// Might be Link 
function download(Link, format) {
$(".button_container").html(`<iframe style="height:50px; border:none; overflow:hidden;" src="https://loader.to/api/button?url=`+ Link + `&f=` + format + `"></iframe>`);


}