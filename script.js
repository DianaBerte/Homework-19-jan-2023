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

const postProducts = () => {}

fetch ("https://striveschool-api.herokuapp.com/api/product/") , {
    method: "POST",
    body: JSON.stringify(myObject),
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"
    }


}