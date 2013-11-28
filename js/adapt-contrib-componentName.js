define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var ComponentName = ComponentView.extend({
        
        postRender: function() {
            console.log("rendering");
            this.setReadyStatus();
            this.setCompletionStatus();
        }
        
    });
    
    Adapt.register("componentName", ComponentName);
    
});