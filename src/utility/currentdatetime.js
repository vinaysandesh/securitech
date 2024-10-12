const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  export default getCurrentDate;