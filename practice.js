let seat = [
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
    ["A", "B", "C", "D", "E", "F"],
]

for(let i=0; i<seat.length; i++){
    const element = seat[i];

    for(let j=0; j<element.length; j++){
        const seatNumber = i +1 + element[j];
        if(seatNumber==="4C" || seatNumber ==="3D")
        {
            console.log("Muhammad Osama you got the seat")
        }
        console.log(seatNumber)
    }
}