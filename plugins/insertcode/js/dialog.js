tinyMCEPopup.requireLangPack();

var InsertCodeDialog = {
  init : function() {
    if (tinyMCEPopup.editor.selection.getNode().nodeName == 'PRE') {
      var s = tinyMCEPopup.editor.selection.getNode().innerHTML;
      var lc = tinyMCE.activeEditor.dom.getAttrib(tinyMCEPopup.editor.selection
          .getNode(), 'class', 'cpp');
      var l = lc.substring(lc.indexOf('brush: ') + 7, lc.indexOf(';'));
      if (s.trim().length > 0) {
        document.forms[0].CodeLanguage.value = l;
        document.forms[0].CodeText.value = s.trim();
      }
    }
  },

  insert : function() {
    var ct = '<pre class="brush: ';
    ct += document.forms[0].CodeLanguage.value;
    ct += ';">' + document.forms[0].CodeText.value.trim() + '</pre>';

    tinyMCEPopup.editor.selection.getNode().innerHTML = "";
    tinyMCEPopup.editor.execCommand('mceRemoveNode', false,
        tinyMCEPopup.editor.selection.getNode());
    tinyMCEPopup.editor.execCommand('mceInsertContent', false, ct);
    tinyMCEPopup.close();
  }
};

String.prototype.trim = function() {
  return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

tinyMCEPopup.onInit.add(InsertCodeDialog.init, InsertCodeDialog);
