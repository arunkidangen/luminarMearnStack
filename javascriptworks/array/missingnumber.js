var arr = [1, 2, 3, 4, 5, 6, 7,8,9 ,10,12]

for (let i = 0; i <arr.length; i++) {
  if (arr[i+1] - arr[i] >1) {
            console.log((arr[i+1] + arr[i] )/2);       
    }
}