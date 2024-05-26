import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('MyListController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/my-list/add (POST)', () => {
    return request(app.getHttpServer())
      .post('/my-list/add')
      .send({ userId: 'user1', itemId: 'movie1', itemType: 'Movie' })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('userId', 'user1');
        expect(res.body).toHaveProperty('itemId', 'movie1');
        expect(res.body).toHaveProperty('itemType', 'Movie');
      });
  });

  it('/my-list/remove (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/my-list/remove')
      .send({ userId: 'user1', itemId: 'movie1' })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('deleted', true);
      });
  });

  it('/my-list/items (GET)', () => {
    return request(app.getHttpServer())
      .get('/my-list/items')
      .query({ userId: 'user1', page: 1, limit: 10 })
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('items');
        expect(Array.isArray(res.body.items)).toBe(true);
        expect(res.body).toHaveProperty('total');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
