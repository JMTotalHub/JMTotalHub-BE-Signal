import { createClient } from 'redis';

export class RedisManger {
  constructor() {
    this.pub = createClient({
      url: `redis://${process.env.REDIS_URL}:${process.env.REDIS_PORT}`,
      password: process.env.REDIS_PASSWORD,
      legacyMode: false,
    });

    this.sub = this.pub.duplicate();
  }

  // 나중에 소캣 연결 끊길 시,
  // 소캣에서 레디스 pub으로 연결정보 메시지를 보내 재연결 시도하는 로직 구현해보기
}