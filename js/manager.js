
function reopen(e) {
  // TODO: check what's selected, then open
  alert("it works");
}

function main() {
  $('.reopen').on('click', reopen);
}

$(document).ready(main);
