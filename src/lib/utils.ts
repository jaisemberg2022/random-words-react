export function getRandomItem(arr: any[]){
    const randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex];
}
