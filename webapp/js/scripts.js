<<<<<<< HEAD

$(document).ready(function(){/* jQuery toggle layout */
$('#btnToggle').click(function(){
  if ($(this).hasClass('on')) {
    $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
    $(this).removeClass('on');
  }
  else {
    $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
    $(this).addClass('on');
  }
});
});
=======
// $(".qna-comment").on("click", ".answerWrite input[type=submit]", addAnswer);
$(".answerWrite input[type=submit]").click(addAnswer);

function addAnswer(e) {
  e.preventDefault();

  var queryString = $("form[name=answer]").serialize();

  $.ajax({
    type : 'post',
    url : '/api/qna/addAnswer',
    data : queryString,
    dataType : 'json',
    error: onError,
    success : onSuccess,
  });
}

function onSuccess(json, status){
  var answer = json.answer;
  var answerTemplate = $("#answerTemplate").html();
  var template = answerTemplate.format(answer.writer, new Date(answer.createdDate), answer.contents, answer.answerId, answer.answerId);
  $(".qna-comment-slipp-articles").prepend(template);
}

function onError(xhr, status) {
  alert("error");
}

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
  });
};
>>>>>>> origin/step7-self-check-do
