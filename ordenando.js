// Função swap
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// Função shuffle
const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
        let j = Math.floor(Math.random() * arr.length);
        let k = Math.floor(Math.random() * arr.length);
        swap(arr, j, k);
    }
};

// Função bubble_sort
const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// Função selection_sort
const selection_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, i, min);
        }
    }
    return arr;
};

// Função particionamento
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// Função quick_sort
const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};
