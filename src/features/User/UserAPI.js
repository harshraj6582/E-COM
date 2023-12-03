export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve , reject) => {
    try {
      const response = await fetch('http://localhost:8080/orders/?user.id='+userId)
     
    
  

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


