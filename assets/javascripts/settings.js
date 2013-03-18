function updateStatustransitionList(event, data, status, xhr){
  $("#status-transition-list").html(data);
};

function generateLink(){
  var href = $("#link-add-transition").attr("href");
  var from = $("#new-transition-from").attr("value");
  var to = $("#new-transition-to").attr("value");
  return href + "from_id=" + from + "&to_id=" + to;
}

function applyCallbacks(){
  $("#status-transition-list").live("ajax:success", updateStatustransitionList);
  
  

  $("#link-add-transition").click(function(){
    var href = $("#link-add-transition").attr("href");
    var from = $("#new-transition-from").attr("value");
    var to = $("#new-transition-to").attr("value");
    $(this).attr("href","");
    $(this).attr("href", href + "from_id=" + from + "&to_id=" + to);
  })
};

$(document).ready(function(){
  applyCallbacks();
  console.log("callbacks activated");
});
