/**
 * WYSIWYG color module *optional
 * @author S.A.Taylor
 * @version 5.0
 */
define(['jQuery'], function(jq){

    return {
        /**
         * render: grabs the colorList handlebar template, populates it with the given color list
         * returns the populated template
         * @param container
         * @return {*}
         */
        render: function(container){

            var colors = ['white','snow', 'ghostwhite','whitesmoke','floralwhite','aliceblue','azure','lavenderblush','ivory','honeydew','mintcream','beige','lemonchiffon','linen','lightyellow','lightgoldenrodyellow','oldlace', 'seashell','antiquewhite','blanchedalmond','bisque','papayawhip','moccasin','navajowhite','peachpuff','mistyrose','pink','hotpink','deeppink','red','crimson','indianred','firebrick','darkred','maroon','plum','violet', 'palevioletred','mediumvioletred','mediumorchid','mediumpurple','darkorchid','darkviolet','blueviolet','darkmagenta','purple','indigo','lightcyan','paleturquoise','powderblue','lightblue','lightskyblue','skyblue','cyan','aquamarine','turquoise','mediumturquoise','darkturquoise','deepskyblue','dodgerblue','royalblue','cornflowerblue','slateblue','steelblue','cadetblue','darkcyan','teal','blue','mediumblue','darkslateblue','darkblue','navy','midnightblue','palegreen','lightgreen','yellow','greenyellow','chartreuse','lawngreen','lime','springgreen','mediumspringgreen','mediumaquamarine','yellowgreen','darkseagreen','forestgreen','green','darkgreen','olive','darkolivegreen','olivedrab','palegoldenrod','khaki','gold','goldenrod','darkkhaki','darkgoldenrod','sandybrown','lightsalmon','orange','darkorange','darksalmon','coral','chocolate','peru','tan','burlywood','sienna','saddlebrown','brown','lightgray','silver','darkgray','gray','dimgray','lightslategray','slategray','darkslategray','black'],
                $colorTemp = Handlebars.getTemplate('colorList');

            container.append($colorTemp(colors));

            //return $colorTemp(colors);
        }

    }

});