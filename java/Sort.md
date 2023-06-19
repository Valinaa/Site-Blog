---
title: 十大经典排序算法
description: 本文将介绍十种经典的排序算法, 并提供Java实现代码和详细解析
readingTime: true  # 单独设置是否展示文章的预计阅读时间
comment: true  # 单独为某篇文章设置是否开启评论
date: 2023-06-03  # 单独设置文章的发布时间
tag:
    - Java  # 用于按标签给文章分类
tags:
    - 算法  # 用于按标签给文章分类
sticky: 6  # 设置在首页展示的精选文章, 值越大展示越靠前
top: 4  # 设置在首页置顶展示的文章, 值越小越靠前
recommend: 3  # 设置文章左侧展示的推荐文章顺序, 值越小越靠前
---

## 1. 冒泡排序(Bubble Sort)

> 冒泡排序是一种简单直观的排序算法. 它重复地遍历待排序的元素, 比较相邻两个元素的大小, 并交换它们的位置, 使较大的元素逐渐向右移动到正确的位置

```java
public class BubbleSort {
    public static void bubbleSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // 交换位置
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}
```

> 冒泡排序每次比较相邻两个元素, 如果它们的顺序错误, 就交换它们的位置, 直到整个数组排序完成. 外层循环控制需要比较的轮数, 内层循环在每一轮中进行相邻元素的比较和交换操作.

## 2. 选择排序(Selection Sort)

> 选择排序是一种简单直观的排序算法. 它将数组分为已排序和未排序两部分, 每次从未排序部分选取最小的元素, 并与未排序部分的第一个元素交换位置, 逐步将未排序部分的最小元素放到已排序部分的末尾

```java
public class SelectionSort {

    public static void selectionSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            // 交换位置
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
}
```

> 选择排序每次从未排序部分选择最小的元素, 然后与未排序部分的第一个元素交换位置, 将最小元素逐步放到已排序部分的末尾. 外层循环控制需要选择的元素位置, 内层循环在每一轮中找到最小元素的索引, 并进行交换操作

## 3. 插入排序(Insertion Sort)

> 插入排序是一种简单直观的排序算法. 它将数组分为已排序和未排序两部分, 每次从未排序部分选取一个元素插入到已排序部分的正确位置, 逐步构建有序序列

```java
public class InsertionSort {
    public static void insertionSort(int[] array) {
        int n = array.length;
        for (int i = 1; i < n; i++) {
            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }
}
```

> 插入排序从第二个元素开始, 将其与前面的已排序部分进行比较, 如果比前面的元素小, 则将前面的元素后移, 直到找到合适的位置插入. 外层循环控制需要插入的元素位置, 内层循环在每一轮中将元素与已排序部分进行比较和移动.

## 4. 希尔排序(Shell Sort)

> 希尔排序是一种改进的插入排序算法, 也称为缩小增量排序. 它将数组分组进行插入排序, 每次缩小增量, 直到增量为1, 完成最后一次插入排序.

```java
public class ShellSort {
    public static void shellSort(int[] array) {
        int n = array.length;
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int key = array[i];
                int j = i;
                while (j >= gap && array[j - gap] > key) {
                    array[j] = array[j - gap];
                    j -= gap;
                }
                array[j] = key;
            }
        }
    }
}
```

> 希尔排序将数组按照一定增量分组进行插入排序, 每次缩小增量直到增量为1, 完成最后一次插入排序. 通过多次插入排序, 可以将较大的元素移动到较远的位置, 从而加快整体排序的速度.

## 5. 归并排序(Merge Sort)

> 归并排序是一种采用分治策略的排序算法. 它将数组递归地分成两个子数组, 分别进行排序, 然后将两个有序子数组合并为一个有序数组.

```java
public class MergeSort {
    public static void mergeSort(int[] array) {
        int n = array.length;
        if (n > 1) {
            int mid = n / 2;
            int[] left = Arrays.copyOfRange(array, 0, mid);
            int[] right = Arrays.copyOfRange(array, mid, n);
            mergeSort(left);
            mergeSort(right);
            merge(array, left, right);
        }
    }

    private static void merge(int[] array, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                array[k++] = left[i++];
            } else {
                array[k++] = right[j++];
            }
        }
        while (i < left.length) {
            array[k++] = left[i++];
        }
        while (j < right.length) {
            array[k++] = right[j++];
        }
    }
}
```

> 归并排序采用分治策略, 将数组递归地分成两个子数组, 分别进行排序, 然后将两个有序子数组合并为一个有序数组.merge()函数用于将两个有序子数组合并.

## 6. 快速排序(Quick Sort)

> 快速排序是一种常用的排序算法. 它采用分治策略, 选择一个基准元素将数组分为两部分, 使得左边的元素都小于等于基准元素, 右边的元素都大于等于基准元素, 然后对左右两部分分别进行快速排序.

```java
public class QuickSort {
    public static void quickSort(int[] array) {
        quickSort(array, 0, array.length - 1);
    }

    private static void quickSort(int[] array, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(array, low, high);
            quickSort(array, low, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, high);
        }
    }

    private static int partition(int[] array, int low, int high) {
        int pivot = array[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (array[j] <= pivot) {
                i++;
                // 交换位置
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        // 交换位置
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
}
```

> - 快速排序采用分治策略, 选择一个基准元素将数组分为两部分, 使得左边的元素都小于等于基准元素, 右边的元素都大于等于基准元素, 然后对左右两部分分别进行快速排序.
> - partition()函数用于确定基准元素的位置, 并将数组分为两部分.

## 7. 堆排序(Heap Sort)

> 堆排序是一种利用堆数据结构进行排序的算法. 它利用最大堆(或最小堆)的性质, 每次从堆顶取出最大(或最小)元素, 并调整堆结构, 重复此过程直到排序完成.

```java
public class HeapSort {
    public static void heapSort(int[] array) {
        int n = array.length;
        // 构建最大堆
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(array, n, i);
        }
        // 从堆顶取出元素,调整堆结构
        for (int i = n - 1; i >= 0; i--) {
            int temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            heapify(array, i, 0);
        }
    }

    private static void heapify(int[] array, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        if (left < n && array[left] > array[largest]) {
            largest = left;
        }
        if (right < n && array[right] > array[largest]) {
            largest = right;
        }
        if (largest != i) {
            int temp = array[i];
            array[i] = array[largest];
            array[largest] = temp;
            heapify(array, n, largest);
        }
    }
}
```

> 堆排序利用最大堆(或最小堆)的性质, 首先构建最大堆, 然后将堆顶元素与最后一个元素交换位置, 调整堆结构, 重复此过程直到排序完成.heapify()函数用于调整堆结构.

## 8. 计数排序(Counting Sort)

> 计数排序是一种非比较型的排序算法. 它通过统计元素出现的次数, 计算出每个元素的位置, 从而实现排序.

```java
public class CountingSort {
    public static void countingSort(int[] array) {
        int n = array.length;
        if (n <= 1) {
            return;
        }
        int max = array[0], min = array[0];
        for (int i = 1; i < n; i++) {
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
        int range = max - min + 1;
        int[] count = new int[range];
        for (int i = 0; i < n; i++) {
            count[array[i] - min]++;
        }
        for (int i = 1; i < range; i++) {
            count[i] += count[i - 1];
        }
        int[] sorted = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            sorted[--count[array[i] - min]] = array[i];
        }
        System.arraycopy(sorted, 0, array, 0, n);
    }
}
```

> - 计数排序通过统计元素出现的次数, 计算出每个元素的位置
> - 从而实现排序. 首先找出数组中的最大值和最小值, 然后创建一个计数数组, 统计每个元素出现的次数
> - 接下来, 将计数数组累加, 得到每个元素的位置信息. 最后, 根据计数数组的信息, 将元素放置到正确的位置上

## 9. 桶排序(Bucket Sort)

> 桶排序是一种非比较型的排序算法. 它将元素分配到不同的桶中, 每个桶内部使用其他排序算法(如插入排序或快速排序)进行排序, 然后按顺序将每个桶的元素合并.

```java
import java.util.ArrayList;
import java.util.Collections;

public class BucketSort {
    public static void bucketSort(int[] array, int bucketSize) {
        if (array.length <= 1) {
            return;
        }
        int min = array[0], max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            } else if (array[i] > max) {
                max = array[i];
            }
        }
        int bucketCount = (max - min) / bucketSize + 1;
        ArrayList<ArrayList<Integer>> buckets = new ArrayList<>(bucketCount);
        for (int i = 0; i < bucketCount; i++) {
            buckets.add(new ArrayList<>());
        }
        for (int i = 0; i < array.length; i++) {
            int bucketIndex = (array[i] - min) / bucketSize;
            buckets.get(bucketIndex).add(array[i]);
        }
        int k = 0;
        for (int i = 0; i < bucketCount; i++) {
            if (bucketSize == 1) {
                for (int j = 0; j < buckets.get(i).size(); j++) {
                    array[k++] = buckets.get(i).get(j);
                }
            } else {
                if (bucketCount == 1) {
                    bucketSize--;
                }
                ArrayList<Integer> bucket = buckets.get(i);
                if (bucket.size() > 0) {
                    int[] temp = new int[bucket.size()];
                    for (int j = 0; j < bucket.size(); j++) {
                        temp[j] = bucket.get(j);
                    }
                    bucketSort(temp, bucketSize);
                    for (int j = 0; j < temp.length; j++) {
                        array[k++] = temp[j];
                    }
                }
            }
        }
    }
}
```

> - 桶排序将元素分配到不同的桶中, 每个桶内部使用其他排序算法(如插入排序或快速排序)进行排序, 然后按顺序将每个桶的元素合并. 首先确定桶的数量, 将元素分配到对应的桶中.
> - 如果每个桶只包含一个元素, 则可以直接将元素放入对应位置. 如果每个桶内部有多个元素, 则使用其他排序算法对每个桶进行排序, 然后按照桶的顺序将元素合并.

## 10. 基数排序(Radix Sort)

> 基数排序是一种非比较型的排序算法. 它根据元素的位数进行排序, 从低位到高位依次进行, 每次按照当前位数的值将元素分配到不同的桶中, 然后按照桶的顺序合并元素.

```java
import java.util.Arrays;

public class RadixSort {
    public static void radixSort(int[] array) {
        if (array.length <= 1) {
            return;
        }
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        int maxDigit = 0;
        while (max != 0) {
            max /= 10;
            maxDigit++;
        }
        int mod = 10;
        int dev = 1;
        for (int i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
            int[][] counter = new int[mod * 2][0];
            for (int j = 0; j < array.length; j++) {
                int bucket = ((array[j] % mod) / dev) + mod;
                counter[bucket] = Arrays.copyOf(counter[bucket], counter[bucket].length + 1);
                counter[bucket][counter[bucket].length - 1] = array[j];
            }
            int pos = 0;
            for (int[] bucket : counter) {
                for (int value : bucket) {
                    array[pos++] = value;
                }
            }
        }
    }
}
```

> 基数排序根据元素的位数进行排序, 从低位到高位依次进行. 首先找出数组中的最大值, 确定最大值的位数. 然后使用模运算和除法运算将元素分配到不同的桶中, 桶的数量为模的值的两倍. 按照桶的顺序将元素合并, 重复此过程直到排序完成.
