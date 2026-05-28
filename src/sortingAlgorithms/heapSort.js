export function heapSort(array) {

    const animations = [];
    const arr = [...array];

    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i, animations);
    }

    for (let i = n - 1; i > 0; i--) {

        animations.push([
            0,
            arr[i],
            "swap"
        ]);

        animations.push([
            i,
            arr[0],
            "swap"
        ]);

        [arr[0], arr[i]] =
            [arr[i], arr[0]];

        heapify(arr, i, 0, animations);
    }

    return animations;
}

function heapify(
    arr,
    n,
    i,
    animations
) {

    let largest = i;

    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n) {

        animations.push([largest, left, "compare"]);
        animations.push([largest, left, "revert"]);

        if (arr[left] > arr[largest]) {
            largest = left;
        }
    }

    if (right < n) {

        animations.push([largest, right, "compare"]);
        animations.push([largest, right, "revert"]);

        if (arr[right] > arr[largest]) {
            largest = right;
        }
    }

    if (largest !== i) {

        animations.push([
            i,
            arr[largest],
            "swap"
        ]);

        animations.push([
            largest,
            arr[i],
            "swap"
        ]);

        [arr[i], arr[largest]] =
            [arr[largest], arr[i]];

        heapify(arr, n, largest, animations);
    }
}