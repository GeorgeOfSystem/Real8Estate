const useLocalStorage = (key: string) => {
  const setItem = (value: any) => {
    try {
      const items = window.localStorage.getItem(key);
      const allItems = items ? JSON.parse(items) : [];
      if (!allItems.includes(value)) {
        allItems.push(value);
      }
      window.localStorage.setItem(key, JSON.stringify(allItems));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  /*const addItem = (value: object) => {
    try {
      const item = window.localStorage.getItem(key);
      const allItems = item ? JSON.parse(item) : {};
      
      window.localStorage.setItem(key, JSON.stringify([...allItems,value]));
    } catch (error) {
      console.log("error: ", error);
    }
  };*/

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return {
    setItem,
    getItem,
    //addItem
  };
};

export default useLocalStorage;
