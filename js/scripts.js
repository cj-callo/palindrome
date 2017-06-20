$(document).ready(function () {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var arrayOfWord = word.split("");
    console.log(arrayOfWord);
    var result = arrayOfWord.reverse().join("");




    $(".answer").text(result);
    $("#result").show();
  });
});
