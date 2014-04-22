/**
 * WYSIWYG advanced module
 * requires jquery, wysiwyg.basic.js, and wysiwyg.colors.js
 * @author S.A.Taylor
 * @version 5.0
 */
define(['jQuery', '../components/wysiwyg.basic', '../components/wysiwyg.colors'], function(jq, basic, color){
        "use strict";
        return{
            /**
             * populates the advancedButtons template with the buttons obj
             * @param container
             */
            render : function(container){
                var buttons = {
                    'fontName' : ['Arial','Arial Black','Arial Narrow','Century Gothic','Copperplate','Courier','Georgia','Helvetica','Impact','Lucida Console','Monaco','Tahoma','Times New Roman','Trebuchet MS'],
                    'fontSize' : ['1','2','3','4','5','6','7'],
                    'links' : ['createLink','unLink']
                    },
                    $advancedTemp = Handlebars.getTemplate('advancedButtons');

                basic.render(container);
                container.append($advancedTemp(buttons));
                color.render(container);

                if(typeof arguments[1] == 'function'){
                    arguments[1].apply(container, Array.prototype.slice.apply(arguments, [2]));
                }
            }
        }
});