$(function(){

window.buildPlaceholders = function(dp) {
    var dataPlaceholders;
    if(dp)
            dataPlaceholders = $(dp);
    else
            dataPlaceholders = $("input[placeholder]");
    var l = dataPlaceholders.length,

    // Set caret at the beginning of the input
    setCaret = function (evt) {
        var $this = $(this);
            if (this.value === $this.attr("data-placeholder")) {
                    if(this.setSelectionRange)
                            this.setSelectionRange(0, 0);
                    else {
                            var range = this.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', 0);
                            range.moveStart('character', 0);
                            range.select();
                    }
                    evt.preventDefault();
                    return false;
            }
    },

    // Clear placeholder value at user input
    clearPlaceholder = function (evt) {
        var $this = $(this);
            if (!(evt.shiftKey && evt.keyCode === 16) && evt.keyCode !== 9) {
                if(this.value == 'password' && $this.attr('data-placeholder') == 'password' && $this.hasClass('active')){
                    return;
                }
                if (this.value === $this.attr("data-placeholder")) {
                    $this.val("");
                    $this.addClass("active");
                    if ($this.attr("data-type") === "password") {
                        this.type = "password";
                    }
                }
            }
    },

    restorePlaceHolder = function () {
        var $this = $(this);
            if (this.value.length === 0) {
                    $this.val(this.getAttribute("data-placeholder"));
                    setCaret.apply(this, arguments);
                    $this.removeClass('active');
                    if (this.type === "password") {
                            this.type = "text";
                    }
            }
    };

    function trim(str) {
            var str = str.replace(/^\s\s*/, ''),
                            ws = /\s/,
                            i = str.length;
            while (ws.test(str.charAt(--i)));
            return str.slice(0, i + 1);
    }

    dataPlaceholders.each(function() {
        var $this = $(this),
            val = $this.attr("placeholder");
        $this.attr("data-placeholder", val);
        $this.attr('data-type', this.type);
        $this.removeAttr("placeholder");

        if (this.value.length === 0) {
                $this.val(val);
                if (this.type === "password") {
                        this.type = "text";
                }
        }
        else {
                $this.addClass("active");
        }

        // Apply events for placeholder handling
        $this.bind("focus", setCaret);
        $this.bind("drop", setCaret);
        $this.bind("click", setCaret);
        $this.bind("keydown", clearPlaceholder);
        $this.bind("keyup", restorePlaceHolder);
        $this.bind("blur", restorePlaceHolder);
    });
}

var valFunc = $.fn.val;
$.fn.val = function(a) {
        if(a == undefined && this.length > 0 && this[0].hasAttribute('data-placeholder'))
                return ($(this[0]).is('.active') ? valFunc.call(this) : '');
        else if(a == undefined)
                return valFunc.call(this);
        else
                return valFunc.call(this, a);
}


setTimeout(buildPlaceholders,1);

});