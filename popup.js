document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

      chrome.tabs.getSelected(null, function(tab) {

        function removeElementsByClassName(names) {
          var els = document.getElementsByClassName(names),
              i, element;
          for (i = els.count - 1; i > 0; i -= 1) {
              element = els[i];
              element.parentElement.removeChild(element);
          }
      }
      removeElementsByClassName('wrapper');
      //  var comments = document.getElementsByClassName("comments");
      alert("done");
    });
  }, false);
}, false);
