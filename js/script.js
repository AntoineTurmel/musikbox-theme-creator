$( document ).ready(function() {
  
  $(".colorvalue input[type='color']").each(function () {
    this.addEventListener("change", function(){
      var colorname = this.id.replace("c-", "");
      $("#t-" + colorname).val($("#c-" + colorname).val());
      loadcolor(colorname, $("#c-" + colorname).val());
    });
  });
  
  $(".colorvalue input[type='text']").each(function () {
    this.addEventListener("keyup", function(){
      var colorname = this.id.replace("t-", "");
      $("#c-" + colorname).val($("#t-" + colorname).val());
      loadcolor(colorname, $("#c-" + colorname).val());
    });
  });
  
  $("#save").click(function(){
    var themefile = {
  "name":  $("#themename").val(),
  "schemaVersion": 1,
  "colors": {
    "background": {
      "hex": $("#t-background").val(),
      "palette": 234
    },
    "foreground": {
      "hex":  $("#t-foreground").val(),
      "palette": 254
    },
    "focused_border": {
      "hex":  $("#t-focused_border").val(),
      "palette": 160
    },
    "text_focused": {
      "hex":  $("#t-text_focused").val(),
      "palette": 160
    },
    "text_active": {
      "hex":  $("#t-text_active").val(),
      "palette": 64
    },
    "text_disabled": {
      "hex":  $("#t-text_disabled").val(),
      "palette": 245
    },
    "text_hidden": {
      "hex":  $("#t-text_hidden").val(),
      "palette": 235
    },
    "text_warning": {
      "hex":  $("#t-text_warning").val(),
      "palette": 136
    },
    "text_error": {
      "hex":  $("#t-text_error").val(),
      "palette": 160
    },
    "overlay_background": {
      "hex":  $("#t-overlay_background").val(),
      "palette": 240
    },
    "overlay_foreground": {
      "hex":  $("#t-overlay_foreground").val(),
      "palette": 230
    },
    "overlay_border": {
      "hex":  $("#t-overlay_border").val(),
      "palette": 235
    },
    "overlay_focused_border": {
      "hex":  $("#t-overlay_focused_border").val(),
      "palette": 160
    },
    "shortcuts_background": {
      "hex":  $("#t-shortcuts_background").val(),
      "palette": 240
    },
    "shortcuts_foreground": {
      "hex":  $("#t-shortcuts_foreground").val(),
      "palette": 230
    },
    "shortcuts_background_focused": {
      "hex":  $("#t-shortcuts_background_focused").val(),
      "palette": 160
    },
    "shortcuts_foreground_focused": {
      "hex":  $("#t-shortcuts_foreground_focused").val(),
      "palette": 230
    },
    "button_background_normal": {
      "hex":  $("#t-button_background_normal").val(),
      "palette": 254
    },
    "button_foreground_normal": {
      "hex":  $("#t-button_foreground_normal").val(),
      "palette": 234
    },
    "button_background_active": {
      "hex":  $("#t-button_background_active").val(),
      "palette": 64
    },
    "button_foreground_active": {
      "hex":  $("#t-button_foreground_active").val(),
      "palette": 230
    },
    "banner_background": {
      "hex":  $("#t-banner_background").val(),
      "palette": 166
    },
    "banner_foreground": {
      "hex":  $("#t-banner_foreground").val(),
      "palette": 254
    },
    "list_header_background": {
      "hex":  $("#t-list_header_background").val(),
      "palette": 234
    },
    "list_header_foreground": {
      "hex":  $("#t-list_header_foreground").val(),
      "palette": 64
    },
    "list_item_highlighted_background": {
      "hex":  $("#t-list_item_highlighted_background").val(),
      "palette": 245
    },
    "list_item_highlighted_foreground": {
      "hex":  $("#t-list_item_highlighted_foreground").val(),
      "palette": 234
    },
    "list_item_active_background": {
      "hex":  $("#t-list_item_active_background").val(),
      "palette": 254
    },
    "list_item_active_foreground": {
      "hex":  $("#t-list_item_active_foreground").val(),
      "palette": 235
    },
    "list_item_active_highlighted_background": {
      "hex":  $("#t-list_item_active_highlighted_background").val(),
      "palette": 230
    },
    "list_item_active_highlighted_foreground": {
      "hex":  $("#t-list_item_active_highlighted_foreground").val(),
      "palette": 235
    }
  }
};
    
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(themefile));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", $("#themename").val().replace(" ", "_") + ".json");
    dlAnchorElem.click();
  });
  
  $("#themefile").change(function(e) {
      onChange(e);
  });

  function onChange(event) {
      var reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event){

    var themefile = $.parseJSON( event.target.result);
    
      $("#themename").val(themefile.name);
      $.each(themefile.colors, function(key, val){
        loadcolor(key, val.hex);
        $("#c-" + key).val(val.hex);
        $("#t-" + key).val(val.hex);
      });

  }
  
  //$.getJSON( "solarized_light.json", function( data ) {
    //$("#themename").val(data.name);
      ////console.log(data.name);
      //$.each(data.colors, function(key, val){
        ////console.log(key + " " + val);
        //loadcolor(key, val.hex);
        //$("#c-" + key).val(val.hex);
        //$("#t-" + key).val(val.hex);
      //});

  //});
  
  function loadcolor(colorname, color){
    switch (colorname) {
      case "background":
        $("#musikbox_main").css("background-color",color);
        $("#musikbox_settings").css("background-color",color);
      break;
      
      case "foreground":
        $("#musikbox_main").css("color",color);
        $("#musikbox_settings").css("color",color);
        $("#folder_indexed").css("border-color",color);
        $("#tracks").css("border-color",color);
      break;

      case "focused_border":
        $("#folder_tree").css("border-color",color);
        $("#artists").css("border-color",color);
      break;
      
      case "text_focused":
        $(".text_focused").css("color",color);
      break;
      
      case "text_active":
        $(".text_active").css("color",color);
      break;
      
      case "text_disabled":
        $(".text_disabled").css("color",color);
        $("#firstline").css("color",color);
      break;
      
      case "text_hidden":
        //not implemented
      break;
      
      case "text_warning":
        //not implemented
      break;
      
      case "text_error":
        //not implemented
      break;
      
      case "overlay_background":
        $("#musikbox_overlay").css("background-color",color);
      break;
      
      case "overlay_foreground":
        $("#musikbox_overlay").css("color",color);
      break;
      
      case "overlay_border":
        $("#overlay_border").css("border-color",color);
      break;
      
      case "overlay_focused_border":
        $("#hotkey").css("border-color",color);
      break;
      
      case "shortcuts_background":
        $(".commandbar").css("background-color",color);
      break;
      
      case "shortcuts_foreground":
        $(".commandbar").css("color",color);
      break;
      
      case "shortcuts_background_focused":
        $(".commandbar_focused").css("background-color",color);
      break;
      
      case "shortcuts_foreground_focused":
        $(".commandbar_focused").css("color",color);
      break;
      
      case "button_background_normal":
        $(".button_normal").css("background-color",color);
      break;
      
      case "button_foreground_normal":
        $(".button_normal").css("color",color);
      break;
      
      case "button_background_active":
        $(".button_active").css("background-color",color);
      break;
      
      case "button_foreground_active":
        $(".button_active").css("color",color);
      break;
      
      case "banner_background":
        $("#header").css("background-color",color);
      break;
      
      case "banner_foreground":
        $("#header").css("color",color);
      break;
      
      case "list_header_background":
        $(".list_header").css("background-color",color);
      break;
      
      case "list_header_foreground":
        $(".list_header").css("color",color);
      break;
      
      case "list_item_highlighted_background":
        $(".list_item_highlighted").css("background-color",color);
      break;
      
      case "list_item_highlighted_foreground":
        $(".list_item_highlighted").css("color",color);
      break;
      
      case "list_item_active_background":
        $(".list_item_active").css("background-color",color);
      break;
      
      case "list_item_active_foreground":
        $(".list_item_active").css("color",color);
      break;
      
      case "list_item_active_highlighted_background":
        // TO FINISH
        $(".list_item_active_highlighted").css("background-color",color);
      break;
      
      case "list_item_active_highlighted_foreground":
        // TO FINISH
        $(".list_item_active_highlighted").css("color",color);
      break;
    }
  }
});
