/**
 * WYSIWYG emoticon module *optional
 * @author S.A.Taylor
 * @version 5.0
 */
define(['jQuery'], function(jq){

    return{
        /**
         * populates the emoticons template with the emoticons array
         * returns the populated template
         * @param container
         * @returns {*}
         */
        render: function(container){
            var emoticons =['happyEyesClosed','inlove','stonedHappy','yawn','sleepy','scared','meh','oddHappy','surprised','superHappy','tongueOut','evilGrin','mad','sunglasses','crying','blush', 'sad','money','dissappointed'],
                $emoticonTemp = Handlebars.getTemplate('emoticons');

            //container.append($emoticonTemp(emoticons));
            return $emoticonTemp(emoticons);

        }
    }

});
