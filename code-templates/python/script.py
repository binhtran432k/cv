from collections import Counter


def main():
    _ = int(input())
    xs = map(int, input().split())
    N = int(input())
    xs_map = Counter(xs)
    sum = 0
    for _ in range(N):
        a, b = map(int, input().split())
        if xs_map[a] > 0:
            xs_map[a] -= 1
            sum += b

    print(sum)


if __name__ == "__main__":
    main()
