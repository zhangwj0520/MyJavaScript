var utils=(function () {
    function unique(ary) {
        var newAry=[];
        for (var i = 0; i < ary.length; i++) {
            var cur=ary[i];
            if(newAry.indexOf(cur)===-1){
                newAry.push(cur);
            }
        }
        return newAry;
    }
    function sort() {

    }

    return {
        unique,
        sort,
    }

})()


