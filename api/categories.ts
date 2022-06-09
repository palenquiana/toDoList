const addCategory = async (newCategory)=>{
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    }
   await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/categories.json',option)
}

const deleteCategory = async (category) => {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    }
   await fetch(`https://todolist-d34a7-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}



const getCategories = async () => {
    const response = await fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/categories.json');
    const data = await response.json();
    return data;    
  }


const modifyCategory = async (category, modifiedCategory) => {
  const option = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(modifiedCategory)
  }
  await fetch(`https://todolist-d34a7-default-rtdb.firebaseio.com/categories/${category}.json`,option)
}


  const mapToArray = (object: any) => {
    const array = [];
  
    for (const elem in object) {
      array.push({
        ...object[elem],
        idDB: elem,
      });
    }
    return array;
  };


// const getCategories = () => { 
//     fetch('https://todolist-d34a7-default-rtdb.firebaseio.com/categories.json')
//     .then(response => response.json())
//     .then(data => {
//      return data;
//     })
// }
  

    




