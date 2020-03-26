const Util = {
    inherits(parentClass, childClass) {
        function Surrogate() { };
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },
};

module.exports = Util;