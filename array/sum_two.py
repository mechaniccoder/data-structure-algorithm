# 모든 요소의 합을 루프를 돌면서 계산한다.
# 첫 루프는 0 ~ n-1, 두번째 루프는 1 ~ n까지 돌아야한다.
# 시간복잡도: O(n^2) / 공간복잡도 O(1)

def brute_force(nums, target):
	for i in range(0, len(nums)):
		for j in range(i+1, len(nums)):
			if (nums[i] + nums[j] == target):
				return [i, j]
print('brute force', brute_force([2,3,4,5], 9))

# 방문한 요소를 키값으로 하고 인덱스를 value 값으로 하는 해시맵을 활용한다.
# 시간복잡도: O(n) / 공간복잡도: O(n)
def hash_map(nums, target):
	hashtable = {}

	for i in range(0, len(nums)):
		val = target - nums[i]
		if hashtable.get(val) is not None:
			return sorted([i, hashtable[val]])
		else:
			hashtable[nums[i]] = i

print("hash_map", hash_map([2,3,4,5], 9))
