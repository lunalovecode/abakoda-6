var r = readline();
 
function subsequence(original, target) {
    var i = 0;
    var j = 0;
    
    while (i < target.length) {
        if (j === original.length) {
            return false;
        }
        
        if (target[i] === original[j]) {
            i++;
        }
        
        j++;
    }
    
    return true;
}
if (subsequence(r, "...---...") === true) {
    print("SOS");
} else {
    print("Hay SOS!");
}