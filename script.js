// const url = "https://striveschool-api.herokuapp.com/api/product/"

// // const options = {
// //     Headers: new Headers({
// //         "Content-type": "application/json",
// //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
// //     }),
// // }

// const getAllProducts = async () => {
//    Headers: new Headers({
//     "Content-type": "application/json",
//     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
//    }) 
//     try {            
//         let res = await fetch (url)
//         let someData = await res.json()
//         console.log(someData)
//         renderProducts(someData)
//     } catch(err) {
//         console.log(err)
//     }

// }
// getAllProducts()

// {  
//     "name": "app test 1", 
//     "description": "somthing longer", 
//     "brand": "nokia", 
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", 
//     "price": 100
//   }

// const postProducts = () => {}

// const response = await fetch ('https://striveschool-api.herokuapp.com/api/product/', {
//     method: 'POST',
//     body: JSON.stringify(postProducts),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
//     })
// })

// fetch ("https://striveschool-api.herokuapp.com/api/product/") , {
//     method: "POST",
//     body: JSON.stringify(myObject),
//     headers: {
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
//     }
// }

// const newEvent = { name, description, time, price }

// const handleNewEvent = async (submitEvent) => {
//       try {
//         submitEvent.preventDefault()
    
//         const name = document.querySelector("#eventName").value
//         const description = document.querySelector("#eventDescription").value
//         const time = document.querySelector("#eventTime").value
//         const price = document.querySelector("#eventPrice").value
//         const newEvent = { name, description, time, price }
//         const options = {
//           method: "POST", //we want to create
//           body: JSON.stringify(newEvent), //what we are sending
//           headers: new Headers({
//             "Content-Type": "application/json", //this is the language we are speaking!
//           }),
//         }
//         let res = await fetch(url, options)
//         if(res.ok) {
//           successAlert()
    
//         } else {
//           console.log(res)
    
//           throw res.status + " " + res.statusText
//         }
//       } catch (error) {
//         handleError(error)
//       }
//     }

//     fetch ('https://striveschool-api.herokuapp.com/api/product/', {
//     method: 'POST',
//     body: JSON.stringify(postProducts),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
//     })
// })



// function submit () {
//     const name = document.getElementById("name").value;
//     const description = document.getElementById("description").value;
//     const brand = document.getElementById("brand").value;
//     const imageURL = document.getElementById("image-URL").value;
//     const price = document.getElementById("price").value;

//     const product = {
//         "name": "app test 1", 
//         "description": "somthing longer", 
//         "brand": "nokia", 
//         "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", 
//         "price": 100
//     };

   
// }