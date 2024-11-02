import { toast } from "react-toastify";

const getStoredReadlist = () => {


    const storedListrs = localStorage.getItem('read-list');
    if (storedListrs) {
        const storedList = JSON.parse(storedListrs);
        return storedList;
    }
    else {
        return [];
    }
}

// const getstoredWiselist =()=>{

// }



const addToStoredreadlist = (id) => {
    const storedList = getStoredReadlist();

    if (storedList.includes(id)) {
        console.log(id, 'already exit');

    }
    else {
        storedList.push(id);
        const storedListrs = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListrs);
        toast('this book is added to your read list')
    }
}

// const getStoredWiselist = () => {
//     const storedWiseList = localStorage.getItem('wise-list');
//     if (storedWiseList) {
//         const storedWiseListstr = JSON.parse(storedListrs);
//         return storedWiseListstr;
//     }
//     else {
//         return [];
//     }

// }
// const addtoStotewiselist=(id)=>{
//     const storedList = getStoredWiselist();
//     if (storedList.includes(id)) {
//         console.log(id, 'already exit');
        
//     }
//     else{
//         storedList.push(id);
//         const storedListstr = JSON.stringify(storedList);
//         localStorage.setItem('wise-list',storedListstr)
//     }
// }


export { addToStoredreadlist, getStoredReadlist } 