
 // node js 

 //    js    js engine               V8

 /////////////////////////////////////////////////////////////////////////////////////////

 // 1- core modules 

    const fs = require("fs")

    // fs.writeFileSync( "data1.txt" , "islam mohamed" )

    // console.log(fs.readFileSync("data1.txt").toString())

    // fs.appendFileSync("data1.txt" , " /  mohamed essam")

    // console.log(fs.readFileSync("data1.txt").toString())

////////////////////////////////////////////////////////////////////////////////////////

 
//   const x = require("./allData")

//   console.log(x.fname)
//   console.log(x.lname)
//   console.log(x.city)
//   console.log(x.fun1(8,6))

//////////////////////////////////////////////////////////////////////////////////////////////////

 // NPM   Node package manager :

//    const  validator = require("validator")

// //    console.log(validator.isEmail("ahmed"))

// console.log(validator.isEmail("ahmed@gmail.com"))

///////////////////////////////////////////////////////////////////////////////////////////////////////

   // object   =>   json 
   
//  process.argv  [ 0 , 1 ]  [URL  for node installed , URL for app ]

//  console.log(process.argv)

//  console.log(process.argv[2])

///////////////////////////////////////////////////////////////////////////////////////////////////////

//   const x = process.argv[2]

//  if (x === "add"){
//    console.log("you have added an item")
//  } else if (x === "delete"){
//    console.log("you have deleted an item")
//  } else {
//    console.log("ERROR")
//  }

// console.log(process.argv)

   ////////////////////////////////////////////////////////////////////////////////////////

   const  yargs = require("yargs")
   // console.log(yargs.argv)

   // yargs.command({
   //     command : "add" ,
   //     describe : " to add an item",
   //     handler : ()=> {
   //        console.log("you have already added an item")
   //     }
   // })

   // console.log(yargs.argv)

   const data10 = require("./data10")
const { type } = require("os")

    yargs.command({
       command : "add" ,
       describe : " to add an item",
       builder : {
         fname : {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         lname : {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }
       },
       handler :(x)=> {
         //  console.log("you have already added an item")
         // console.log(x.fname , x.lname)
         data10.addPerson(x.id , x.fname , x.lname , x.city , x.age)


       }
   })

   // console.log(yargs.argv)

   // yargs.parse()   // handler only 


   yargs.command({
      command : "delete",
      describe: "to delete an item",
      handler : (x)=> {
         // console.log("you have already deleted an item")
         data10.deleteData(x.id)
      }
   })


   ////////////////////////////////////////////////////////////////

   yargs.command ({
      command : "read",
      describe : "to read an item",
      builder : {
         id : {
            describe : "this is id desc in read command ",
            demandOption : true,
            type: "string"
         }
      },
      handler: (x) => {
         data10.readData(x.id)
      }

   })

///////////////////////////////////////////////////////////////////////////////////////

   yargs.command ({
      command : "list",
      describe : "to list data",
      handler : () =>{
         data10.listData()
      }
   })

   yargs.parse()
   // console.log(yargs.argv)


//   const  person1 = {
//       fname : "islam",
//       lname : "mohamed",
//       city : "mansoura"
//   }

// //   console.log(person1.city)


//     const person1Json = JSON.stringify(person1)

//     console.log(person1Json)

//     const person1Obj = JSON.parse(person1Json)

//      console.log(person1Obj)

//      fs.writeFileSync("data10.json" , person1Json)


