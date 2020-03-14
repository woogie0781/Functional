function _filter(list, predi) { //응용형 프로그래밍 => 함수가 함수를 인자로 받아 원하는 시점에 인자로 받은 함수를 적용하는 것.
    var new_list = [];
    _each(list, function(val) {
        if (predi(val))
            new_list.push(val)
    })
    return new_list;
};

function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val))
    })
    return new_list;
}

function _each(list, iter) {
    for (var i=0; i < list.length; i++) {
        iter(list[i]);
    }
    return list;
}