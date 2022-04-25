var r = readline();
 
if (r.substring(0, 9) === "...---..." || r.slice(-9) === "...---...") {
    print("SOS")
} else {
    print("Hay SOS!")
}