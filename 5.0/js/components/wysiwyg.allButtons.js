/**
 * WYSIWYG all buttons module
 * requires jquery, wysiwyg.advanced.js, and wysiwyg.emoticons.js
 * @author S.A.Taylor
 * @version 5.0
 */
define(['jQuery', '../components/wysiwyg.advanced', '../components/wysiwyg.emoticons'], function(jq,adv,emoti){
    "use strict";

    return {
            /**
             * renders all the buttons
             * appends the advance buttons and emoticons into the container passed in
             * inserts a div.htmlCont that is populated by the allButtons.hbs template after the container div
             * this is so that when we use the View HTML function we hide all the controls except the div.htmlCont
             * @param container
             */
            render : function(container){
                var htmlOptions = ['HTML','table','clear'],
                    $allButtonTemp = Handlebars.getTemplate('allButtons'),
                    $htmlContainer = jq(document.createElement('div'))
                                        .addClass('htmlCont');

                $htmlContainer.append($allButtonTemp(htmlOptions));


                adv.render(container);
                container.append(emoti.render());
                container.after($htmlContainer);


                if(typeof arguments[1] === 'function'){
                    arguments[1].apply(container, Array.prototype.slice.apply(arguments, [2]));
                }
            }
        };
});