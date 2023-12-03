export function addToCart(item) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (!response.ok) {
        // If the response status is not okay, reject with an error message
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      console.log('This is API TESTING 2');
      resolve({ data });
    } catch (error) {
      // If an error occurs during the fetch or JSON parsing, reject with the error
      reject(error);
    }
  });
}

// Fetch Items By User Id and Password 


export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve , reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart?user='+userId)
     
    
  

      if (!response.ok) {
        // If the response status is not okay, reject with an error message
        throw new Error('Failed to fetch ItemsByUserId cart');
      }

      const data = await response.json();
      
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}


// UPDATE 

export function updateItem(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart/' +update.id, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (!response.ok) {
        // If the response status is not okay, reject with an error message
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      
      resolve({ data });
    } catch (error) {
      // If an error occurs during the fetch or JSON parsing, reject with the error
      reject(error);
    }
  });
}


///// DELETE ITEM FROM CART 



export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart/'+itemId, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      });

  

      const data = await response.json();
      console.log("COUNTER 1 ")

      resolve({ data: { id: itemId } });
    } catch (error) {
      // If an error occurs during the fetch or JSON parsing, reject with the error
      reject(error);
    }
  });
}




export function resetCart(userId) {
  // Get All the Items of the Users cart and then Delete Each of them

  return new Promise(async (resolve)=>{
    const response = await fetchItemsByUserId(userId);
    const items = response.data ;
    for(let item of  items){
      await deleteItemFromCart(item.id)
    }
    resolve({status : 'Success'})
  })
 
}


