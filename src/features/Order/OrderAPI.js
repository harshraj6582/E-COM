export function createOrder(order) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (!response.ok) {
        // If the response status is not okay, reject with an error message
        throw new Error('FAILED TO POST A ORDER ');
      }

      const data = await response.json();
   
      resolve({ data });
    } catch (error) {
      // If an error occurs during the fetch or JSON parsing, reject with the error
      console.log(error.message)
      reject(error);
    }
  });
}
