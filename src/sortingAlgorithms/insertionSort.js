export function insertionSort(array) {

    const animations = [];
    const arr = [...array];

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {

            animations.push([j, j + 1, "compare"]);

            animations.push([
                j + 1,
                arr[j],
                "swap"
            ]);

            arr[j + 1] = arr[j];

            animations.push([j, j + 1, "revert"]);

            j--;
        }

        arr[j + 1] = key;

        animations.push([
            j + 1,
            key,
            "swap"
        ]);
    }

    return animations;
}