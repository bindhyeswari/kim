document.addEventListener('DOMContentLoaded', function(){
    var trs = document.getElementById('CompanylistResults').firstElementChild.children;

    // console.log(trs.length - 1);

    var companies = [];
    for ( var i = 1, len = trs.length; i < len; i += 2 ) {
        var td = trs[i].firstElementChild;
        if (td.firstElementChild) {
            //console.log(td.firstElementChild.innerHTML);
            companies.push(td.firstElementChild.innerHTML);
        } else {
            //console.log(td.innerHTML);
            companies.push(td.innerHTML);
        }
        // console.log(trs.firstElementChild.innerHTML);
    }

    console.log(companies.length);

    // Array prototype map method

    var squares = [1,2,3,4,5,6,7,8,9].map(function(elem){
        return elem * elem;
    });
    console.log(squares);


    // Do the above coding using Array.prototype.map and .call method

    var filtered = Array.prototype.filter.call(trs, function(elem, index){
        return index % 2 === 1;
    });

    var companies_mapped = filtered.map(function(tr){
        var td = tr.firstElementChild;
        if( td.firstElementChild ) {
            return td.firstElementChild.innerHTML;
        } else {
            return td.innerHTML;
        }
    });
    console.log(companies_mapped);

    // js perf test on both techniques


});