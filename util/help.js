function help_me() {

    //{type:"Checking",
    // info:"My Grandson says i need one a them credit cards",
    // customer_id:25,
    // ambassador_id:37,
    // finished:false,
    // rating:3,
    // notes:"Needed a credit card"}


    var help = [];

    this.get_next = function () {
        if (help.length > 0){
            return help.pop();
        } else {
            return null;
        }

    };

    this.get_in_line = function (add_me) {
        help.unshift(add_me);
    };

    this.get_all = function (){
        return help;
    };

    this.update_issue = function (iss) {
        for (var i = 0; i < help.length; i++){
            if (help[i] == iss.customer_id){
                help[i] = iss;
                return true;
            }
        }
        return false;

    };
}

module.exports = help_me;