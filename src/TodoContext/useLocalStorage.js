import React from "react";

// Custom Hook
function useLocalStorage (itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000); 
    })
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
  
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    // if a Hook returns up to 2 variables it returns a [],
    // but if returns 3 or more it should returns a {}. Due to conventions
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

// Allows other files to use this Hook.
export { useLocalStorage };