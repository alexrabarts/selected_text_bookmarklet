/*
 * Selected Text Bookmarklet
 *
 * The bookmarklet will open a URL dynamically depending on the current
 * selected text.  Modify the URL to meet your needs.
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009 Alex Rabarts
 *
 * @author   Alex Rabarts
 * @version  0.1.1
 */

(function () {
  open('http://example.com?q=' + escape(selectedText()));

  function selectedText() {
    var text = '';

    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange().text;
    }

    return String(text);
  }
})();
