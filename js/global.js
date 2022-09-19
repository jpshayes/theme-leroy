function chatBox(chat) {
  var btn = jQuery("#send-message");
  var chat = jQuery("#block-webform");
  if (btn.text() == "Send Him a Message") { 
    btn.text("Whoa, nevermind"); 
  } else { 
    btn.text("Send Him a Message"); 
  };
  btn.toggleClass("from-green-700 to-green-800 hover:from-green-800 hover:to-green-800")
  chat.fadeToggle("hidden blur-none");
}


 jQuery(function (jQuery) {
  jQuery(document).ready(function () {

    var dropdowns = jQuery('#block-leroy-main-menu li.menu-item--expanded');
    dropdowns.each(function() {
      var submenu = jQuery(this).children('ul');
      jQuery(this).hover(
        function(){
          submenu.show()
        },
        function(){
          submenu.hide()
        }
      )
    });

    // Menu Dropdowns
    jQuery("#mobile-toggle").click(function() {
      jQuery("#mobile-menu").toggleClass("hidden");
    });

    //Attach chatBox to click actions
    jQuery('#no-chat').click(chatBox)
    jQuery("#send-message").click(chatBox)
  });
});
