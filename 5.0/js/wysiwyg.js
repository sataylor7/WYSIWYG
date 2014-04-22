require(['../../libs/jquery.noconflict','../components/wysiwyg.allButtons','../components/wysiwyg.builder'], function(jq, all, wysi){
    var test = jq('.controls'),
        textArea = jq('#myTA'),
        rteWidth = 630,
        rteHeight = 630,
        rteName = 'richTextEditor';

    all.render(test, function(){
        jq(document).on('click', '.controls a, .htmlCont a', function(e){
            e.preventDefault();
            var action = jq(this).attr('data-name'),
                actionName = this.className;
            wysi.command(action,actionName, test);
        });
        jq(document).on('change', '.fontAttributes select', function(){
            var action = this.value,
                actionName = this.className,
                actionId = this.id;
            console.log(actionId);
            wysi.command(action,actionName, actionId);
        })
    });
    wysi.render(textArea, rteWidth, rteHeight, rteName);
});