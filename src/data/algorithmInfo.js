const algorithmInfo = {

    "Bubble Sort": {

        description: [
            "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.",

            "After every iteration, the largest element moves to the end like a bubble rising upward."
        ],

        steps: [
            "Compare adjacent elements",
            "Swap if left element is larger",
            "Repeat until sorted"
        ],

        complexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
        }
    },



    "Merge Sort": {

        description: [
            "Merge Sort uses divide and conquer.",

            "It recursively divides the array into smaller halves and merges them back in sorted order."
        ],

        steps: [
            "Divide array into halves",
            "Recursively sort both halves",
            "Merge sorted halves"
        ],

        complexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)"
        }
    },



    "Quick Sort": {

        description: [
            "Quick Sort selects a pivot element.",

            "Elements smaller than pivot move left and larger move right."
        ],

        steps: [
            "Choose pivot",
            "Partition array",
            "Recursively sort subarrays"
        ],

        complexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n²)"
        }
    },



    "Selection Sort": {

        description: [
            "Selection Sort repeatedly finds the minimum element.",

            "It places the minimum element at the beginning."
        ],

        steps: [
            "Find minimum element",
            "Swap with current position",
            "Repeat for remaining array"
        ],

        complexity: {
            best: "O(n²)",
            average: "O(n²)",
            worst: "O(n²)"
        }
    },



    "Insertion Sort": {

        description: [
            "Insertion Sort builds the sorted array one element at a time.",

            "Each new element is inserted into its correct position."
        ],

        steps: [
            "Pick next element",
            "Shift larger elements",
            "Insert element at correct position"
        ],

        complexity: {
            best: "O(n)",
            average: "O(n²)",
            worst: "O(n²)"
        }
    },



    "Heap Sort": {

        description: [
            "Heap Sort uses a binary heap data structure.",

            "Largest element is repeatedly removed from heap."
        ],

        steps: [
            "Build max heap",
            "Swap root with last element",
            "Heapify remaining heap"
        ],

        complexity: {
            best: "O(n log n)",
            average: "O(n log n)",
            worst: "O(n log n)"
        }
    }
};

export default algorithmInfo;