define(['jQuery', '../components/wysiwyg.advanced', '../components/wysiwyg.emoticons'], function(jq,adv,emoti){

    return {
            /**
             *
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


                if(typeof arguments[1] == 'function'){
                    arguments[1].apply(container, Array.prototype.slice.apply(arguments, [2]));
                }
            }
        }
});