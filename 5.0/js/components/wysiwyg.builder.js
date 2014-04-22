define(['jQuery'],function(jq){

    /**
     *
     * @type {string}
     */
    var rte = '',
        fontAttr = '',
        viewMode = 1,
        emoticonURL = 'images/emoticons/',
        newURL = window.location.href.split('index.html');
        newURL.pop();

    return{
        /**
         *
         * @param textarea
         * @param w
         * @param h
         * @param name
         */
        render : function(textarea, w, h, name){
            textarea.addClass('hidden');
            var $wysi = jq(document.createElement('iframe'))
                        .attr('id', name)
                        .css('width' , w + 'px')
                        .css('height', h + 'px'),
                $cont = textarea.parent();

            $cont.append($wysi);
            rte = document.getElementById(name);
            rte.contentWindow.document.designMode = 'on';
        },
        /**
         *
         * @param action
         * @param actionName
         * @param id
         */
        command : function(action, actionName, id){
            console.log(action, actionName);
            switch (actionName){
                case 'btn' :
                    rte.contentWindow.document.execCommand(action,"",null);
                break;
                case 'clr' :
                    rte.contentWindow.document.execCommand('foreColor',"",action);
                break;
                case 'lnk' :
                    if(action == 'createLink'){
                        var url = prompt('Please enter the URL (http://example.com)');
                    }
                    rte.contentWindow.document.execCommand(action,"",url);
                break;
                case 'font' :
                    if(id == 'fontName'){
                        fontAttr = 'fontName';
                    }else {
                        fontAttr = 'fontSize';
                    }
                    rte.contentWindow.document.execCommand(fontAttr,"",action);
                break;
                case 'smilies' :
                    var myURL = newURL + emoticonURL + action + '.gif';
                    rte.contentWindow.document.execCommand('insertImage',"",myURL);
                break;
                case 'htm' :
                    if(action == 'clear'){
                        this.clear(rte);
                    }else if(action == 'table'){
                        this.insertTable(rte);
                    }else{
                        this.viewHTML(rte, id);
                    }
                break;

            }
        },
        /**
         *
         * @param frameName
         */
        clear : function(frameName){
            frameName.contentWindow.document.body.innerHTML = '';
        },
        /**
         *
         * @param frameName
         */
        insertTable : function(frameName){
            var row = prompt('How many rows?'),
                columns = prompt('How many columns?'),
                rows = parseInt(row),
                cols = parseInt(columns);

            /**
             *
             * @param win
             * @param insertNode
             * @private
             */
            function _insertNodeAtSelection(win, insertNode){

                var sel = win.getSelection(),
                    range = sel.getRangeAt(0);

                sel.removeAllRanges();
                range.deleteContents();

                var container = range.startContainer,
                    pos = range.startOffset;

                range = document.createRange();

                if (container.nodeType == 3 && insertNode.nodeType == 3) {

                    container.insertData(pos, insertNode.nodeValue);
                    range.setEnd(container, pos + insertNode.length);
                    range.setStart(container, pos + insertNode.length);

                } else {
                    var afterNode;
                    if (container.nodeType == 3) {
                        var textNode = container;
                        container = textNode.parentNode;

                        var text = textNode.nodeValue,
                            textBefore = text.substr(0,pos),
                            textAfter = text.substr(pos),
                            beforeNode = document.createTextNode(textBefore);
                        afterNode = document.createTextNode(textAfter);

                        container.insertBefore(afterNode, textNode);
                        container.insertBefore(insertNode, afterNode);
                        container.insertBefore(beforeNode, insertNode);

                        container.removeChild(textNode);
                    } else {
                        // else simply insert the node
                        afterNode = container.childNodes[pos];
                        container.insertBefore(insertNode, afterNode);
                    }
                    range.setEnd(afterNode, 0);
                    range.setStart(afterNode, 0);
                }
                sel.addRange(range);
            }

            if((rows > 0) && (cols > 0)){
                var table = frameName.contentWindow.document.createElement("table");
                    table.setAttribute("border", "1");
                    table.setAttribute("cellpadding", "2");
                    table.setAttribute("cellspacing", "2");
                var tbody = frameName.contentWindow.document.createElement("tbody");
                for (var i = 0; i < rows; i++) {
                   var tr = frameName.contentWindow.document.createElement("tr");
                    for (var j = 0; j < cols; j++) {
                       var td = frameName.contentWindow.document.createElement("td");
                       var br = frameName.contentWindow.document.createElement("br");
                        td.appendChild(br);
                        tr.appendChild(td);
                    }
                    tbody.appendChild(tr);
                }
                table.appendChild(tbody);
                _insertNodeAtSelection(frameName.contentWindow, table);
            }
        },
        /**
         *
         * @param frameName
         * @param controls
         */
        viewHTML : function(frameName, controls){

            var iHTML, iText;
                if (viewMode != 1) {
                    if(frameName.contentWindow.document.body.innerText){
                        iText = frameName.contentWindow.document.body.innerText;
                    }else{
                        iText = frameName.contentWindow.document.body.textContent;
                    }
                    frameName.contentWindow.document.body.innerHTML = iText;
                    controls.css('display', 'block');
                    frameName.focus();
                    viewMode = 1; // WYSIWYG
                } else {
                    iHTML = frameName.contentWindow.document.body.innerHTML;
                    if(frameName.contentWindow.document.body.innerText){
                        frameName.contentWindow.document.body.innerText = iHTML;
                    }else{
                        frameName.contentWindow.document.body.textContent = iHTML;
                    }
                    controls.css('display', 'none');
                    frameName.focus();
                    viewMode = 2; // Code
                }

        }
    }

});