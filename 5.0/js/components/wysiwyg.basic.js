/**
 * WYSIWYG basic module
 * requires jquery
 * @author S.A.Taylor
 * @version 5.0
 */
define(['jQuery'], function(jq){
    "use strict";
    return{
        /**
         * populates the basicButtons template
         * returns the populated template
         * @param container
         * @returns {*}
         */
        render : function(container){
           var basic = ['bold','italic','underline','strikethrough','superscript','subscript','justifyLeft','justifyCenter','justifyRight','justifyFull', 'outdent', 'indent','insertUnorderedList','insertOrderedList','inserthorizontalrule','removeFormat'],
               $basicTemp = Handlebars.getTemplate('basicButtons');

           container.append($basicTemp(basic));

            if(typeof arguments[1] == 'function'){
                arguments[1].apply(container, Array.prototype.slice.apply(arguments, [2]));
            }
        }
    }
});