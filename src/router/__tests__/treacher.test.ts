import supertest from 'supertest';
import server from '../../server';

const request = supertest(server);

describe('teacher Classroom Tests', () => {
  it('Should return classroom created', async () => {
    const response = await request.post('/teachers/1/classrooms').send({
      name: 'Mathematics',
      subject: 'Maths',
    });
    expect(response.status).toBe(201);
  });

  it('Should return classrooms', async () => {
    const response = await request.get('/teachers/1/classrooms');
    expect(response.status).toBe(200);
    });
});