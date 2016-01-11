$(function () {
    var message = {

        message: [
      'web development;',
      'playing with code;',
      'watching movies with friends;',
      'javascript, angular, expressjs, nodejs...;',
      'X-Flies;'
    ],
        counterS: 0,
        counterL: 0,
        deleteS: false,

        init: function () {
            this.cacheElem();
            this.type();
        },

        cacheElem: function () {
            this.$text = $('.text');
        },

        type: function () {
            var message = this.message[this.counterS],
                that = this,
                speed = 0;

            message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
            if (this.message[this.counterS] != message && !this.deleteS) {
                this.$text.text(message);
                speed = 90;
            } else {
                this.deleteS = true;
                speed = this.message[this.counterS] == message ? 1000 : 40;
                this.$text.text(message);
                if (message == '') {
                    this.deleteS = false;
                    this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
                }
            }
            setTimeout(function () {
                that.type()
            }, speed);
        }
    };
    message.init();
});

$(document).ready(function () {

    //Initiliaze
    var itemList, item, className, thisItem, newOrder, itemDesc, desc;

    itemList = $('#itemlist');
    item = itemList.children('div');

    itemDesc = $('#itemdescription');
    desc = itemDesc.children('span');

    //Add class name for each item
    item.each(function (index) {

        className = 'item-' + index;

        $(this).addClass(className).attr('data-order', index);

    });

    //Show first item description
    desc.filter(':first-child').fadeIn();

    //On clicked fire animation
    item.on('click', function () {

        thisItem = $(this);
        thisOrder = parseInt(thisItem.attr('data-order')) - 1;

        thisItem.addClass('show');

        //Reorder item position
        item.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {

            thisItem.removeClass().addClass('item-0').attr('data-order', '0');

            //Show selected item description
            desc.hide();
            desc.filter('[data-for=' + thisItem.attr('id') + ']').fadeIn('fast');
        });

        //Move siblings items backward
        window.setTimeout(function () {

            for (var i = thisOrder; i >= 0; i--) {

                //Reorder item position
                movedItem = item.filter('[data-order=' + i + ']');
                newOrder = parseInt(movedItem.attr('data-order')) + 1;
                className = 'item-' + newOrder;

                //Move them with transition
                movedItem.removeClass().addClass('transition ' + className).attr('data-order', newOrder);

                //Remove their transition
                item.on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function () {
                    item.removeClass('transition');
                });
            }
        }, 500);
    });
});