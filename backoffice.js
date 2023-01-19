let url = "https://striveschool-api.herokuapp.com/api/product/";


const postProducts = async (product) => {

    try {
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzQxMzAxMDQsImV4cCI6MTY3NTMzOTcwNH0.Qq5T9vIdN9gihqqmoQbd1glvy73rmwHe2syWMMhQ14A"

        },
    });
} catch (error) {
    console.log(error);
}
};

const submitProduct = () => {
    let product = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    brand: document.getElementById("brand").value,
    imageURL: document.getElementById("image-URL").value,
    price: document.getElementById("price").value
    };
    postData(product);
}


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