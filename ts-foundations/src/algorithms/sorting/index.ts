// src/algorithms/sorting/index.ts

export function bubbleSort(arr: number[]): number[] {
	const n = arr.length;
	let swapped: boolean;

	do {
		swapped = false;
		for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

export function quickSort(arr: number[]): number[] {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const left: number[] = [];
	const right: number[] = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}