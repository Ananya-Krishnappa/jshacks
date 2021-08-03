String.prototype.DoSomeThing = function() {
    var self=this;
    var printThis = function() {
        console.log(global);
        console.log(this);
        console.log(self);
    }
    printThis();
}


String.prototype.DoSomeThingArrow = function() {
    var printThis = () => {
        console.log(this);
    }
    printThis();
}

"Hello".DoSomeThing();
"Hello".DoSomeThingArrow();