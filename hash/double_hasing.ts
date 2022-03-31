/**
 * * 이중해시법 (double hasing)
 * * 이중해시법은 해시함수를 2개를 가지고 있다.
 * * 만약 첫번째 해시함수의 결과에서 충돌이 발생하면 두번째 해시함수와 첫번째 해시함수의 값을 더해서
 * * 새로운 테이블 주소를 얻어낸다.
 *
 * * 다음 테이블 주소 계산식
 * * h'(k) = C - (k mod C)
 * * h(k) -> h(k) + h'(k) -> h(k) + 2h'(k) -> h(k) + 3h'(k) -> h(k) + 4h'(k)
 *
 * * 여기서 포인트는 테이블의 주소가 소수여야 된다는 점이다.
 * * 소수가 아닐 경우, 순환해서 같은 키 값들만을 탐색하기 때문이다.
 * * 에를 들어서, 테이블의 크기가 6, C=5, 키값이 13라고 해보자. 이를 계속 나눈 나머지는 다음과 같다.
 * * 1, 3, 5, 1, 3, 5
 * * 이런 특성때문에 테이블 주소는 소수이다.
 */

const hashTableSize = 10;
const hashTable = Array(hashTableSize).fill(null);

function hash1(key: number) {
  return key % hashTableSize;
}

function hash2(key: number) {
  return 5 - (key % 5);
}

function doubleHasingAdd(key: number, value: number) {
  const hashValue = hash1(key);
  let i = hashValue;
  let inc = hash2(key);
  while (hashTable[i]) {
    if (hashTable[i] === value) {
      console.log("중복");
      return;
    }

    i = (i + inc) % hashTableSize;

    if (hashValue === i) {
      console.log("테이블 가득참");
      return;
    }
  }

  hashTable[i] = value;
}

export {};
