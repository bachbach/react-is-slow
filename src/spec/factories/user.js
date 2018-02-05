import faker from 'faker'
import user from 'spec/fixtures/user.json'

export default function () {
  const userId = faker.random.uuid()

  return {
    ...user,
    id: userId,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    age: Math.floor((Math.random() * 80) + 20),
    job: {
      id: faker.random.uuid(),
      userId,
      jobDescriptor: faker.name.jobDescriptor(),
      jobArea: faker.name.jobArea(),
      jobType: faker.name.jobType()
    }
  }
}
