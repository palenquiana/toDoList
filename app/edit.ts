
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const inputEditCategory = document.getElementById('inputEditCategory') as HTMLInputElement;
const editBtnCategory = document.getElementById('editBtnCategory');

const getCategory = async () => {
    const response = await getCategories();
    const categories = mapToArray(response);
    const category = categories.find(item => item.slug === slug);
     
    inputEditCategory.value = category.slug;

    
// // Edit Button
    
    editBtnCategory.addEventListener("click", (e) => {
        e.preventDefault();

        const modifiedCategory = {
            idDB: category.idDB,
            name: inputEditCategory.value,
            slug: inputEditCategory.value,
        }
        console.log(modifiedCategory);
        
        modifyCategory(category.idDB, modifiedCategory);

    });

}

getCategory();








