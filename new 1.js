//META{"name":"agif"}*//

var agif = function () {};

agif.prototype.convert = function () {
    $(".image canvas").each(function() { 
        var src = $(this).attr("src"); 
        if(src != undefined) { 
            $(this).replaceWith('<img src="'+src+'"></img>'); 
        }
    });
};

agif.prototype.onMessage = function () {
    this.convert();
};
agif.prototype.onSwitch = function () {
    this.convert();
};
agif.prototype.start = function () {
    this.convert();
};

agif.prototype.load = function () {};
agif.prototype.unload = function () {};
agif.prototype.stop = function () {};
agif.prototype.getSettingsPanel = function () {
    return "";
};

agif.prototype.getName = function () {
    return "Autogif";
};
agif.prototype.getDescription = function () {
    return "Autoplay gifs without having to hover.";
};
agif.prototype.getVersion = function () {
    return "0.1.0";
};
agif.prototype.getAuthor = function () {
    return "Jiiks";
};

//META{"name":"GuildsScroller"}*//

function GuildsScroller() {}

GuildsScroller.prototype.load = function() {
};

GuildsScroller.prototype.unload = function() {
};

GuildsScroller.prototype.start = function() {
	$(".guilds").wrap('<div class="scroller-wrap fade dark"></div>').wrap('<div class="scroller" style="overflow-x:hidden;"></div>');
};
GuildsScroller.prototype.stop = function() {
    $(".guilds").unwrap().unwrap();
};

GuildsScroller.prototype.update = function() {
};

GuildsScroller.prototype.getName = function() {
    return "Guilds Scrollbar";
};

GuildsScroller.prototype.getDescription = function() {
    return "Adds a scrollbar to guilds/servers list";
};

GuildsScroller.prototype.getVersion = function() {
    return "1.0";
};

GuildsScroller.prototype.getAuthor = function() {
    return "Jiiks";
};

//META{"name":"dblClickEdit"}*//

var dblClickEdit = function () {};

dblClickEdit.prototype.onMessage = function () {
};
dblClickEdit.prototype.onSwitch = function () {
};
dblClickEdit.prototype.start = function () {
    $(document).on("dblclick.dce", function(e) {
        var target = $(e.target);
        if(target.parents(".message").length > 0) {
            var msg = target.parents(".message").first();
            var opt = msg.find(".btn-option");
            opt.click();

            $.each($(".popout .btn-item"), (index, value) => {
                var option = $(value);
                if(option.text() === "Edit") {
                    option.click();
                }
            });

        }
    });
};

dblClickEdit.prototype.load = function () {};
dblClickEdit.prototype.unload = function () {
    $(document).off("dblclick.dce");
};
dblClickEdit.prototype.stop = function () {
    $(document).off("dblclick.dce");
};
dblClickEdit.prototype.getSettingsPanel = function () {
    return "";
};

dblClickEdit.prototype.getName = function () {
    return "Double click edit";
};
dblClickEdit.prototype.getDescription = function () {
    return "Double click messages to edit them";
};
dblClickEdit.prototype.getVersion = function () {
    return "0.1.1";
};
dblClickEdit.prototype.getAuthor = function () {
    return "Jiiks";
};