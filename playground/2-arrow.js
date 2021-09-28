// const square = (x)=>x*x

// console.log(square(18));

const eventName ={
    name:'birthday party',
    guestList:['johny','madhu','rubel'],
    printGuestList(){
        console.log('Guest list for '+this.name)
        this.guestList.forEach((guest)=>{
              console.log(guest+" is attending "+this.name);  
        })
    }
}

eventName.printGuestList()