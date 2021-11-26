let person = [
    {
        'firstName': 'Kishan',
        'lastName': 'Kumar',
        'Office-Address': 'Mumbai'
    },
    {
        'firstName': 'Santosh',
        'lastName': 'Singh',
        'Office-Address': 'New-York'
    },
    {
        'firstName': 'Bobby',
        'lastName': 'Kumar',
        'Office-Address': 'Canada'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("-"+key + " " + val[key]);
}

}